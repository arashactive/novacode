(function App(){
    let isDark = false;
    if(localStorage.getItem("dark-mode")){
        isDark = true;
        setDarkTheme();
    }

    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", ()=> {
        if(isDark){
            setLightTheme();
            isDark = false;
            ManageLocalStorage("DELETE");
            return;
        }
        setDarkTheme();
        ManageLocalStorage("ADD");
        isDark = true;
    });

    function setLightTheme(){
        document.body.classList.remove("dark");
    }

    function setDarkTheme(){
        document.body.classList.add("dark");
    }

    function ManageLocalStorage(command){
        if(command == "DELETE"){
            localStorage.removeItem("dark-mode");
            return;
        }
        localStorage.setItem("dark-mode", true);
    }
})();