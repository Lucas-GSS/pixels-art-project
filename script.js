const initialColor = document.querySelector('#black');
initialColor.classList.add('selected');

const colorPalette = document.querySelectorAll('.color');

function setClass({ target }) {
  document.querySelector('.selected').classList.remove('selected');
  target.classList.add('selected');
}

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', setClass);
}

const button = document.getElementById('clear-board');

function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let pixel = 0; pixel <= pixelBoard.length; pixel += 1) {
    pixelBoard[pixel].style.backgroundColor = 'white';
  }
}

const selected = document.getElementsByClassName('selected');

function toColor({ target }) {
  const pixelToColor = target;
  pixelToColor.style.backgroundColor = selected[0].id;
}

button.addEventListener('click', clearBoard);

const buttonGenerateBoard = document.querySelector('#generate-board');

function generatePixel(value) {
  const tablePixelsBody = document.querySelector('#pixel-board');
  for (let line = 1; line <= value; line += 1) {
    const createTableRow = document.createElement('tr');
    createTableRow.className = 'table-row';
    for (let collumn = 1; collumn <= value; collumn += 1) {
      const createTableData = document.createElement('td');
      createTableData.className = 'pixel';
      createTableData.addEventListener('click', toColor);
      createTableRow.appendChild(createTableData);
    }
    tablePixelsBody.appendChild(createTableRow);
  }
  return tablePixelsBody;
}

function generateBoard() {
  const inputBoard = document.querySelector('#board-size').value;
  const tablePixelsBody = document.querySelector('#pixel-board');
  const pixels = document.querySelectorAll('.table-row');
  const inputBoardToNumber = parseInt(inputBoard, 10);
  if (tablePixelsBody.children.length > 0) {
    pixels.forEach((el) => el.remove());
  }
  const boardSize = inputBoardToNumber > 5 ? generatePixel(inputBoardToNumber) : generatePixel(5);
  return boardSize;
}

buttonGenerateBoard.addEventListener('click', generateBoard);
