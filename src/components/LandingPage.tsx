import docs from "../../public/docs/data";
import DocTableRow from "./DocTableRow";
import { useEffect, useState } from "react";
import { Tag } from "../types/types";

const LandingPage = () => {
  const [searchParams, setSearchParams] = useState<Tag>();

  const handleTagClick = (type: Tag) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("type", type);
    window.history.pushState({}, "", currentUrl);

    setSearchParams(type);
  };

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(undefined);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-white text-center py-6 border-b capitalize bg-background-secondary">
        Network Documentation
      </h1>
      <div className="overflow-auto">
        {docs.map((doc, index) => {
          if (searchParams) {
            return doc.tags?.includes(searchParams) ? (
              <DocTableRow
                key={index}
                doc={doc}
                index={index + 1}
                onTagClick={handleTagClick}
              />
            ) : null;
          }
          return (
            <DocTableRow
              key={index}
              doc={doc}
              index={index + 1}
              onTagClick={handleTagClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
