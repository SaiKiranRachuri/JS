// Lazy loading is basically loading the images fully once after entire page is loaded to improve performance

const images = document.querySelectorAll('img[data-src]');
// Select only image attributes that has data-src attribute


const loadImage = function(entries, observer){
    const [entry] = entries; // As we have only one threshold
    console.log(entry);

    if(!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src; // Replace low resolution image with high resolution image
    // entry.target.classList.remove('lazy-img'); // This can take a while to load the image(s) when network is poor

    entry.target.addEventListener('load', function(){
        entry.target.classList.remove('lazy-img');
        // Remove blur filter only after the loading of image time over network tab is completed.
    })

    imageObserver.unobserve(entry.target);
}


const imageObserver = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0,
    rootMargin: '200px' // Shift: load it by 200px advance 
});
images.forEach(img => imageObserver.observe(img));