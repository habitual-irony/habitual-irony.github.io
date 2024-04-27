import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // Viewer css
import { Editor } from "@toast-ui/react-editor";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const colorSyntaxOptions = {
  preset: [
    "#333333", "#666666", "#FFFFFF", "#EE2323", "#F89009", "#009A87", "#006DD7", "#8A3DB6",
    "#781B33", "#5733B1", "#953B34", "#FFC1C8", "#FFC9AF", "#9FEEC3", "#99CEFA", "#C1BEF9",
  ],
};

const CONTENT_KEY = "TOAST";

const ToastEditor = () => {
  const editorRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  let initData = `
  <br/><br/>
  # 제목

  ***~~<span style="color: #EE2323">내용</span>~~***
  
  * [x] 체크박스
  * [ ] 체크박스 2

  <br/><br/>`;

  const handleSave = () => {
    let markDownContent = editorRef.current.getInstance().getMarkdown();
    localStorage.setItem(CONTENT_KEY, markDownContent);
    setEditMode(!editMode);
  };

  const makePdf = async () => {
    const paper = document.querySelector("#pdf-download");

    const canvas = await html2canvas(paper, { scale: 2 });
    const imgData = canvas.toDataURL("image/png", 1.0);

    let imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
    let pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let margin = 10; // 출력 페이지 여백설정
    let doc = new jsPDF('p', 'mm');
    let position = 0;
    doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);

    // 첫 페이지 출력
    doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightLeft >= 20) {			// 35
      position = heightLeft - imgHeight;
      position = position - 20 ;		// -25

      doc.addPage();
      doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    doc.save('toast.pdf');

    window.open(doc.output("bloburl"))

    const pdf = new File([doc.output("blob")], "toast.pdf", {
      type: "application/pdf",
    });

    return pdf;

  };

  const init = async() => {
    let item = localStorage.getItem(CONTENT_KEY);

    if (editMode === false) {
      const viewer = new Viewer({
        el: document.querySelector(".toast-editor-viewer"),
        viewer: true,
        height: "400px",
        usageStatistics: false, // 통계 수집 거부
        plugins: [tableMergedCell],
      });

      if (item) viewer.setMarkdown(item);
      else {
        viewer.setMarkdown(initData);
        localStorage.setItem(CONTENT_KEY, initData);
      }
    }

    if (item) {
      if (editorRef.current) editorRef.current.getInstance().setMarkdown(item);
    } else {
      if (editorRef.current) {
        editorRef.current.getInstance().setMarkdown(initData);
      }
    }
  }

  useEffect(() => {
    init();
  }, [editMode]);

  return (
    <div>
      <Box sx={{ m: 2 }}>
        <h1>Toast UI Editor</h1>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ m: 1 }}
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "취소하기" : "편집하기"}
        </Button>
        <Button
            variant="outlined"
            color="primary"
            sx={{ m: 1 }}
            onClick={makePdf}
            disabled={editMode === true}
        >
          PDF로 저장
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: 1 }}
          onClick={handleSave}
          disabled={editMode === false}
        >
          저장하기
        </Button>

        {editMode === false && <div id="pdf-download" className="toast-editor-viewer"></div>}

        {editMode === true && (
          <Editor
            ref={editorRef}
            height="400px"
            placeholder="Please Enter Text."
            previewStyle="tab" // or vertical
            initialEditType="wysiwyg" // or markdown
            // hideModeSwitch={true} // 하단 숨기기
            toolbarItems={[
              // 툴바 옵션 설정
              ["heading", "bold", "italic", "strike"],
              ["hr", "quote"],
              ["ul", "ol", "task", "indent", "outdent"],
              ["table", /* "image", */ "link"],
              ["code", "codeblock"],
            ]}
            //theme="dark"
            //useCommandShortcut={false} // 키보드 입력 컨트롤 방지 ex ctrl z 등
            usageStatistics={false} // 통계 수집 거부
            plugins={[[colorSyntax, colorSyntaxOptions], tableMergedCell]}
          />
        )}
      </Box>
    </div>

  );
};

export default ToastEditor;
