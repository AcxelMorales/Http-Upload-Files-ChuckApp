import { uploadFile } from '../providers/file.provider';

const body = document.body;
let inputFile, imgPhoto;

const createInputFileHTML = () => {
    const html = `
        <h1 class="mt-5">Upload File</h1>
        <hr>
        <label for="file">Select a photo: </label>
        <input type="file" name="file" id="file" accept="image/jpg, image/jpeg, image/png">
        <br>
        <img id="photo" class="img-thumbnail" src="" />
    `;

    const div = document.createElement('div');

    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('#file');
    imgPhoto = document.querySelector('#photo');
};

const events = () => {
    inputFile.addEventListener('change', async evt => {
        const file = evt.target.files[0];
        const url = await uploadFile(file);
        imgPhoto.src = url;
    });
};

export const init = () => {
    createInputFileHTML();
    events();
};