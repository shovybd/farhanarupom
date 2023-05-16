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