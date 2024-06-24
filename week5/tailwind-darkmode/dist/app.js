document.addEventListener("DOMContentLoaded", () => {
    const sunIcon = document.getElementsByClassName("sun")[0];
    const moonIcon = document.getElementsByClassName("moon")[0];

    if (!sunIcon || !moonIcon) {
        console.error("Sun or moon icon not found");
        return;
    }

    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const iconToggle = () => {
        console.log("Toggling icons");
        moonIcon.classList.toggle("display-none");
        sunIcon.classList.toggle("display-none");
    }

    const themeCheck = () => {
        console.log("Checking theme");
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            moonIcon.classList.add("display-none");
            sunIcon.classList.remove("display-none");
        } else {
            document.documentElement.classList.remove("dark");
            moonIcon.classList.remove("display-none");
            sunIcon.classList.add("display-none");
        }
    }

    const themeSwitch = () => {
        console.log("Switching theme");
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } 
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        
        iconToggle();
    }

    sunIcon.addEventListener("click", themeSwitch);
    moonIcon.addEventListener("click", themeSwitch);

    themeCheck();
});
