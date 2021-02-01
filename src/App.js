import React, { Component } from "react";
import "./App.css";

var imageback = require("./imgfolder/emojii/imageback.png").default;

class Building extends Component {
  constructor(props) {
    super(props);

    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }

    var imgArr = [
      require("./imgfolder/emojii/emojii_01.png").default,
      require("./imgfolder/emojii/emojii_02.png").default,
      require("./imgfolder/emojii/emojii_03.png").default,
      require("./imgfolder/emojii/emojii_04.png").default,
      require("./imgfolder/emojii/emojii_05.png").default,
      require("./imgfolder/emojii/emojii_06.png").default,
      require("./imgfolder/emojii/emojii_07.png").default,
      require("./imgfolder/emojii/emojii_08.png").default,
      require("./imgfolder/emojii/emojii_09.png").default,
      require("./imgfolder/emojii/emojii_10.png").default,
      require("./imgfolder/emojii/emojii_11.png").default,
      require("./imgfolder/emojii/emojii_12.png").default,
      require("./imgfolder/emojii/emojii_13.png").default,
      require("./imgfolder/emojii/emojii_14.png").default,
      require("./imgfolder/emojii/emojii_15.png").default,
      require("./imgfolder/emojii/emojii_16.png").default,
      require("./imgfolder/emojii/emojii_17.png").default,
      require("./imgfolder/emojii/emojii_18.png").default,
      require("./imgfolder/emojii/emojii_01.png").default,
      require("./imgfolder/emojii/emojii_02.png").default,
      require("./imgfolder/emojii/emojii_03.png").default,
      require("./imgfolder/emojii/emojii_04.png").default,
      require("./imgfolder/emojii/emojii_05.png").default,
      require("./imgfolder/emojii/emojii_06.png").default,
      require("./imgfolder/emojii/emojii_07.png").default,
      require("./imgfolder/emojii/emojii_08.png").default,
      require("./imgfolder/emojii/emojii_09.png").default,
      require("./imgfolder/emojii/emojii_10.png").default,
      require("./imgfolder/emojii/emojii_11.png").default,
      require("./imgfolder/emojii/emojii_12.png").default,
      require("./imgfolder/emojii/emojii_13.png").default,
      require("./imgfolder/emojii/emojii_14.png").default,
      require("./imgfolder/emojii/emojii_15.png").default,
      require("./imgfolder/emojii/emojii_16.png").default,
      require("./imgfolder/emojii/emojii_17.png").default,
      require("./imgfolder/emojii/emojii_18.png").default,
    ];

    shuffle(imgArr);

    var sizing = this.props.sizeValue;

    this.state = {
      showInfo: false,
      xCoor: null,
      yCoor: null,
      size: 0,
      choicesX: [],
      choicesY: [],
      imgArrS: imgArr,
      puzStep: 0,
      sizes: sizing,
      doubleClick: false,

      foundH: [],
      foundHV: [],
      score: 50,
      isMatch: false,
      isWin: false,
      numOfMatch: 0,
    };
  }

  resethome() {
    var imgArr = [
      require("./imgfolder/emojii/emojii_01.png").default,
      require("./imgfolder/emojii/emojii_02.png").default,
      require("./imgfolder/emojii/emojii_03.png").default,
      require("./imgfolder/emojii/emojii_04.png").default,
      require("./imgfolder/emojii/emojii_05.png").default,
      require("./imgfolder/emojii/emojii_06.png").default,
      require("./imgfolder/emojii/emojii_07.png").default,
      require("./imgfolder/emojii/emojii_08.png").default,
      require("./imgfolder/emojii/emojii_09.png").default,
      require("./imgfolder/emojii/emojii_10.png").default,
      require("./imgfolder/emojii/emojii_11.png").default,
      require("./imgfolder/emojii/emojii_12.png").default,
      require("./imgfolder/emojii/emojii_13.png").default,
      require("./imgfolder/emojii/emojii_14.png").default,
      require("./imgfolder/emojii/emojii_15.png").default,
      require("./imgfolder/emojii/emojii_16.png").default,
      require("./imgfolder/emojii/emojii_17.png").default,
      require("./imgfolder/emojii/emojii_18.png").default,
      require("./imgfolder/emojii/emojii_01.png").default,
      require("./imgfolder/emojii/emojii_02.png").default,
      require("./imgfolder/emojii/emojii_03.png").default,
      require("./imgfolder/emojii/emojii_04.png").default,
      require("./imgfolder/emojii/emojii_05.png").default,
      require("./imgfolder/emojii/emojii_06.png").default,
      require("./imgfolder/emojii/emojii_07.png").default,
      require("./imgfolder/emojii/emojii_08.png").default,
      require("./imgfolder/emojii/emojii_09.png").default,
      require("./imgfolder/emojii/emojii_10.png").default,
      require("./imgfolder/emojii/emojii_11.png").default,
      require("./imgfolder/emojii/emojii_12.png").default,
      require("./imgfolder/emojii/emojii_13.png").default,
      require("./imgfolder/emojii/emojii_14.png").default,
      require("./imgfolder/emojii/emojii_15.png").default,
      require("./imgfolder/emojii/emojii_16.png").default,
      require("./imgfolder/emojii/emojii_17.png").default,
      require("./imgfolder/emojii/emojii_18.png").default,
    ];
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    shuffle(imgArr);

    var sizing = this.props.sizeValue;

    this.setState((state) => {
      return {
        showInfo: false,
        xCoor: null,
        yCoor: null,
        size: 0,
        choicesX: [],
        choicesY: [],

        imgArrS: imgArr,
        puzStep: 0,

        sizes: sizing,

        foundH: [],
        foundHV: [],
        doubleClick: false,
        isMatch: false,
        score: 50,
        isWin: false,
        numOfMatch: 0,
      };
    });
  }

  clickTime(x, y, superIndex, level) {
    var {
      foundH,
      choicesX,
      choicesY,
      puzStep,
      imgArrS,
      doubleClick,
      score,
      isMatch,
    } = this.state;
    if (level == 1) {
      console.log("whoa you clicked this already!");
      this.setState((state) => {
        return {
          doubleClick: true,
          score: this.state.score - 1,
          isMatch: false,
        };
      });
    } else {
      this.setState((state) => {
        console.log(puzStep);
        if (puzStep == 0) {
          console.log("PICK ONE MORE AND TRY TO MATCH!");
          const holderX = [...state.choicesX, x];
          const holderY = [...state.choicesY, y];
          return {
            xCoor: x,
            yCoor: y,
            puzStep: this.state.puzStep + 1,
            choicesX: holderX,
            choicesY: holderY,
            score: this.state.score - 1,
            isMatch: false,
            doubleClick: false,
          };
        }
        if (puzStep == 1) {
          console.log(puzStep);
          if (
            imgArrS[superIndex] ==
            imgArrS[
              choicesY[choicesY.length - 1] * 6 + choicesX[choicesX.length - 1]
            ]
          ) {
            console.log("MATCH!");
            const holderX = [...state.choicesX, x];
            const holderY = [...state.choicesY, y];
            return {
              xCoor: x,
              yCoor: y,
              puzStep: 0,
              choicesX: holderX,
              choicesY: holderY,
              score: this.state.score + 10,
              isMatch: true,
              doubleClick: false,
              numOfMatch: this.state.numOfMatch + 1,
            };
          } else {
            console.log("NO MATCH!");
            const holderX = [...state.choicesX, x];
            const holderY = [...state.choicesY, y];
            console.log(holderX);
            console.log(holderY);
            return {
              xCoor: x,
              yCoor: y,
              puzStep: 0,
              choicesX: holderX,
              choicesY: holderY,
              score: this.state.score - 1,
              doubleClick: false,
            };
          }
        }
      });
      if (
        puzStep == 1 &&
        imgArrS[superIndex] !==
          imgArrS[
            choicesY[choicesY.length - 1] * 6 + choicesX[choicesX.length - 1]
          ]
      ) {
        setTimeout(() => this.noMatch(), 250);
      }
    }
  }
  noMatch() {
    var { foundH, choicesX, choicesY, puzStep, imgArrS } = this.state;
    console.log("before" + puzStep);

    choicesX.pop();
    choicesY.pop();
    choicesX.pop();
    choicesY.pop();
    console.log("popping one now");
  }

  renderSquare(x, y) {
    var { choicesX, choicesY, sizes, imgArrS } = this.state;
    var run = x;
    var rise = y;
    //var sizes = this.props.sizeValue;
    var level = 0;
    var superIndex = y * sizes + x;
    var z;
    for (z = 0; z < choicesX.length; z++) {
      if (choicesX[z] == x && choicesY[z] == y) {
        level = 1;
      }
    }

    if (level == 0) {
      var findex = (x * sizes + y) % 6;
      return (
        <button
          id="squareHidden"
          onClick={() => this.clickTime(x, y, superIndex, level)}
        >
          <img src={imageback} alt="mystery"></img>
        </button>
      );
    } else if (level == 1) {
      return (
        <button
          id="squareHidden"
          onClick={() => this.clickTime(x, y, superIndex, level)}
        >
          <img src={imgArrS[superIndex]} alt="mystery"></img>
        </button>
      );
    }
  }

  render() {
    var { foundH, doubleClick, score, isMatch, numOfMatch } = this.state;
    console.log(foundH);
    const boardA = this.props.sizeValue;

    const elementS = [];
    const elementZ = [];

    var x;
    var y;

    for (y = 0; y < boardA; y++) {
      for (x = 0; x < boardA; x++) {
        elementS.push(<span>{this.renderSquare(x, boardA - y - 1)}</span>);
      }
      elementZ.push(
        <div className="newLine">
          <span>
            {elementS.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </span>
        </div>
      );
      for (x = 0; x < boardA; x++) {
        elementS.pop();
      }
    }

    const gridDisplay = (
      <div>
        {elementZ.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
      </div>
    );

    const matchCelebrate = (
      <div id="instructionGreen">Great Match! + 10 points !</div>
    );

    const placeholder = (
      <div id="instructionPlace">
        <div>only a place holder</div>
      </div>
    );

    const instructions = (
      <div id="instruction">
        Click below to find and match the emojiis!
        <div id="score">
          SCORE = {score}
          {isMatch ? matchCelebrate : placeholder}
        </div>
      </div>
    );

    const instructionsDouble = (
      <div id="instructionRed">
        Oops! try a different one!
        <div id="score">
          SCORE = {score} {isMatch ? matchCelebrate : placeholder}
        </div>
      </div>
    );

    const instructionsWin = (
      <div id="instruction">
        You matched all of the emojiis. Amazing!
        <div id="score">Your final score was {score}. Amazing! </div>
      </div>
    );

    return (
      <div>
        {doubleClick && numOfMatch !== 18 ? instructionsDouble : instructions}
        {numOfMatch == 18 ? instructionsWin : null}

        <div id="entireThing">
          <div id="info">{gridDisplay}</div>
          <div>
            <button
              type="button"
              class="button"
              onClick={() => this.resethome()}
            >
              Generate a New Puzzle
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
    };
  }
  enterCount() {
    var zvalue = document.getElementById("sizeHere").value;

    this.setState((state) => {
      return { count: zvalue, xCoor: null, yCoor: null };
    });
  }

  render() {
    var { count } = this.state;

    const inputBox = (
      <div>
        Choose the size of your board
        <form>
          <input type="number" class="button" id="sizeHere"></input>
          <button
            type="button"
            class="button"
            onClick={() => this.enterCount()}
          >
            ENTER
          </button>
        </form>
      </div>
    );
    return (
      <div>
        <p class="toptitle">Emojii Matching Game</p>
        <Building sizeValue={count} />
      </div>
    );
  }
}

export default App;
