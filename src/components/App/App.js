import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList.js";
import SearchBar from "../SearchBar/SearchBar.js";
import { Yelp } from "../../util/Yelp.js";

/* const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business]; */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`${term} ${location} ${sortBy}`)
    Yelp.search(term, location, sortBy).then(businesses => {
      return this.setState({businesses: businesses});
    })
    ;
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
