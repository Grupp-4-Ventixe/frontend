import React from "react";
import {
  Search,
  SlidersHorizontal,
  CalendarDays,
  LayoutGrid,
  Menu,
  ChevronDown,
} from "lucide-react";
import "./EventFilters.css";

const EventFilters = ({ 
  viewMode, 
  onViewModeChange, 
  statusFilter, 
  onStatusFilterChange, 
  statusCounts,
}) => {
  return (
    <div className="filters-wrapper">
      <div className="status-filters">
        {["Active", "Draft", "Past"].map((status) => (
            <button
            key={status}
            className={`status-button ${statusFilter === status ? "active" : ""}`}
            onClick={() => onStatusFilterChange(status)}
            >
            {status}{" "}
            <span>
                ({statusCounts[status] || 0})
            </span>
            </button>
        ))}
      </div>


      <div className="search-and-filters">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search event, location, etc"
            className="search-input"
          />
          <Search className="search-icon" size={16} />
        </div>

        <button className="icon-button">
          <SlidersHorizontal size={16} />
        </button>

        <button className="dropdown-button">
          <CalendarDays size={16} />
          <span>This Month</span>
          <ChevronDown size={16} />
        </button>

        <button
          className={`icon-toggle ${viewMode === "grid" ? "active" : ""}`}
          onClick={() => onViewModeChange("grid")}
        >
          <LayoutGrid size={16} />
        </button>

        <button
          className={`icon-toggle ${viewMode === "list" ? "active" : ""}`}
          onClick={() => onViewModeChange("list")}
        >
          <Menu size={16} />
        </button>
      </div>
    </div>
  );
};

export default EventFilters;
