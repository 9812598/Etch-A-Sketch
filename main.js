const container = document.querySelector('#container');

let NumberOfSquresInARow = 33

console.log(`NumberOfSquresInARow = ${NumberOfSquresInARow}`)

makeSqures()


let slider = document.getElementById('my range')

let num = +slider.value

let numberSpan = document.querySelector('.number__span')

numberSpan.innerHTML = num

let colorPicker = document.querySelector('#color')

let divColor = '#DC143C'

let resetBtn = document.querySelector('.reset')

let squares = document.querySelectorAll('.square')

console.log(squares)

resetBtn.addEventListener('click', () => {
    for (sq of squares) {
        sq.style.backgroundColor = '#1d1d1d';
        sq.style.boxShadow = '0 0 2px #000'
    }
})






// colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    divColor = event.target.value;   
}

function setColor(element) {
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }




slider.oninput = function() {
     
    NumberOfSquresInARow = + this.value
    numberSpan.innerHTML = NumberOfSquresInARow
    console.log(`NumberOfSquresInARow = ${NumberOfSquresInARow}`)
    container.innerHTML = ''
    makeSqures()
}

function makeSqures(){
    const NumberOfSqures = NumberOfSquresInARow**2;
    console.log(`NumberOfSqures = ${NumberOfSqures}`)

    for (let i = 0; i < NumberOfSqures; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        container.append(square)
        let dimension = 960/NumberOfSquresInARow
        console.log(`dimension = ${dimension}`)
        square.style.width = `${dimension}px`
        square.style.height = `${dimension}px`
        }

}




container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')){
        event.target.style.backgroundColor = divColor;
        event.target.style.boxShadow = `0 0 2px ${divColor}, 0 0 10px ${divColor}`;
    }   
    })


    
    

