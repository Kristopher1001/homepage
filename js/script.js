{
    const welcome = () => {
        console.log("Cześć!")
    };

    welcome();

    const removePicture = () => {
        const pictureElement = document.querySelector(".section__picture");
        pictureElement.remove();
    };


    const removeElementClickInit = () => {
        const buttonElement = document.querySelector(".button");
        buttonElement.addEventListener("click", removePicture)
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    };

    const changeBackgroundButtonInit = () => {
        const changeBackgroundButton = document.querySelector(".backgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        
    }

    changeBackgroundButtonInit();
    removeElementClickInit();
}