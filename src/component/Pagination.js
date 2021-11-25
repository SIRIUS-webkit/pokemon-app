import React, { useState } from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const [checknumber, setChecknumber] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function doClick(number) {
    paginate(number);
    setChecknumber(number);
  }
  return (
    <nav className="navigation_wrapper">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={checknumber === number ? "active" : "none"}
          >
            <a
              onClick={() => doClick(number)}
              href="#!"
              className={checknumber === number ? "active" : "none"}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
