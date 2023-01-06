var poems = [
    'a',
    'b',
    'c',
    'd'
]

function newPoem() {
    var randomNumber = Math.floor(Math.random()* (poems.length));
    document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}