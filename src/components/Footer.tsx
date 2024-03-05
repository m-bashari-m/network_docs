import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { DocConfig } from "../types/types";
import { Link } from "react-router-dom";

export type FooterProps = {
  nextDoc?: DocConfig;
  prevDoc?: DocConfig;
};

const Footer = ({ nextDoc, prevDoc }: FooterProps) => {
  return (
    <div className="flex container border-0 relative">
      {prevDoc && (
        <Link
          to={`/docs/${prevDoc.fileName}`}
          className="flex items-center justify-between gap-2 border rounded-lg p-4 max-w-[50ch] text-ellipsis text-white bg-background-secondary hover:opacity-90 hover:cursor-pointer"
        >
          <FaArrowLeft />
          {prevDoc.title}
        </Link>
      )}
      {nextDoc && (
        <Link
          to={`/docs/${nextDoc.fileName}`}
          className=" flex items-center justify-between gap-2 border rounded-lg p-4 max-w-[50ch] text-white bg-background-secondary hover:opacity-90 hover:cursor-pointer"
        >
          {nextDoc.title}
          <FaArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Footer;
