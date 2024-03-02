const querySelectorOrAll = (selector, bool) => bool ? Array.from(document.querySelectorAll(selector)) : document.querySelector(selector);


// exemple 1

const cells = querySelectorOrAll('.cell', true)
const txtInfo = querySelectorOrAll('.txt-info', false)


cells.forEach(element => {
  // element.addEventListener('click', handleCellClick)
});

function handleCellClick(e){
  txtInfo.textContent = e.target.textContent
}


// exemple 2


const grid = querySelectorOrAll('.grid', false)
const txtInfo2 = querySelectorOrAll('.txt-info2', false)

grid.addEventListener('click', handleGridClick)

function handleGridClick({target}) {
  if (target.classList.contains('cell')) {
    txtInfo2.textContent = target.textContent
  }
}