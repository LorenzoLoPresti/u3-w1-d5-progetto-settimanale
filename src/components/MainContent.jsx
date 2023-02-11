import { Component } from "react";

import TrendingNow from "./TrendingNow";

class MainContent extends Component {
  state = {
    categories: ["Trending now", "Watch it now", "New releases"],
  };
  render() {
    return this.state.categories.map((e) => (
      <div className="text-left px-4">
        <TrendingNow categoryName={e} />
      </div>
    ));
  }
}
export default MainContent;
