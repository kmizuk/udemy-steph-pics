import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID TKXAeOiOL0T0mt9fXJUkbMF0V8ZhyVWSrJlWhdc4a58",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* ②apiを叩くコンポーネントを属性に付与 */}
      </div>
    );
  }
}

export default App;
