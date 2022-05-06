// se clicco su hamburger menu si aprirà il menu a tendina
const fas = document.querySelector('.fas');

fas.addEventListener('click',

    function() {
        
        let open = document.querySelector('.hamburger-menu');

        if (open === '.fas') {
            open.style.display = 'none';
            console.log(open);
        } else {
            open.style.display = 'block';
            console.log(open);
        }
    }

);