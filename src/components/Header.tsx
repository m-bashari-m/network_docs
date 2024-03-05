import { useContext } from "react";
import { LogoIcon, MoonIcon, SunIcon } from "./Icons";
import { useParams } from "react-router-dom";

const Header = () => {
  const { docName } = useParams<{ docName: string }>();

  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <LogoIcon />
            <span>{docName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;