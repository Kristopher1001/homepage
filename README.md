# Krzysiek Konieczko - My website

![Krzysiek](images/manager.JPG)

## Demo

https://kristopher1001.github.io/homepage/

## Description

The purpose of this website is to introduce myself to potential recruiters. 
In it, I describe my experience, education, interests or activities as a volunteer. 
In creating it, I used several programming technologies, and these are:

-HTML<br>
-CSS<br>
-JAVA SCRIPT

In addition, I used the BEM convention, Normalize.css or OpenGraph. 
Inside, I have inserted a table that describes my competences in the context of project management. 
I also used https://fonts.google.com/, from where I downloaded the Berkshire Swash font.

I can present here part of my code where switch background color on the my website. 

let button = document.querySelector(".buttonBackground");<br>
let body = document.querySelector(".body");<br>
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {<br>
    body.classList.toggle("dark");<br>

    if (body.classList.contains("dark")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "ciemne";
    }
});
