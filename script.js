const text =
"Data Analyst | Python Developer | B.Tech CSE (AKTU)";

let i = 0;

function typingEffect() {

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);
    }
}

typingEffect();

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.6s";

    observer.observe(card);

});