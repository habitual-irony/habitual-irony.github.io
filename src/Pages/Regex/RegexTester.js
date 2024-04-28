import React, {useRef, useState, useEffect} from 'react';
import './RegexTester.css';
import {CCard, CCardBody, CCardText, CCardTitle, CCol, CFormCheck, CRow,} from '@coreui/react';
import Editor from "@monaco-editor/react";

const RegexTester = () => {
    const [regex, setRegex] = useState('');
    const [text, setText] = useState('');
    const [matches, setMatches] = useState([]);
    const editorRef = useRef(null);
    const [options, setOptions] = useState({
        '직접 입력': '',
        '휴대폰번호': '\\d{3}-\\d{3,4}-\\d{4}$',
        '이메일': '^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$',
        '비밀번호': '.*(?=^.{8,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'
    });

    const handleRegexChange = (e) => {
        setRegex(e.target.value);
    };

    const handleOptionChange = (option) => {
        setRegex(options[option]);
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const handleEditorChange = (value) => {
        setText(value);
    };

    useEffect(() => {
        const re = new RegExp(regex, 'gm');
        const foundMatches = text.match(re) || [];
        setMatches(foundMatches);
    }, [regex, text]);

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

    return (
        <CRow>
            <CCol xs={12} className={'mb-2'}>
                <Editor
                    height='calc(40vh)'
                    width='100%'
                    defaultLanguage='java'
                    onMount={handleEditorDidMount}
                    value={text}
                    options={editorOptions}
                    onChange={handleEditorChange}
                />
            </CCol>
            <CCol xs={12} className={'mb-2'}>
                {Object.keys(options).map((option, index) => (
                    <CFormCheck
                        key={index}
                        id={option}
                        name="options"
                        label={option}
                        checked={regex === options[option]}
                        onChange={() => handleOptionChange(option)}
                    />
                ))}
            </CCol>
            <CCol xs={12} className={'mb-2'}>
                <textarea
                    className="regex-input"
                    placeholder="Enter regex here..."
                    value={regex}
                    onChange={handleRegexChange}
                />
            </CCol>
            <CCol xs={12} className={'mb-2'}>
                <CCard>
                    <CCardBody>
                        <CCardTitle>Matches:</CCardTitle>
                        <CCardText>
                            {matches.map((match, index) => (
                                <span key={index} className="match">{match}</span>
                            ))}
                        </CCardText>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default RegexTester;
