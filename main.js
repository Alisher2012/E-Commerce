const btn = document.querySelector(".hero-btn");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".login-btn");
const modalExit = document.querySelector(".modalExit");

let mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : "light";

const darkMode = (item) => {
    if (item == "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
};

// Применяем тему при загрузке
darkMode(mode);

btn.addEventListener("click", () => {
    if (mode == "dark") {
        mode = "light";
    } else {
        mode = "dark";
    }
    localStorage.setItem("mode", mode);
    darkMode(mode);
});

modalBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

modalExit.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Закрытие модального окна при клике вне его
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
