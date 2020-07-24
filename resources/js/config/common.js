export const getUser = () => {
    const userStr = sessionStorage.getItem('getuser');
    if (userStr)
        return JSON.parse(userStr)
    else return null;
}

export const token = () => {
    return sessionStorage.getItem('token') || null
}

export const remmoveUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('getuser');
    localStorage.removeItem('token');
    localStorage.removeItem('getuser');
}

export const setUserSession = (token, users) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('getuser', JSON.stringify(users));
}