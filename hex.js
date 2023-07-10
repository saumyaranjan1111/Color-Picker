const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let randIndex = () => {
    return Math.floor(Math.random()*arr.length);
}

document.querySelector('.btn button').addEventListener('click', () =>{
    // every time there is a click, this function gets called and returns a random no from 0 to n-1 ; where n is the size of the array

    
    let rand = "#";
    for(let i = 0; i<6; i++){
        const ind = randIndex();
        rand += arr[ind].toString(10);
    }

    document.querySelector('main').style.backgroundColor = rand;
    const uppercase = rand.toUpperCase();
    document.querySelector('.box').innerHTML = `<h1>Background Color : <span>${uppercase}</span></h1>`;
    // document.querySelector('.btn button').setAttribute("style", `color: ${rand}`);
    document.querySelector('header .hex a').setAttribute("style", `color: ${rand}`);
    document.querySelector('header .title').setAttribute("style", `color: ${rand}`);
    document.querySelector('.box span').setAttribute('style', `color: ${rand}`);
    rand = Math.floor(Math.random()*3);
})