import ReactDOM from "react-dom";
import React from "react";
import "css/ScrollScreen";

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  onKeyUp() {
    const { switchFromIntroToDungeon } = this.props;
    switchFromIntroToDungeon();
  }

  render() {
    return (
      <div
        className="ScrollScreen ScrollScreen--introScreen"
        tabIndex="99" onKeyUp={ this.onKeyUp } onClick={ this.onKeyUp }
      >
        <h1>Dungeon's Revenge</h1>
        <h3>
          This is a Rogue Like. To beat it, you have hack your way through the dungeon and defeat
          the boss.
        </h3>
        <b>If you die you're done for. No extra lives.</b>
        <br />
        <b>Move with the arrow keys</b>
        <h2>Press any key to start</h2>
      </div>
    );
  }
}

IntroScreen.propTypes = {
  switchFromIntroToDungeon: React.PropTypes.func.isRequired,
};

export default IntroScreen;
