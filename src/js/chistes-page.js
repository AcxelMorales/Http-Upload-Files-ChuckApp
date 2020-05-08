import '../css/style.css';

import {
    getJokes
} from "../providers/http.provider";

const body = document.body;
let btnJoke, olJoke;
let i = 1;

const createJokesHTML = () => {
    const html = `
        <header>    
            <h1 class="mt-5">Jokes</h1>
        </header>
        <hr>
        <button class="btn btn-primary">Another joke</button>
        <ol class="mt-2 list-group"></ol>
    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
};

const evts = () => {
    olJoke = document.querySelector('ol');
    btnJoke = document.querySelector('button');

    btnJoke.addEventListener('click', async () => {
        btnJoke.setAttribute('disabled', 'disabled');

        const joke = await getJokes();
        drawJoke(joke);

        btnJoke.removeAttribute('disabled');
    });
};

const drawJoke = ({
    id,
    value,
    icon_url
}) => {
    const liItem = document.createElement('li');
    const img = document.createElement('img');
    
    img.setAttribute('src', icon_url);
    img.classList.add('img-chuck');

    liItem.innerHTML = `<b class="text-primary">${i}. </b> <b>${id}</b>: ${value}`;
    liItem.classList.add('list-group-item', 'animated', 'fadeIn', 'relative');

    liItem.append(img);
    olJoke.append(liItem);
    i++;
};


export const init = () => {
    createJokesHTML();
    evts();
};