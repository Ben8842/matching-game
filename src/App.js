//import { wait } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";

var imageback = require("./imgfolder/emojii/imageback.png").default;
//var image01 = require("./imgfolder/emojii/emojii_01.png");

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

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    this.state = {
      showInfo: false,
      xCoor: null,
      yCoor: null,
      size: 0,
      choicesX: [],
      choicesY: [],
      conflict: false,
      iChoice: false,
      iChoiceQ: false,
      imgArrS: imgArr,
      puzStep: 0,

      //this is the 'random' adjustment for x coordinate for horizontal word
      sizes: sizing,

      //this is the 'random' adjustment for y coordinate for horizontal word

      wordFound: false,
      foundH: [],
      foundHV: [],
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

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    this.setState((state) => {
      return {
        showInfo: false,
        xCoor: null,
        yCoor: null,
        size: 0,
        choicesX: [],
        choicesY: [],
        conflict: false,
        iChoice: false,
        iChoiceQ: false,
        imgArrS: imgArr,
        puzStep: 0,

        //this is the 'random' adjustment for x coordinate for horizontal word
        sizes: sizing,

        //this is the 'random' adjustment for y coordinate for horizontal word

        wordFound: false,
        foundH: [],
        foundHV: [],
      };
    });
  }

  showCode(x, y, sizes, level, findex, num) {
    var {
      showInfo,
      xCoor,
      yCoor,
      isChess,
      boardS,
      chessCodeLetter,
      chessCodeNumber,
      choicesX,
      choicesY,
      numOfQueens,
      solved8,
      conflict,
      alphaRand,
    } = this.state;
    this.setState((state) => {
      const holderX = [...state.choicesX, x];
      const holderY = [...state.choicesY, y];

      return {
        showInfo: true,
        xCoor: x,
        yCoor: y,
        isChess: false,
        choicesX: holderX,
        choicesY: holderY,
        iChoice: false,
        iChoiceQ: false,
      };
    });
  }

  /*foundWord(x, y, size, level, findex, num) {
    .log("you found one!");
    var {
      showInfo,
      xCoor,
      yCoor,
      isChess,
      boardS,
      chessCodeLetter,
      chessCodeNumber,
      choicesX,
      choicesY,
      numOfQueens,
      solved8,
      conflict,
      alphaRand,
      wordFound,
    } = this.state;
    const holderX = [...state.choicesX, x];
    const holderY = [...state.choicesY, y];
    this.setState((state) => {
      return { wordFound: true, choicesX: holderX, choicesY: holderY };
    });
  }*/

  clickTime(x, y, superIndex, level) {
    var { foundH, choicesX, choicesY, puzStep, imgArrS } = this.state;

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
          };
        } else {
          console.log("NO MATCH!");
          const holderX = [...state.choicesX, x];
          const holderY = [...state.choicesY, y];

          // const holderX = choicesX.pop();
          //const holderY = choicesY.pop();

          console.log(holderX);
          console.log(holderY);
          return {
            xCoor: x,
            yCoor: y,
            puzStep: 0,
            choicesX: holderX,
            choicesY: holderY,
          };
        }
      }

      //const foundHold = [...state.foundH, secretWords[num]];
    });
    if (
      puzStep == 1 &&
      imgArrS[superIndex] !==
        imgArrS[
          choicesY[choicesY.length - 1] * 6 + choicesX[choicesX.length - 1]
        ]
    ) {
      setTimeout(() => this.noMatch(), 250);

      //this.noMatch();
    }
  }

  noMatch() {
    var { foundH, choicesX, choicesY, puzStep, imgArrS } = this.state;
    console.log("before" + puzStep);
    setTimeout(() => console.log("two seconds"), 2000);

    console.log("after");

    choicesX.pop();
    choicesY.pop();
    choicesX.pop();

    choicesY.pop();
    console.log("popping one now");
  }

  foundWord(x, y, sizes, level, findex, num, rangeH, rangeL) {
    var { secretWords, foundH, choicesX, choicesY } = this.state;
    if ((level == 0) | (level == 1)) {
      const boxX = [];
      const boxY = [];
      var i = secretWords[num].length;
      var u;
      var s = sizes * y;
      console.log(sizes * y + "sizes * y");
      var t = rangeL - s;
      console.log(rangeL + "rangeL");
      console.log(rangeH + "rangeH");
      for (u = 0; u < i; u++) {
        boxX.push(t + u);
        boxY.push(y);
      }
      console.log(boxX);
      console.log(boxY);
      this.setState((state) => {
        const holderX = [
          ...state.choicesX,
          boxX[0],
          boxX[1],
          boxX[2],
          boxX[3],
          boxX[4],
          boxX[5],
          boxX[6],
        ];
        const holderY = [
          ...state.choicesY,
          boxY[0],
          boxY[1],
          boxY[2],
          boxY[3],
          boxY[4],
          boxY[5],
          boxY[6],
        ];

        const foundHold = [...state.foundH, secretWords[num]];
        console.log(foundH);
        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
    } else {
      this.setState((state) => {
        const holderX = [...state.choicesX, x];
        const holderY = [...state.choicesY, y];

        const foundHold = [...state.foundH, secretWords[num]];
        console.log(foundH);
        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
      console.log(choicesX);
    }
    /*var wide = secretWords[num].length;
    var c;
    var p;
    while (c < wide) {
      c++;
      x++;
      if (y * sizes + x < rangeH) {
        p++;
      }
    }
    x = x - wide;
    var d;
    var e;
    while (d < wide) {
      d++;
      x--;
      if (y * sizes + x > rangeL) {
        e++;
      }
    }
    var q;
    for (q = 0; q < p; q++) {
      console.log(e + "" + p);
      this.setState((prevstate) => {
        choicesX = [...prevstate.choicesX, x + q];
        choicesY = [...prevstate.choicesY, y];
      });
    }*/
  }

  foundWordV(x, y, sizes, level, findex, num, leveldown, start) {
    var {
      secretWords,
      secretVords,
      foundH,
      foundHV,
      choicesX,
      choicesY,
    } = this.state;
    if ((level == 0) | (level == 1)) {
      const boxX = [];
      const boxY = [];
      var i = secretVords[num].length;
      var u;
      var s = sizes * y;
      // console.log(sizes * y + "sizes * y");
      //var t = rangeL - s;
      var realstart = Math.floor(start / sizes);
      console.log(realstart);
      for (u = 0; u < i; u++) {
        boxX.push(x);
        boxY.push(realstart - u);
      }
      console.log(boxX);
      console.log(boxY);
      this.setState((state) => {
        const holderX = [
          ...state.choicesX,
          boxX[0],
          boxX[1],
          boxX[2],
          boxX[3],
          boxX[4],
          boxX[5],
          boxX[6],
        ];
        const holderY = [
          ...state.choicesY,
          boxY[0],
          boxY[1],
          boxY[2],
          boxY[3],
          boxY[4],
          boxY[5],
          boxY[6],
        ];

        const foundHoldV = [...state.foundHV, secretVords[num]];
        console.log(foundHoldV);
        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundHV: foundHoldV,
        };
      });
    } else {
      this.setState((state) => {
        const holderX = [...state.choicesX, x];
        const holderY = [...state.choicesY, y];

        const foundHold = [...state.foundH, secretWords[num]];
        console.log(foundH);
        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
      console.log(choicesX);
    }
  }

  clickZero() {
    console.log("hello clickZero");
    return;
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
      } /*else if ((choicesX[z] == x) | (choicesY[z] == y)) {
        level = 2;
      }  else if (
        Math.abs(choicesX[z] - x) == Math.abs(choicesY[z] - y) &&
        xCoor != null
      ) {
        level = 3;
      }*/
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

    /*else if (level == 2) {
      return (
        <button
          id="squarePath"
          codex={x}
          codey={y}
          onClick={() => this.invalidChoice(run, rise, sizes, level)}
        >
          P
        </button>
      );
    } else if (level == 3) {
      return (
        <button
          id="squareDiagonal"
          codex={x}
          codey={y}
          onClick={() => this.invalidChoice(run, rise, sizes, level)}
        >
          D
        </button>
      );
    }*/
  }
  render() {
    var {
      showInfo,
      xCoor,
      yCoor,
      choicesX,
      choicesY,

      gridStatus,
      foundH,
    } = this.state;
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

    return (
      <div id="entireThing">
        <div class="row" id="info">
          {gridDisplay}
        </div>
        <div>
          <button type="button" class="button" onClick={() => this.resethome()}>
            RESET Puzzle
          </button>
        </div>
        <div></div>
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
        <div className="HeaderSpot">{inputBox}</div>
      </div>
    );
  }
}

export default App;
