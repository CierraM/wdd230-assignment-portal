let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });



  let options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
  }

  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector('data-src');
  observer.observe(target);

  let callback = (entries, observer) => {
      entries.forEach(entry =>{})
  }