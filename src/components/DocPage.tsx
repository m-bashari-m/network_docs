import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Code from "./Code";
import Header from "./Header";
import Footer from "./Footer";
import data from "../../docs/data";
import { DocConfig } from "../types/types";
import Spinner from "./Spiiner";

const DocPage = () => {
  const { docName } = useParams<{ docName: string }>();
  const [markdownContent, setMarkdownContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [nextDoc, setNextDoc] = useState<DocConfig>();
  const [prevDoc, setPrevDoc] = useState<DocConfig>();

  const navigate = useNavigate();

  useEffect(() => {
    const docIndex = data.findIndex((doc) => doc.fileName === docName);
    if (docIndex === -1) {
      navigate("/docs/404", { replace: true });
      return;
    }

    const fetchMarkdown = async () => {
      const filePath = `/docs/${docName}.md`;
      setIsLoading(true);
      try {
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Could not fetch the file: ${response.statusText}`);
        }

        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (err) {
        return;
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    };

    fetchMarkdown();

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
  }, [docName, navigate]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default DocPage;
