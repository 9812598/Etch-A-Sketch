const container = document.querySelector('#container');

let NumberOfSquresInARow = 16

let dimension = 960/NumberOfSquresInARow

let slider = document.getElementById('my range')

let num = +slider.value

let numberSpan = document.querySelector('.number__span')

numberSpan.innerHTML = num

slider.oninput = function() {
     
    NumberOfSquresInARow = + this.value
    numberSpan.innerHTML = NumberOfSquresInARow
    console.log(NumberOfSquresInARow)
    makeSqures()

}

function makeSqures(){
    const NumberOfSqures = NumberOfSquresInARow**2;

for (let i = 0; i < NumberOfSqures; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.append(square)
    square.style.width = `${dimension}px`
    square.style.height = `${dimension}px`
    }

}




container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')){
        event.target.classList.add('hovered')
    }   
    })


    
    

