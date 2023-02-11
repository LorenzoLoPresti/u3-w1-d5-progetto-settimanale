import { Component } from "react";
import img from "../img/6.png";

class Cards extends Component {
  render() {
    return (
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img} alt="movie picture" />
      </div>
    );
  }
}

export default Cards;
