const getJokes = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (!response) throw 'Error';

        const joke = await response.json();
        return joke;
    } catch (err) {
        return {
            ok: false,
            err
        };
    }
};

const getUsers = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1');

        if (!response) throw 'Error';

        const data = await response.json();
        return data.data;
    } catch (err) {
        return {
            ok: false,
            err
        };
    }
};

export {
    getJokes,
    getUsers
};