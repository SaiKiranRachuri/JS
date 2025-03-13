const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1')



window.addEventListener('scroll', function(e){
    const sectionCoords = section1.getBoundingClientRect();
    
    console.log(`Scroll: ${this.window.scrollY}`); // How much is scrolled
    console.log(`Section from top: ${sectionCoords.top}`); // top is maximum at starting of view port
    window.scrollY > sectionCoords.top + this.window.scrollY ? nav.classList.add('sticky') : nav.classList.remove('sticky');
    // scroll element's top coordinates also to be considered while scrolling.
})