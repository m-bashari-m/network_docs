// DocPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const DocPage = () => {
  const { docName } = useParams<{ docName: string }>();
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const filePath = `/docs/${docName}.md`;
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Could not fetch the file: ${response.statusText}`);
        }
        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdown();
  }, [docName]);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default DocPage;
