const slides = document.querySelectorAll(".slide");
const carouselContainer = document.getElementById("carousel_container");
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage()
    }
}

const goNext = () => {
    if (counter < (slides.length - 1)) {
        counter++;
        slideImage()
    }
}

const slideImage = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;

        if (index === counter) {
            const slideHeight = window.getComputedStyle(slide).height;
            carouselContainer.style.height = slideHeight;
        }
    });
};
slideImage();



// carousel for mobile
const imageSlides = document.querySelectorAll(".image_slides");
const imageCarouselContainer = document.getElementById("gallery_mobile_carousel");
console.log(imageSlides);
var image_counter = 0;
imageSlides.forEach(
    (image_slides, index) => {
        image_slides.style.left = `${index * 100}%`
    }
)

const goPreviousImage = () => {
    if (image_counter > 0) {
        image_counter--;
        slideImageGallery()
    }
}
const goNextImage = () => {
    if (image_counter < (imageSlides.length - 1)) {
        image_counter++;
        slideImageGallery()
    }
}

const slideImageGallery = () => {
    imageSlides.forEach(
        (image_slides, index) => {
            image_slides.style.transform = `translateX(-${image_counter * 100}%)`

            if (index === image_counter) {
                const gallerySlideHeight = window.getComputedStyle(image_slides).height;
                imageCarouselContainer.style.height = gallerySlideHeight;
            }
        }
    )
}