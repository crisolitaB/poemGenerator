var poems = [
    'ay',
    'bay',
    'cray',
    'day'
];

function newPoem() {
    var randomNumber = Math.floor(Math.random()* (poems.length));
    document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}
