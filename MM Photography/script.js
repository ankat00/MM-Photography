"use strict";

// ///// SET CURRENT YEAR ///// //
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ///// PROJECT BOX SWITCH ///// //
const navLinkCollectionEl = document.querySelectorAll(".nav-link");

navLinkCollectionEl.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", function handleClick(e) {
    let imgPath = navLinkEl.getAttribute("data-img");
    let imgAlt = navLinkEl.alt;
    let imgTitle = navLinkEl.innerHTML;

    const imageTitleEl = document.getElementById("image-title");
    const imageEl = document.getElementById("image-portrait");

    let newSrc = imageEl.src;

    newSrc = newSrc.substring(0, newSrc.lastIndexOf("/") + 1);

    imageTitleEl.innerHTML = imgTitle;
    imageEl.alt = imgAlt;
    imageEl.src = newSrc + imgPath;
  });
});

/*
navLinkEl.addEventListener("click", function (e) {
  e.preventDefault();
  let imgPath = e.getAttribute("data-img");
  let title = e.innerHTML();

  const imageTitleEl = document.getElementById("image-title");

  imageTitleEl.innerHTML = title;
});
*/
