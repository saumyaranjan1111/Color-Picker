const cols = ['red', 'green', 'blue', 'yellow', 'lightpink', 'cyan', 'olive', 'peach'];

let generateRandom = () => {
    return Math.floor(Math.random()*cols.length);
}

document.querySelector('.btn button').addEventListener('click', () =>{
    // every time there is a click, this function gets called and returns a random no from 0 to n-1 ; where n is the size of the array

    const rand = generateRandom();

    document.querySelector('main').style.backgroundColor = cols[rand];
    const uppercase = cols[rand].toUpperCase();
    document.querySelector('.box').innerHTML = `<h1>Background Color : <span>${uppercase}</span></h1>`;
    // document.querySelector('.btn button').setAttribute("style", `color: ${cols[rand]}`);
    document.querySelector('header .hex a').setAttribute("style", `color: ${cols[rand]}`);
    document.querySelector('header .title').setAttribute("style", `color: ${cols[rand]}`);
    document.querySelector('.box span').setAttribute('style', `color: ${cols[rand]}`);
    rand = Math.floor(Math.random()*3);
})