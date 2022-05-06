// se clicco su hamburger menu si aprirà il menu a tendina
const element = document.querySelector("fas.fa-bars");

element.addEventListener('click',

    function() {
        
        const open = document.get("hamburger-menu");

        if (open === "none") {
            open = "block";
            console.log(open);
        } else {
            open = "none";
            console.log(open);
        }
    }

);