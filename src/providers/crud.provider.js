const urlCRUD = 'https://reqres.in/api/users';

const getUserById = async (id) => {
    try {
        const response = await fetch(`${urlCRUD}/${id}`);
        const user = await response.json();
        
        console.log(user);
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
};

const postUser = async (user) => {
    try {
        const response = await fetch(urlCRUD, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(await response.json());
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
};

const updateUser = async (id, user) => {
    try {
        const response = await fetch(`${urlCRUD}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(await response.json());
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
};

const deleteUser = async (id) => {
    try {
        const response = await fetch(`${urlCRUD}/${id}`, {
            method: 'DELETE'
        });

        return (response.ok) ? 'Borrado' : null;
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
};

export {
    getUserById,
    postUser,
    updateUser,
    deleteUser
};