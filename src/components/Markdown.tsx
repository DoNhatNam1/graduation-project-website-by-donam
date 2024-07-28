"use client";

import React, { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from 'markdown-it';
import { useRef } from 'react';

export default function MarkdownEditor() {
  const [textDesscription, setTextDesscription] = useState("");
  const [htmlDesscription, setHTMLDesscription] = useState("");
  const [file, setFile] = useState<File>()
  const mdEditorRef = useRef(null);

  async function handleImageUpload(file: File) {
    try {
        const data = new FormData();
        setFile(file)
        data.set('file', file);

        const res = await fetch('/api/upload', {
            method: 'POST',
            body: data
        });

        if (!res.ok) throw new Error(await res.text());
    } catch (error) {
        console.error(error);
    }
}

async function handleClearImage(file: File | undefined) {
    if (file) {
        try {
            const data = new FormData();
            data.set('fileName', file.name);

            const res = await fetch('/api/upload', {
                method: 'DELETE',
                body: data
            });

            if (!res.ok) throw new Error(await res.text());
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    }
    window.location.reload();
}

  const mdParser = new MarkdownIt
  

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setTextDesscription(text);
    setHTMLDesscription(html);
    if (textDesscription && htmlDesscription !== '') {
        const modifiedHTML = html.replace(/<img/g, `<Image width={500} height={500}`);
    }
}

  return (
    <React.Fragment>
            <MdEditor
            ref={mdEditorRef}
            value={textDesscription}
            onChange={handleEditorChange}
            style={{ width: "100%", height: "400px" }}
            renderHTML={text => {
                const html = mdParser.render(text);
                const modifiedHTML = html.replace(/<img/g, `<img src='/${file?.name}' alt='${file?.name}' style="width: 100%; max-height: 500px;"`);
                return `<div className="BlogLayer" style="max-width: 500px; margin: auto;">${modifiedHTML}</div>`;
            }}
            onImageUpload={handleImageUpload}
        />
        <div className="BlogStyles" dangerouslySetInnerHTML={{ __html: htmlDesscription }} />
    </React.Fragment>
  );
}
