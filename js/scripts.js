// Carly Brown - 10/04

/* Adapted from https://courses.wesbos.com/account/access/64ea54d5119d0f571e0842f1
   CSS Text Shadow Mouse Move Effect */
/* New to me: offset & walk */

/* I unfortunatley started this project later than usual and could not successfully achieve the changes I wanted to make.
My first idea was to use the toUpperCase() method to ensure the word would be in all caps if the user changed the text content.
However, it was much simplier and logical to achieve this effect with CSS. 
Then I wanted to create buttons that would modify the mix-blend-mode of the css of the text, but I was unable to successfully figure out
the best way to achieve this change. */

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; 

function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) { 
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk * -1}px 0 rgba(216, 2, 141, 0.6), 
    ${xWalk * -1}px ${yWalk}px 0 rgba(25, 255, 15, 0.6),
    ${yWalk}px ${xWalk * -1}px 0 rgba(144, 44, 252, 0.6),
    ${yWalk * -1}px ${xWalk}px 0 rgba(44, 186, 252, 0.6)`;
} //changed the colors to complement the new background

hero.addEventListener('mousemove', shadow);