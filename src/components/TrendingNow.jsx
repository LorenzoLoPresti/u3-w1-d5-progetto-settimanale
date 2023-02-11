import { Component } from "react";
import Cards from "./Cards";

class TrendingNow extends Component {
  state = {
    cardsArr: [1, 2, 3, 4, 5, 6],
  };

  trendingFetch = () => {
    fetch();
  };
  render() {
    return (
      <>
        <h4>{this.props.categoryName}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {this.state.cardsArr.map((e, index) => (
            <Cards key={"cardsKeyNumber" + index} />
          ))}
        </div>
      </>
    );
  }
}
export default TrendingNow;
