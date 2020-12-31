window.addEventListener("load", () => {
  const state = {
    currentPlayer: 1,
    board: new Array(3).fill().map(() => new Array(3).fill(null)),
    mark: "X",
  };

  const title = document.getElementById("title");

  function handleClick(element) {
    const [row, col] = element.id.split(",").map((x) => parseInt(x));
    element.value = state.mark;
    element.classList.add("noclicks");
    state.board[row][col] = state.mark;

    if (!calculateWinner()) {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
      state.mark = state.currentPlayer === 1 ? "X" : "O";
      title.innerText =
        title.innerText.substring(0, title.innerText.length - 1) +
        state.currentPlayer;
    } else {
      title.innerText = `Player ${state.currentPlayer} is the winner!`;
      document.getElementById("main").classList.add("noclicks");
    }
  }

  const calculateWinner = () => {
    if (
      state.board[0][0] === state.mark &&
      state.board[0][1] === state.mark &&
      state.board[0][2] === state.mark
    ) {
      return true;
    }
    if (
      state.board[0][0] === state.mark &&
      state.board[1][0] === state.mark &&
      state.board[2][0] === state.mark
    ) {
      return true;
    }
    if (
      state.board[0][0] === state.mark &&
      state.board[1][1] === state.mark &&
      state.board[2][2] === state.mark
    ) {
      return true;
    }
    if (
      state.board[0][2] === state.mark &&
      state.board[1][1] === state.mark &&
      state.board[2][0] === state.mark
    ) {
      return true;
    }
    if (
      state.board[0][1] === state.mark &&
      state.board[1][1] === state.mark &&
      state.board[2][1] === state.mark
    ) {
      return true;
    }
    if (
      state.board[1][0] === state.mark &&
      state.board[1][1] === state.mark &&
      state.board[1][2] === state.mark
    ) {
      return true;
    }
    if (
      state.board[0][2] === state.mark &&
      state.board[1][2] === state.mark &&
      state.board[2][2] === state.mark
    ) {
      return true;
    }
    if (
      state.board[2][0] === state.mark &&
      state.board[2][1] === state.mark &&
      state.board[2][2] === state.mark
    ) {
      return true;
    }
    return false;
  };

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
  const elements = document.getElementsByTagName("input");
  [...elements].forEach((element) => {
    element.addEventListener("click", () => handleClick(element));
  });
});
