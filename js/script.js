{
    const welcome = () => {
        console.log("Cześć!")
    };

    welcome();

    const removePicture = () => {
        const pictureElement = document.querySelector(".section__picture-js");
        pictureElement.remove();
    };

    const removeElementClickInit = () => {
        const buttonElement = document.querySelector(".button-js");
        buttonElement.addEventListener("click", removePicture)
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body-js");
        const themeName = document.querySelector(".themeName-js");

        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    };

    const changeBackgroundButtonInit = () => {
        const changeBackgroundButton = document.querySelector(".backgroundButton-js");
        changeBackgroundButton.addEventListener("click", toggleBackground);
    }

    changeBackgroundButtonInit();
    removeElementClickInit();
}