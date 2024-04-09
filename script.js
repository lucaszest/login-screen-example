function toggleForm(form) {
    if (form === 1) {
        document.getElementById('login-form').style.display = '';
        document.getElementById('signup-form').style.display = 'none';

        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', '#58af9b');
    }
    else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = '';

        document.documentElement.style.setProperty('--primary-color', '#58af9b');
        document.documentElement.style.setProperty('--secondary-color', 'white');
    }
}
