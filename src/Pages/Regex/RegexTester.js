import React, {useEffect, useState} from 'react';
import './RegexTester.css';
import {javaDefaultValue} from "../Ide/defaultValues";

const RegexTester = () => {
    const [regex, setRegex] = useState('');
    const [text, setText] = useState('');
    const [options, setOptions] = useState({ ignoreCase: false, multiline: false });
    const [matches, setMatches] = useState([]);

    const handleRegexChange = (e) => {
        setRegex(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleOptionChange = (optionName) => {
        setOptions({ ...options, [optionName]: !options[optionName] });
    };

    const handleMatch = () => {
        const re = new RegExp(regex, `${options.ignoreCase ? 'i' : ''}${options.multiline ? 'm' : ''}`);
        const foundMatches = text.match(re) || [];
        setMatches(foundMatches);
    };

    return (
        <div className="regex-tester">
            <h1 className="app-title">Regex Tester</h1>
            <div className="input-section">
        <textarea
            className="text-input"
            placeholder="Enter text here..."
            value={text}
            onChange={handleTextChange}
        />
            </div>
            <div className="input-section">
                <input
                    className="regex-input"
                    type="text"
                    placeholder="Enter regex here..."
                    value={regex}
                    onChange={handleRegexChange}
                />
                <button className="match-button" onClick={handleMatch}>Match</button>
            </div>
            <div className="options-section">
                <label>
                    <input
                        type="checkbox"
                        checked={options.ignoreCase}
                        onChange={() => handleOptionChange('ignoreCase')}
                    />
                    Ignore Case
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={options.multiline}
                        onChange={() => handleOptionChange('multiline')}
                    />
                    Multiline
                </label>
            </div>
            <div className="matches-section">
                <h2 className="matches-title">Matches:</h2>
                <div className="matches">
                    {matches.map((match, index) => (
                        <span key={index} className="match">{match}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegexTester;
