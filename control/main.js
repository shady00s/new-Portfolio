var navigationBtns = document.querySelectorAll("#navBtn");
var homePage = document.querySelector(".mainPage");
var aboutMePage = document.querySelector(".aboutMePage");
var projectsPage = document.querySelector(".projectsPage");
function navigationHandeler() {
    navigationBtns.forEach(function (element) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(e.target.classList[0]);
            switch (e.target.classList[0]) {
                case "navigation1":
                    homePage.style.display = "flex";
                    aboutMePage.style.display = "none";
                    projectsPage.style.display = "none";
                    break;
                case "navigation2":
                    homePage.style.display = "none";
                    aboutMePage.style.display = "block";
                    projectsPage.style.display = "none";
                    break;
                case "navigation3":
                    homePage.style.display = "none";
                    aboutMePage.style.display = "none";
                    projectsPage.style.display = "block";
                    break;
                default:
                    console.log("No");
            }
        });
    });
}
navigationHandeler();
