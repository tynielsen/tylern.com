var copyright = document.getElementById('c-yr');
copyright.innerHTML = new Date().getFullYear();

const slideDuplicate = document.querySelector('.tech-stack-slider ul')?.cloneNode(true);
document.querySelector('.tech-stack-slider')?.appendChild(slideDuplicate);

// What else to build to show-off; to add to the portfolio…
