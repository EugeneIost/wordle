import { createSlice } from '@reduxjs/toolkit';
import { CellColors } from '@/components/Board/Cell/constants/cell-colors';
import { words } from '@/constatns/words';

const defaultBoard = [];

for (let i = 0; i < 6; i++) {
  defaultBoard.push([]);
  for (let j = 0; j < 5; j++) {
    defaultBoard[i].push({
      value: '',
      color: CellColors.DEFAULT,
    });
  }
}

const initialState = {
  word: '',
  enteredWord: '',
  board: defaultBoard,
  currentRowIndex: 0,
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWord(state, action) {
      state.word = action.payload;
      console.log(state.word);
    },

    setInputChar(state, action) {
      const char = action.payload;
      const cellIndex = state.board[state.currentRowIndex].findIndex(
        (cell) => cell.value === ''
      );

      if (cellIndex !== -1) {
        state.board[state.currentRowIndex][cellIndex].value = char;
      }

      if (cellIndex === state.board[state.currentRowIndex].length - 1) {
        state.enteredWord = state.board[state.currentRowIndex]
          .map((cell) => cell.value)
          .join('');
      }
    },

    deleteLastChar(state) {
      const cellIndex = state.board[state.currentRowIndex].findLastIndex(
        (cell) => cell.value !== ''
      );
      if (cellIndex !== -1) {
        state.board[state.currentRowIndex][cellIndex].value = '';
      }
    },

    setCurrentRowColor(state) {
      const guessCharArray = state.word.split('');
      state.board[state.currentRowIndex] = state.board[
        state.currentRowIndex
      ].map((cell, index) => {
        const cellValue = cell.value.toLowerCase();
        const indexInGuessWord = guessCharArray.indexOf(cellValue);

        // GREEN
        if (index === indexInGuessWord) {
          guessCharArray[indexInGuessWord] = '';
          return {
            ...cell,
            color: CellColors.GREEN,
          };
        }

        // YELLOW
        if (indexInGuessWord !== -1 && indexInGuessWord !== index) {
          guessCharArray[indexInGuessWord] = '';
          return {
            ...cell,
            color: CellColors.YELLOW,
          };
        }

        return {
          ...cell,
          color: CellColors.GREY,
        };
      });
      state.currentRowIndex += 1;
    },

    resetStates(state) {
      state.board = [...initialState.board];
      state.word = words[Math.trunc(Math.random() * words.length - 1)];
      state.enteredWord = initialState.enteredWord;
      state.currentRowIndex = initialState.currentRowIndex;
    },

    resetEnteredWord(state) {
      state.enteredWord = initialState.enteredWord;
    },
  },
});

export const {
  setWord,
  setInputChar,
  deleteLastChar,
  incCurrentRowIndex,
  setCurrentRowColor,
  resetStates,
  resetEnteredWord,
} = wordSlice.actions;
export default wordSlice;
