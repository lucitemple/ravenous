import React from "react";
import "./SearchBar.css";

/* const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
}; */

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByChange(sortByOption) {
    console.log(sortByOption);
    this.setState({ sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
    console.log(event.target.value);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOptionKey) => {
      let sortByOptionValue = this.sortByOptions[sortByOptionKey];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOptionKey}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="http://">Let's Go</a>
        </div>
      </div>
    );
  }
}
