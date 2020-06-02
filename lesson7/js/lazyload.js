// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });



//   let options = {
//       root: document.querySelector('#scrollArea'),
//       rootMargin: '0px',
//       threshold: 1
//   }

//   let observer = new IntersectionObserver(callback, options);

//   let target = document.querySelector('data-src');
//   observer.observe(target);

//   let callback = (entries, observer) => {
//       entries.forEach(entry =>{})
//   }


////This is the practice we did in class

////entries = what is being observed

////square brackets refer to an attribute
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const source = img.getAttribute('data-src');
  if (!source) {
    return;
  }

  img.src = source;
}

const options = {
  threshold: 0

}

const io = new IntersectionObserver(
  (entries, io) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target); //target means which image you are intersecting
        io.unobserve(entry.target); //stop observing
      }
    });

  }, options

)

images.forEach(image => {
  io.observe(image);
})