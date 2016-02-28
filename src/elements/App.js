import React from "react";
import GameState from "GameState";
import Dungeon from "elements/Dungeon";

// This has to match the tile width in the CSS
const TILE_WIDTH = 16;

const App = React.createClass({
  getInitialState() {
    return {};
  },

  componentWillMount() {
    GameState.on("change", () => this.getState());
    this.getState();
  },

  getState() {
    this.setState({
      playerPosition: GameState.playerPosition,
      creatures: GameState.creatures,
      map: GameState.map,
    });
  },

  renderCreatures() {
    let creatures = this.state.creatures;

    if (!creatures) return null;

    return creatures.map( (creature) => {
      return (
        <div
          className={ `${creature.type}-creature` }
          key={`creature-${creature.x}-${creature.y}`}
          style={{ left: creature.x * TILE_WIDTH, top: creature.y * TILE_WIDTH }}
        >
          8(
        </div>
      );
    });
  },

  render() {
    let { playerPosition, map } = this.state;
    let x = playerPosition.x;
    let y = playerPosition.y;

    return (
      <div className="scene">
        <Dungeon map={ map } />
        <div className="player" style={{ left: x * TILE_WIDTH, top: y * TILE_WIDTH }} key="player"> :) </div>
        { this.renderCreatures() }
      </div>
    );
  },
});

export default App;
