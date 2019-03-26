export const isAuthenticated = () => {

    let isAuthenticated = false;

    if(localStorage.getItem('auth-token') != null ){
        isAuthenticated = true;
    }

    return isAuthenticated;

};