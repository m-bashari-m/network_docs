import { Link } from 'react-router-dom';
import docs from "../../docs/data"

const LandingPage = () => {
  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        {docs.map(file => (
          <li key={file.path}>
            <Link to={`/docs/${file.path.replace('.md', '')}`}>{file.path.replace("./", "")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
