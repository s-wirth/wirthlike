import "css/main";
import React from "react";
import ReactDom from "react-dom";
import App from "elements/App";
import FastClick from "fastclick";
import BackgroundMusic from "services/BackgroundMusic";
import GameState from "GameState";

BackgroundMusic.create({ gameState: GameState });

FastClick.attach(document.body);

const rootElement = document.createElement("div");
rootElement.className = "root";
document.body.appendChild(rootElement);

ReactDom.render(<App />, rootElement);
