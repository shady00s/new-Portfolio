
const navigationBtns = document.querySelectorAll("#navBtn");

const homePage = document.querySelector(".mainPage") as HTMLElement;
const aboutMePage = document.querySelector(".aboutMePage") as HTMLElement;
const projectsPage = document.querySelector(".projectsPage") as HTMLElement;

function navigationHandeler(): void {

    navigationBtns.forEach(element => {

        element.addEventListener("click", (e: Event) => {
            e.preventDefault()
           
            console.log((e.target as HTMLElement).classList[0])

            switch ((e.target as HTMLElement).classList[0]) {
                case "navigation1":
                    
                   homePage.style.display="flex"
                   aboutMePage.style.display ="none"
                   projectsPage.style.display ="none"
                    break;

                case "navigation2":
                    homePage.style.display="none"
                   aboutMePage.style.display ="block"
                   projectsPage.style.display ="none"
                    break;
                    
                    case "navigation3":
                        homePage.style.display="none"
                        aboutMePage.style.display ="none"
                        projectsPage.style.display ="block"
                        break;
                default:
                    console.log("No")
            }
        })

    });


}

navigationHandeler()