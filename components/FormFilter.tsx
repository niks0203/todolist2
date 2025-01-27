import { useState } from "react";

export function FormFilter({ activeOption }) {
  function handleClickFilter(event) {
    // Get all <li> elements
    const listItems = document.querySelectorAll(".toggle-list p");

    // Remove the 'active' class from all <li> elements
    listItems.forEach((item) => {
      item.classList.remove("clicked");
    });

    // Add the 'active' class to the clicked <li>
    event.target.classList.add("clicked");

    activeOption(event.target.id);
  }
  return (
    <div className="toggle-list" onClick={handleClickFilter}>
      <p id="all" className="all-list pb-2">
        All
      </p>
      <p id="active" className="active-list  pb-2">
        Active
      </p>
      <p id="completed" className="completed-list  pb-2">
        Completed
      </p>
    </div>
  );
}
