import { useParams } from "react-router-dom";
import data from "../../docs/data";

const Header = () => {
  const { docName } = useParams<{ docName: string }>();

  const docIndex = data.findIndex((doc) => doc.fileName === docName);

  return (
    <header className="w-full flex justify-center bg-background-secondary py-2">
      <div className="w-11/12 max-w-[900px] flex items-center">
        <h2 className="capitalize text-white">{data[docIndex].title}</h2>
      </div>
    </header>
  );
};

export default Header;
