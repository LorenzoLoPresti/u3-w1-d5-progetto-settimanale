import { Component } from "react";

import TrendingNow from "./TrendingNow";

class MainContent extends Component {
  state = {
    categories: [
      ["Trending now", "harry+potter"],
      ["Watch it now", "star+wars"],
      ["New releases", "sherlock+holmes"],
    ],
  };
  render() {
    return this.state.categories.map((e, index) => (
      <div className="text-left px-4">
        <TrendingNow
          categoryName={e[0]}
          key={`MovieSectionKey${index}`}
          productQuery={e[1]}
        />
      </div>
    ));
  }
}
export default MainContent;
