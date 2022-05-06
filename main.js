// se clicco su hamburger menu si aprirà il menu a tendina
const fas = document.querySelector('.fas');


// con questo apro il menu a tendina
fas.addEventListener('click',

    function() {
        
        let open = document.querySelector('.hamburger-menu');

        open.style.display = ('block');

        // if (open === '.fas') {
        //     open.style.display = 'none';
        //     console.log(open);
        // } else { 
        //     open === '.close';
        //     open.style.display = 'block';
        //     console.log(open);
        // }
    }

);

// se clicco di nuovo il menu a tendina si chiuderà
const close = document.querySelector('.close');

// con questo chiudo il menu a tendina
close.addEventListener('click',

    function() {

        let close = document.querySelector('.hamburger-menu');

        close.style.display = ('none');
    }

);