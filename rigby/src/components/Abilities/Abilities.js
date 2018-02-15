import React from "react";

class Abilities extends React.Component {
  state = {
    display: false,
  };

  switchButton = event => {
    if (this.state.display) {
      this.setState({ display: false });
    } else {
      this.setState({ display: true });
    }
  };

  display = () => {
    if (this.state.display) {
      return (
        <div>
          <ul>
            <li>Screams</li>
            <li>Words
              <ul>
                <li>Bird</li>
                <li>Rigby</li>
                <li>Can you step up?</li>
                <li>Rigbird</li>
                <li>Whatchu?</li>
              </ul>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.switchButton}>Show Abilities</button>
        {this.display()}
      </div>
    );
  }
}

export default Abilities;
