import {
    getUsers
} from "../providers/http.provider";

const body = document.body;
let tbody;

const createHtml = () => {
    const html = `
    <h1 class="mt-5"> Users</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector('tbody');
};

const createUserRow = (user) => {
    const html = `
        <td scope="col"> ${user.id} </td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} ${user.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.appendChild(tr);
};


export const init = async () => {
    createHtml();
    (await getUsers()).forEach(createUserRow);
};