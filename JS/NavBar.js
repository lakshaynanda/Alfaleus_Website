function MakeActive() {
    const BBG = document.querySelectorAll(".BorderBG");
    var url = location.href.split('index.html'),
        loc = url[url.length - 1];
    for (var i = 0; i < BBG.length; i++) {

        var path = BBG[i].querySelectorAll("a")[0].href.split('index.html'),
            page = path[path.length - 1];
        if (page == loc) {
            BBG[i].classList.add("ActiveNavMenu");
        }
    }
}

MakeActive();
HoverActive();

function HoverActive() {
    const BBG = document.querySelectorAll(".BorderBG");
    for (let i = 0; i < BBG.length; i++) {
        BBG[i].addEventListener("mouseenter", function () {
            for (let i = 0; i < BBG.length; i++) {
                BBG[i].classList.remove("ActiveNavMenu");
            }
            // this.classList.add("ActiveNavMenu");            
        });

        BBG[i].addEventListener("mouseleave", function () {
            // this.classList.remove("ActiveNavMenu");   
            MakeActive();
        });
    }
}

let mainNav = document.getElementById("NavMenu");
let navBarToggle = document.getElementById("HamMenu");
navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("OpenMenu");
});

let ImgLink = document.getElementById("NavAlfaleusLogo");
ImgLink.addEventListener("click", function () {
    window.location.href = 'index-2.html'
});