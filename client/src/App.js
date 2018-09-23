import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar";

class App extends Component {
  state = {
    response: ""
  };
  /*
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    this.callApi2()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  */
  /*
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callApi2 = async () => {
    const response = await fetch("/api/hello2");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
*/
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container" />
      </React.Fragment>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
      */
    );
  }
}

export default App;
