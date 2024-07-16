import React from 'react';
import { Outlet } from 'react-router-dom';

const linksData = require("../data/links.json");

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
            {linksData.map((link, index) => (
              <li key={index}>
                <a href={`#${link.href}`}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
