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
          <ul className="ability-list">
            <li className="ability-list__item">Screams</li>
            <li className="ability-list__item">Words
              <ul className="ability-list">
                <li className="ability-list__item">Bird</li>
                <li className="ability-list__item">Rigby!</li>
                <li className="ability-list__item">Can you step up?</li>
                <li className="ability-list__item">Rigbird</li>
                <li className="ability-list__item">Whatchu?</li>
              </ul>
            </li>
            <li className="ability-list__item"></li>
            <li className="ability-list__item"></li>
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
