import React, { useState } from 'react';
import './CopyToClipboard.css';

function CopyToClipboard() {
    const code = `npx create vite`;

    const [isCopied, setIsCopied] = useState(false);

    //https://developer.mozilla.org/en-US/docs/Web/API/Navigator
    //https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/
    async function copyTextToClipboard(text) {
        console.log(text)
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }

    }

    function handleCopy() {
        setIsCopied(true);
        copyTextToClipboard(code)
            .then(() => {
                setTimeout(() => {
                    setIsCopied(false)
                }, 2000)
            })
            .catch(err => {
                console.log(err);
            })




    }
    return (
        <div className='codeBox'>
            <code className='copyContainer'>
                {code}
            </code>
            <div className='copyIcon' onClick={handleCopy}>
                Copy
            </div>
            <div className='copiedAlert'

                style={{
                    visibility: `${isCopied ? 'visible' : 'hidden'}`,
                    opacity: `${isCopied} ? '1' : '0'`,
                    transform: `${isCopied ? `translate(0px, 0px)` : `translate(0px, 40px) `}`,
                    transition: '0.4s ease-in'
                }}

            >
                Copied to clipboard
            </div>
        </div>
    )
}

export default CopyToClipboard