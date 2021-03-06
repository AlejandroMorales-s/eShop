import { carrousel } from './carrouselFunction.js';
const container = document.getElementById('hero-container');

fetch("http://localhost:3000/heroimgs")
.then(res => res.json())
.then(data => {
    let heroImgs = data.map(img => {
        return img.images
    })

    const heroImg = document.createElement('img');
    heroImg.src = heroImgs[0];
    heroImg.alt = "hero image";
    heroImg.classList.add('hero-img');

    container.appendChild(heroImg);

    carrousel(container, heroImgs);
})
.catch(err => console.log(err));

