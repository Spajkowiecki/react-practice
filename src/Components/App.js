import { Component } from "react";
import Select from "./Select/Select";

const BASE_URL = "https://rickandmortyapi.com/api/";

class App extends Component {
  getData = () => {
    fetch(BASE_URL)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    console.log(this.getData());
    //const { options } = this.state;
    //    console.log(categories["characters"]);
    return <div></div>;
  }
}

export default App;
