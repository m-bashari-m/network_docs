// DocPage.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Code from "./Code";
import Header from "./Header";
import Footer from "./Footer";
import data from "../../docs/data";
import { DocConfig } from "../types/types";

const DocPage = () => {
  const { docName } = useParams<{ docName: string }>();
  const [markdownContent, setMarkdownContent] = useState("");
  const [nextDoc, setNextDoc] = useState<DocConfig>();
  const [prevDoc, setPrevDoc] = useState<DocConfig>();

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

    const docIndex = data.findIndex((doc) => doc.fileName === docName);

    if (docIndex === -1) {
      return;
    }

    if (docIndex > 0) {
      setPrevDoc(data[docIndex - 1]);
    } else {
      setPrevDoc(undefined);
    }

    if (docIndex < data.length - 1) {
      setNextDoc(data[docIndex + 1]);
    } else {
      setNextDoc(undefined);
    }
  }, [docName]);

  return (
    <>
      <Header />

      <article className="container border-0">
        <div className="post-wrapper">
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {markdownContent}
          </Markdown>
        </div>
      </article>

      <Footer nextDoc={nextDoc} prevDoc={prevDoc} />
    </>
  );
};

export default DocPage;
