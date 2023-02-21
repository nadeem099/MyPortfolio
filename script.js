let theme = localStorage.getItem('theme');

var setTheme = (mode) => {
    if(mode == "light"){
        document.getElementById('theme-style').href = "default.css";
    }else if(mode == "blue"){
        document.getElementById('theme-style').href = "blue.css";
    }else if(mode == "green"){
        document.getElementById('theme-style').href = "green.css";
    }else{
        document.getElementById('theme-style').href = "purple.css";
    }
    localStorage.setItem('theme', mode);
}

if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');


for(let i=0; i<themeDots.length; i++){
    themeDots[i].addEventListener('click', () => {
        let themeMode = themeDots[i].dataset.mode;
        console.log(themeMode);
        setTheme(themeMode);
    });
}


var scrollToForm = (e) => {
let contactWrapper = document.querySelector('.contact-wrapper');
    contactWrapper.scrollIntoView({behavior: "smooth"});
}