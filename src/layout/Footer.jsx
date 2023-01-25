import React from 'react';

export function Footer() {
  return (
      <footer className="page-footer cyan accent-5">

        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" target="_blank"
             href="https://github.com/DuckPluck/react-movies">Repo</a>
        </div>

      </footer>
  );
}