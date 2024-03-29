import { Link } from "react-router-dom";
import { DocConfig } from "../types/types";
import { FaArrowRightLong } from "react-icons/fa6";
import defaultImage from "../../public/doc_logos/050_doc_logo.webp";
import Tag from "./Tag";

export type DocTableRowProps = {
  doc: DocConfig;
  onTagClick: (type: Tag) => void;
  index: number;
};

const DocTableRow = ({ doc, onTagClick, index }: DocTableRowProps) => {
  const image = doc.image || defaultImage;

  return (
    <div className="flex justify-between border-b last:border-b-0 group bg-background-primary">
      <div className="flex items-center justify-center w-12 transition group-hover:bg-background-secondary border-r text-white">
        {index}
      </div>

      <div className="relative w-full">
        <Link
          to={`/docs/${doc.fileName}`}
          className="flex items-center px-6 py-4 transition group-hover:bg-background-secondary gap-4"
        >
          <img src={image} alt="doc image" className="rounded-full w-24 h-24" />
          <div className="flex flex-col">
            <p className="text-white text-2xl break-all">{doc.title}</p>
            <br />
            {doc.description && (
              <p className="text-text-secondary text-md">{doc.description}</p>
            )}

            <div className="flex gap-1 my-2 flex-wrap">
              {doc.tags?.map((tag) => (
                <Tag type={tag} onTagClick={onTagClick} />
              ))}
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center w-12 group-hover:bg-background-secondary transition group-hover:animate-pulse border-l">
        <FaArrowRightLong className="text-white" />
      </div>
    </div>
  );
};

export default DocTableRow;
