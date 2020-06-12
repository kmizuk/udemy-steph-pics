import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  // 方法② async await
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      // headers: {
      //   Authorization: "Client-ID TKXAeOiOL0T0mt9fXJUkbMF0V8ZhyVWSrJlWhdc4a58",
      // },
    });
    // 方法① .then
    // .then((response) => {
    // console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* ②apiを叩くコンポーネントを属性に付与 */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
