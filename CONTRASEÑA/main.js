const iconEye = document.querySelector('.icon-eye');

iconEye.addEventListener('click', function() {
    if (this.nextElementSibling.type === 'password') {
        this.nextElementSibling.type = 'text';
        this.children[0].classList.remove('fa-eye-slash');
        this.children[0].classList.add('fa-eye');
    } else {
        this.nextElementSibling.type = 'password';
        this.children[0].classList.remove('fa-eye');
        this.children[0].classList.add('fa-eye-slash');
    }
})