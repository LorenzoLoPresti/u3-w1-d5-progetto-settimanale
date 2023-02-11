import { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 px-1">
        <img
          className="image-fluid posterImg"
          src={this.props.posterImg}
          //   alt="movie picture"
          style={{
            overflow: "hidden",
          }}
          alt=""
        />
      </div>
    );
  }
}

export default Cards;
