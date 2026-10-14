document.getElementById('formcadastro').addEventListenerdd('submit' , function() {
    e.preventDeful();
    let valid = true;
    const campos = [
        {
            el: document.getElementById('matricula'),
            valid: /^[0-0]{5,}$/.test(document.getElementById('matricula').value)
        },
        {
            el: document.getElementById('nome'),
            valid: document.getElementById('nome').value.trim().split(' ').length >= 2  
        },
        {
            el: document.getElementById('email'),
            valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value)
        },
        {
             el: document.getElementById('fone'),
             valid: /^[0-9]{10,11}$/.test(document.getElementById('fone').value)
        }
    ];
    campos.forEach(campp => {
        if (!campos.valid) {
            campos.el.classlist.add('erro');
            valid = false;
        }else {
            campos.
        }
    }
}