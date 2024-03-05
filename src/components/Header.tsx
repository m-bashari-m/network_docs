import { useParams } from "react-router-dom";

const Header = () => {
  const { docName } = useParams<{ docName: string }>();

  return (
    <header className="w-full flex justify-center bg-background-secondary py-2">
      <div className="w-11/12 max-w-[900px] flex items-center">
        <h2 className="capitalize text-white">{docName}</h2>
      </div>
    </header>
  );
};

export default Header;
