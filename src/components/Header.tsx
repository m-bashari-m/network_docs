import { Link, useNavigate, useParams } from "react-router-dom";
import data from "./docs/data";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const { docName } = useParams<{ docName: string }>();
  const navigate = useNavigate();

  const docIndex = data.findIndex((doc) => doc.fileName === docName);

  if (docIndex === -1) {
    navigate("/docs/404");
    return;
  }

  return (
    <header className="w-full flex justify-center bg-background-secondary py-2">
      <div className="w-11/12 max-w-[900px] flex items-center gap-4">
        <Link to="/">
          <FaHome className="w-10 h-10 text-sky-500 hover:cursor-pointer" />
        </Link>
        <h2 className="capitalize text-white">{data[docIndex].title}</h2>
      </div>
    </header>
  );
};

export default Header;
