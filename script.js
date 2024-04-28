const imgURLs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmWUVgVMkEYKG5qAbTnGGZ54G3z4fX4yBEck6is1cNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY02x5xCXXp2EopVB4XEtrVADK_JStbRSQIccjcZxrA&s",
    "https://png.pngtree.com/background/20230425/original/pngtree-carousel-at-a-park-in-a-city-picture-image_2474848.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpQIwtBvTa2PBIXsVwt9rJ09xZnw1yIP2MvaBBV49vw&s",
  ];

  const imageContainer = document.querySelector(".image-container");

  imgURLs.forEach((url, index) => {
    const img = document.createElement("img");
    img.classList.add("slide");
    img.src = url;
    img.alt = `Slide ${index}`;
    imageContainer.appendChild(img);
  });

  let counter = 0;
  const slides = document.querySelectorAll(".slide");

  slides.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
  });

  const slideImg = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const nextImg = () => {
    if (counter + 1 < slides.length) {
      counter++;
      slideImg();
    } else {
      counter = 0;
      slideImg();
    }
  };
  const prevImg = () => {
    if (counter == 0) {
      counter = slides.length - 1;
      slideImg();
    } else {
      counter--;
      slideImg();
    }
  };

  const autoplayInterval = 3000;
  let autoplayTimer;

  const startAutoplay = () => {
    autoplayTimer = setInterval(nextImg, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
  };

//   startAutoplay();