const imgArray = [
  "https://w.forfun.com/fetch/36/368f621077ccd2787e81a7201d6026a0.jpeg",
  "https://sopranoclub.ru/images/190-epichnyh-anime-artov/file48769.jpg",
  "https://sopranoclub.ru/images/190-epichnyh-anime-artov/file48671.png",
  "https://static.zerochan.net/Fufu.full.2371491.jpg",
];

/* slide event */
const activeSlideNavPoint = (slide, navPoint) => {
  slide.style.display = "";
  navPoint.className = "nav-bar__btn active";
};
const notActiveSlideNavPoint = (slide, navPoint) => {
  slide.style.display = "none";
  navPoint.className = "nav-bar__btn";
};
const nextSlide = () => {
  const allImg = document.querySelectorAll(".slider__img");
  const allSpanBtn = document.querySelectorAll(".nav-bar__btn");
  for (let index = 0; index < allImg.length; index++) {
    const element = allImg[index];
    if (element.style.display !== "none") {
      notActiveSlideNavPoint(element, allSpanBtn[index]);
      if (index + 1 > allImg.length - 1) {
        activeSlideNavPoint(allImg[0], allSpanBtn[0]);
        break;
      } else {
        activeSlideNavPoint(allImg[index + 1], allSpanBtn[index + 1]);
        break;
      }
    }
  }
};
const prevSlide = () => {
  const allImg = document.querySelectorAll(".slider__img");
  const allSpanBtn = document.querySelectorAll(".nav-bar__btn");
  for (let index = 0; index < allImg.length; index++) {
    const element = allImg[index];
    if (element.style.display !== "none") {
      notActiveSlideNavPoint(element, allSpanBtn[index]);
      if (index - 1 < 0) {
        activeSlideNavPoint(
          allImg[allImg.length - 1],
          allSpanBtn[allImg.length - 1]
        );
        break;
      } else {
        activeSlideNavPoint(allImg[index - 1], allSpanBtn[index - 1]);
        break;
      }
    }
  }
};
const clickNavPointTargetSlide = (slide, navPoint) => {
    const allNavPoint = document.querySelectorAll(".nav-bar__btn");
    const allImg = document.querySelectorAll(".slider__img");
    allNavPoint.forEach((element) => {
      element.id !== navPoint.id
        ? (element.className = "nav-bar__btn")
        : (element.className = "nav-bar__btn active");
    });
    allImg.forEach((element) => {
      element !== slide
        ? (element.style.display = "none")
        : (element.style.display = "");
    });
}

/* create slider */
const createSlide = (imgArray) => {
  const slider = document.querySelector(".slider");
  const navBar = document.querySelector(".nav-bar");
  for (let index = 0; index < imgArray.length; index++) {
    const element = imgArray[index];
    const img = document.createElement("img");
    const navPoint = document.createElement("span");
    index === 0
      ? activeSlideNavPoint(img, navPoint)
      : notActiveSlideNavPoint(img, navPoint);
    img.className = "slider__img";
    img.src = element;
    navPoint.id = `${index}`;
    navPoint.onclick = function () {
      clickNavPointTargetSlide(img, navPoint);
    };

    slider.appendChild(img);
    navBar.appendChild(navPoint);
}}



createSlide(imgArray);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  nextSlide();
});

prev.addEventListener("click", () => {
  prevSlide();
});
