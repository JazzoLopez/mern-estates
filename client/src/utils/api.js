const url = "http://localhost:3000";

const newUser = async (user) => {
    const response = await fetch(`${url}/api/auth/signup`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

const signIn = async (user) => {
    const response = await fetch(`${url}/api/auth/signin`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export { newUser, signIn};