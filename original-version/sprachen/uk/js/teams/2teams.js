let feld = Array.from({ length: 56 }, (_, i) => `feld${i + 1}`);
let team0 = "darkgoldenrod"; //blaues Team
let team1 = "darkred"; //rotes Team
let teams = 0;

function FieldAlreadyChecked(field) {
  let fieldName = `feld${field}`;
  if (field >= 1 && field <= 56) {
    if (window[fieldName] == team0 || window[fieldName] == team1) {
      changeTeam();
    } else {
      updateField(field);
    }
  }
}

function updateField(field) {
  currentPlayer();
  let color = teams === 0 ? team0 : team1;

  if (field >= 1 && field <= 56) {
    document.getElementById(field.toString()).style.backgroundColor = color;
    window[`feld${field}`] = color;

    if (teams === 0) {
      TestWinBlue();
    } else {
      TestWinRed();
    }

    changeTeam();
  }
}

function TestWinBlue() {
  const checkAndAnnounceWin = (cells) => {
    for (let i = 0; i <= cells.length - 4; i++) {
      const windowSlice = cells.slice(i, i + 4);
      if (windowSlice.every((cell) => cell === team0)) {
        console.log("Yea!!");
        writeInfo("The Dark Golden team won the Game. <br> Well Done!");
        changeTeam();
        currentPlayer();
        setTimeout(() => {
          hideInfo();
          setNull();
        }, 2000);
        return;
      }
    }
  };

  const rows = 8;
  const cols = 7;

  // Check rows
  for (let i = 1; i <= rows; i++) {
    const rowCells = [];
    for (let j = 1; j <= cols; j++) {
      rowCells.push(window[`feld${(i - 1) * cols + j}`]);
    }
    checkAndAnnounceWin(rowCells);
  }

  // Check columns
  for (let i = 1; i <= cols; i++) {
    const colCells = [];
    for (let j = 1; j <= rows; j++) {
      colCells.push(window[`feld${(j - 1) * cols + i}`]);
    }
    checkAndAnnounceWin(colCells);
  }

  // Check diagonals
  const diagonals = [
    [1, 9, 17, 25, 33, 41, 49],
    [7, 13, 19, 25, 31, 37, 43],
  ];

  for (const diagonal of diagonals) {
    const diagonalCells = diagonal.map((cell) => window[`feld${cell}`]);
    checkAndAnnounceWin(diagonalCells);
  }
}

function TestWinRed() {
  const checkAndAnnounceWin = (cells) => {
    for (let i = 0; i <= cells.length - 4; i++) {
      const windowSlice = cells.slice(i, i + 4);
      if (windowSlice.every((cell) => cell === team1)) {
        writeInfo(`The Dark Red team won the Game. <br> Well Done!`);
        setTimeout(() => {
          hideInfo();
          setNull();
        }, 2000);
        return;
      }
    }
  };

  // Check rows
  for (let i = 0; i < 8; i++) {
    const rowCells = [];
    for (let j = 1; j <= 7; j++) {
      rowCells.push(window[`feld${i * 7 + j}`]);
    }
    checkAndAnnounceWin(rowCells);
  }

  // Check columns
  for (let i = 1; i <= 7; i++) {
    const colCells = [];
    for (let j = 0; j < 8; j++) {
      colCells.push(window[`feld${j * 7 + i}`]);
    }
    checkAndAnnounceWin(colCells);
  }

  // Check diagonals
  const diagonals = [
    [1, 9, 17, 25],
    [7, 13, 19, 25],
    [2, 10, 18, 26],
    [8, 14, 20, 26],
    [15, 23, 31, 39],
    [21, 27, 33, 39],
    [16, 24, 32, 40],
    [22, 28, 34, 40],
  ];

  for (const diagonal of diagonals) {
    const diagonalCells = diagonal.map((cell) => window[`feld${cell}`]);
    checkAndAnnounceWin(diagonalCells);
  }
}

function changeTeam() {
  if (teams == 0) {
    teams = 1;
  } else if (teams == 1) {
    teams = 0;
  }
}

const infoElement = document.getElementById("info");

function hideInfo() {
  infoElement.style.display = "none";
}

function writeInfo(txt) {
  infoElement.style.display = "block";
  infoElement.innerHTML = txt;
}

function currentPlayer() {
  if (teams == 1) {
    document.getElementById("currentPlayer").style.backgroundColor = team0;
    document.getElementById("currentPlayer").innerHTML =
      "Team: It's the dark golden team's turn!";
  } else if (teams == 0) {
    document.getElementById("currentPlayer").style.backgroundColor = team1;
    document.getElementById("currentPlayer").innerHTML =
      "Team: It's the dark red team's turn!";
  } else {
    console.log("500");
  }
}

function setNull() {
  for (let i = 1; i <= 56; i++) {
    window[`feld${i}`] = null;
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
}
