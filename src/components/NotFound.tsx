import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export type NotFoundProps = {
  message?: string;
};

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <div className="centered flex flex-col items-center gap-4">
      <h1 className="text-5xl text-white">{message || "Not Found | 404"}</h1>
      <Link to="/" className="button">
        <FaHome />
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
