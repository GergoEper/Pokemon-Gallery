let counter = 1

function renderImage() {
    let element = document.getElementById('pokemon')
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${counter}.svg"/>`
};

let prevElement = document.getElementById('prev')

prevElement.onclick = function() {
    if(counter > 1) {
        counter--
        renderImage()
    }
};

let nextElement = document.getElementById('next')

nextElement.onclick = function() {
    if(counter < 649) {
        counter++
        renderImage()
    }
}

renderImage()