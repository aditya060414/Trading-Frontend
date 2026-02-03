import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="support-section-hero-container">
    <div className="support-section-hero">
      <div className="support-page-hero">
        <h2>
          <Link className="support-portal" to="/support">
            Support Portal
          </Link>
        </h2>
        <button type="button" class="btn btn-primary">
          My Tickets
        </button>
      </div>
      <div className="support-search">
          <span class="material-symbols-outlined search-symbol">search</span>
          <input
            className="support-searchbar"
            type="text"
            id="search"
            name="search"
            autoComplete="off"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            autoFocus="off"
          />
      </div>
    </div>
    </div>
  );
}
