import React from 'react';
import { Link } from 'react-router-dom';

const docFiles = ["test.md"]; // Example files

const LandingPage = () => {
  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        {docFiles.map(file => (
          <li key={file}>
            <Link to={`/docs/${file.replace('.md', '')}`}>{file}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
