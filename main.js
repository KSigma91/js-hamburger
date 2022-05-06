// se clicco su hamburger menu si aprirà il menu a tendina
const fas = document.querySelector('fas');

fas.addEventListener('click',

    function() {
        
        const open = document.querySelector('hamburger-menu');

        if (open === "none") {
            open = "block";
            console.log(open);
        } else {
            open = "none";
            console.log(open);
        }
    }

);