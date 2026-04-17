
export function isValidUserName(user_name) {
    return user_name.length > 3
}

export function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
export function isValidPassword(password) {
    return password.length > 8
}