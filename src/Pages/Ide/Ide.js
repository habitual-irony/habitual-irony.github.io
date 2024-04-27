import React, { useEffect, useRef, useState } from 'react';
import axios from '../../Components/AxiosInstance';
import Editor, { useMonaco } from '@monaco-editor/react';
import TomorrowDarkTheme from 'monaco-themes/themes/Tomorrow-Night.json';
import TomorrowTheme from 'monaco-themes/themes/Tomorrow.json';
import {
    CRow,
    CCol,
    CButton,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText
} from '@coreui/react'
import { javaDefaultValue } from './defaultValues';

const Ide = () => {
    const monaco = useMonaco();
    const editorRef = useRef(null);
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const editorOptions = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        fontSize: 14,
        minimap: {
            enabled: true,
        },
        suggest: {
            // 자동완성 제안 활성화
            snippetsPreventQuickSuggestions: true,
            suggestions: [],
        },
        padding: {
            top: 10,
            bottom: 10,
            left: 20,
            right: 20,
        },
        tabSize: 2,
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const handleEditorChange = (value) => {
        setCode(value);
    };

    useEffect(() => {
        if (!monaco) return;

        monaco.editor.defineTheme('tomorrow', TomorrowTheme);
        monaco.editor.defineTheme('tomorrowDark', TomorrowDarkTheme);

        monaco.editor.setTheme('tomorrowDark');

    }, [monaco, true]);

    useEffect(() => {
        setCode(javaDefaultValue);
    }, [])

    const compile = async () => {
        const code = editorRef.current.getValue();
        setResult('코드 컴파일 진행중 ...');
        const Data = {
            code
        };
        await axios
            .post('/ide/compile', Data)
            .then((res) => {
                console.log(res);
                if(res.data.result === "success") {
                    setResult(res.data.return);
                } else {
                    setResult(res.data.SystemOut.replaceAll(" ", "  "));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <CRow>
            <CCol xs={12} className={'mb-2'}>
                <Editor
                    height='calc(40vh)'
                    width='100%'
                    defaultLanguage='java'
                    value= {code}
                    onMount={handleEditorDidMount}
                    options={editorOptions}
                    onChange={handleEditorChange}
                />
            </CCol>
            <CCol xs={12} className={'mb-2'}>
                <CCard>
                    <CCardBody>
                        <CCardTitle>결과</CCardTitle>
                        <CCardText style={{whiteSpace:'pre'}}>
                            {result}
                        </CCardText>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12} className={'d-grid gap-1 d-md-flex justify-content-md-end'}>
                <CButton color="primary" variant="outline" size="lg" onClick={compile} disabled>Compile</CButton>
            </CCol>
        </CRow>
    )
}

export default Ide
