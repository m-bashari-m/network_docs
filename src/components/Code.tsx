import { ReactNode, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, PasteIcon } from "./Icons";

export type CodeProps = {
  language: string;
  children: ReactNode;
};

const Code = ({ children, language }: CodeProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <CopyToClipboard text={children as string} onCopy={() => setCopied(true)}>
        <button className="icon copy-icon">
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={materialDark}>
        {children as string}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
