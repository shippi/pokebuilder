if (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
}
    
document.getElementsByTagName("html")[0].classList.add(localStorage.getItem("theme") || "light");
console.log(localStorage.getItem("theme"));