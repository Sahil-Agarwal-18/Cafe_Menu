"use strict";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  });
});

const likeBtn1 = document.querySelector(".uno");
const likeBtn2 = document.querySelector(".dos");
const likeBtn3 = document.querySelector(".tres");
const likeBtn4 = document.querySelector(".cuatro");
const likeBtn5 = document.querySelector(".cinco");
const likeBtn6 = document.querySelector(".seis");
const likeBtn7 = document.querySelector(".siete");
const likeBtn8 = document.querySelector(".ocho");
const likeBtn9 = document.querySelector(".nueve");
const likeBtn10 = document.querySelector(".diez");
const likeBtn11 = document.querySelector(".once");
const likeBtn12 = document.querySelector(".douce");
const likeBtn13 = document.querySelector(".trece");
const likeBtn14 = document.querySelector(".catorce");

let countLikes1 = 0;
let countLikes2 = 0;
let countLikes3 = 0;
let countLikes4 = 0;
let countLikes5 = 0;
let countLikes6 = 0;
let countLikes7 = 0;
let countLikes8 = 0;
let countLikes9 = 0;
let countLikes10 = 0;
let countLikes11 = 0;
let countLikes12 = 0;
let countLikes13 = 0;
let countLikes14 = 0;

if (likeBtn1) {
  likeBtn1.addEventListener("click", function () {
    countLikes1 += 1;
    document.querySelector(".un").textContent = `(${countLikes1})`;
  });
}

if (likeBtn2) {
  likeBtn2.addEventListener("click", function () {
    countLikes2 += 1;
    document.querySelector(".deux").textContent = `(${countLikes2})`;
  });
}

if (likeBtn3) {
  likeBtn3.addEventListener("click", function () {
    countLikes3 += 1;
    document.querySelector(".trois").textContent = `(${countLikes3})`;
  });
}

if (likeBtn4) {
  likeBtn4.addEventListener("click", function () {
    countLikes4 += 1;
    document.querySelector(".quatro").textContent = `(${countLikes4})`;
  });
}

if (likeBtn5) {
  likeBtn5.addEventListener("click", function () {
    countLikes5 += 1;
    document.querySelector(".cinq").textContent = `(${countLikes5})`;
  });
}

if (likeBtn6) {
  likeBtn6.addEventListener("click", function () {
    countLikes6 += 1;
    document.querySelector(".sixx").textContent = `(${countLikes6})`;
  });
}

if (likeBtn7) {
  likeBtn7.addEventListener("click", function () {
    countLikes7 += 1;
    document.querySelector(".sept").textContent = `(${countLikes7})`;
  });
}

if (likeBtn8) {
  likeBtn8.addEventListener("click", function () {
    countLikes8 += 1;
    document.querySelector(".huit").textContent = `(${countLikes8})`;
  });
}

if (likeBtn9) {
  likeBtn9.addEventListener("click", function () {
    countLikes9 += 1;
    document.querySelector(".neuf").textContent = `(${countLikes9})`;
  });
}

if (likeBtn10) {
  likeBtn10.addEventListener("click", function () {
    countLikes10 += 1;
    document.querySelector(".dix").textContent = `(${countLikes10})`;
  });
}

if (likeBtn11) {
  likeBtn11.addEventListener("click", function () {
    countLikes11 += 1;
    document.querySelector(".onze").textContent = `(${countLikes11})`;
  });
}

if (likeBtn12) {
  likeBtn12.addEventListener("click", function () {
    countLikes12 += 1;
    document.querySelector(".douze").textContent = `(${countLikes12})`;
  });
}

if (likeBtn13) {
  likeBtn13.addEventListener("click", function () {
    countLikes13 += 1;
    document.querySelector(".treize").textContent = `(${countLikes13})`;
  });
}

if (likeBtn14) {
  likeBtn14.addEventListener("click", function () {
    countLikes14 += 1;
    document.querySelector(".quatorze").textContent = `(${countLikes14})`;
  });
}

const DecrementBtn1 = document.querySelector(".oneed");
const IncrementBtn1 = document.querySelector(".oneei");
const Items1 = document.querySelector(".onee");
let Amount1 = 0;
const DecrementBtn2 = document.querySelector(".twood");
const IncrementBtn2 = document.querySelector(".twooi");
const Items2 = document.querySelector(".twoo");
let Amount2 = 0;
const DecrementBtn3 = document.querySelector(".threeed");
const IncrementBtn3 = document.querySelector(".threeei");
const Items3 = document.querySelector(".threee");
let Amount3 = 0;
const DecrementBtn4 = document.querySelector(".fourrd");
const IncrementBtn4 = document.querySelector(".fourri");
const Items4 = document.querySelector(".fourr");
let Amount4 = 0;
const DecrementBtn5 = document.querySelector(".fiveed");
const IncrementBtn5 = document.querySelector(".fiveei");
const Items5 = document.querySelector(".fivee");
let Amount5 = 0;
const DecrementBtn6 = document.querySelector(".sixterd");
const IncrementBtn6 = document.querySelector(".sixteri");
const Items6 = document.querySelector(".sixter");
let Amount6 = 0;
const DecrementBtn7 = document.querySelector(".sevennd");
const IncrementBtn7 = document.querySelector(".sevenni");
const Items7 = document.querySelector(".sevenn");
let Amount7 = 0;
const DecrementBtn8 = document.querySelector(".eighttd");
const IncrementBtn8 = document.querySelector(".eightti");
const Items8 = document.querySelector(".eightt");
let Amount8 = 0;
const DecrementBtn9 = document.querySelector(".nineed");
const IncrementBtn9 = document.querySelector(".nineei");
const Items9 = document.querySelector(".ninee");
let Amount9 = 0;
const DecrementBtn10 = document.querySelector(".tennd");
const IncrementBtn10 = document.querySelector(".tenni");
const Items10 = document.querySelector(".tenn");
let Amount10 = 0;
const DecrementBtn11 = document.querySelector(".elevennd");
const IncrementBtn11 = document.querySelector(".elevenni");
const Items11 = document.querySelector(".elevenn");
let Amount11 = 0;
const DecrementBtn12 = document.querySelector(".twelveed");
const IncrementBtn12 = document.querySelector(".twelveei");
const Items12 = document.querySelector(".twelvee");
let Amount12 = 0;
const DecrementBtn13 = document.querySelector(".thirteennd");
const IncrementBtn13 = document.querySelector(".thirteenni");
const Items13 = document.querySelector(".thirteenn");
let Amount13 = 0;
const DecrementBtn14 = document.querySelector(".fourteennd");
const IncrementBtn14 = document.querySelector(".fourteenni");
const Items14 = document.querySelector(".fourteenn");
let Amount14 = 0;

// setting a default attribute
// DecrementBtn1.setAttribute("disabled", "disabled");
// DecrementBtn2.setAttribute("disabled", "disabled");
// DecrementBtn3.setAttribute("disabled", "disabled");
// DecrementBtn4.setAttribute("disabled", "disabled");
// DecrementBtn5.setAttribute("disabled", "disabled");
// DecrementBtn6.setAttribute("disabled", "disabled");
// DecrementBtn7.setAttribute("disabled", "disabled");
// DecrementBtn8.setAttribute("disabled", "disabled");
// DecrementBtn9.setAttribute("disabled", "disabled");
// DecrementBtn10.setAttribute("disabled", "disabled");
// DecrementBtn11.setAttribute("disabled", "disabled");
// DecrementBtn12.setAttribute("disabled", "disabled");
// DecrementBtn13.setAttribute("disabled", "disabled");
// DecrementBtn14.setAttribute("disabled", "disabled");

if (DecrementBtn1) {
  DecrementBtn1.addEventListener("click", function () {
    Amount1 = Number(Items1.value);
    // if (Amount1 >= 0) {
    //   DecrementBtn1.removetAttribute("disabled", "disabled");
    // }
    Amount1 -= 1;
    Items1.value = Amount1;
  });
}

if (IncrementBtn1) {
  IncrementBtn1.addEventListener("click", function () {
    Amount1 = Number(Items1.value);
    Amount1 += 1;
    Items1.value = Amount1;
  });
}