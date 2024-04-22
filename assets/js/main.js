const images = document.querySelectorAll('img');

images.forEach(img => {

    if (img.src.endsWith('#dark-mode')) {

        console.log('found');

        img.onload = function () {
            console.log(`Image loaded: ${img.src}`);
        };

    }
});