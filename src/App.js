import React, { Component } from 'react';

class App extends Component {
  state = { weather: {} };
  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=qoappiddreqstex',
    )
      .then(response => response.json())
      .then(data => {
        const weather = data;
        this.setState({ weather });
      });
  }

  render() {
    if (!this.state.weather.list) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.state.weather.list.length}</h1>
      </div>
    );
  }
}

export default App;
