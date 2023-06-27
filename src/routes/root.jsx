import { Outlet } from "react-router-dom";

const linksData = require("../data/links.json")

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
          {linksData.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}