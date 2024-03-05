// DocPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from "markdown-to-jsx"
import Code from './Code';
import Header from './Header';


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
    <>
      <Header />
      
      <article className="article">
        <div className="container">
          <div className="post-wrapper">
            <Markdown options={{
              overrides: {
                Code: {
                  component: Code
                }
              }
            }}>
              {markdownContent}
            </Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default DocPage;
