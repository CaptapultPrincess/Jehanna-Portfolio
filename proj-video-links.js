let sectionOne = document.querySelector(".extra-games-1");
let sectionTwo = document.querySelector(".extra-games-2");
let sectionThree = document.querySelector(".extra-games-3");

let descOne = document.querySelector(".desc-box-1");
let descTwo= document.querySelector(".desc-box-2");
let descThree = document.querySelector(".desc-box-3");

let buttonOne = document.querySelector(".game-4");
let buttonTwo = document.querySelector(".game-5");
let buttonThree = document.querySelector(".game-6");

let mainOne = document.querySelector(".game-1");
let mainTwo = document.querySelector(".game-2");
let mainThree = document.querySelector(".game-3");

let mainHeader = document.querySelector(".main-header");
let mainText = document.querySelector(".main-text") ;

function resetSections(){
    descOne.style.display = "none";
    descTwo.style.display = "none";
    descThree.style.display = "none";
    sectionOne.style.display = "none";
    sectionTwo.style.display = "none";
    sectionThree.style.display = "none";
}

function scrolluntil(x){
    let currentScroll = window.scrollY;
    let speedY = 0.1;
    const scrollInterval = setInterval(scrolling, 1, x);

    function scrolling(end){
        if(window.scrollY < end){
            speedY = speedY + 0.01;
            currentScroll = currentScroll + speedY;
            window.scrollTo(0, currentScroll);
            console.log(window.scrollY);

        }else{
            clearInterval(scrollInterval);
        }

    }


}

mainOne.addEventListener('click', function(){
    mainHeader.innerHTML = "A Princess Story"
    mainText.innerHTML = "Princess Story is a RPG (Role-Based Game) about a knight's journery after discovring the prince and princess has been kidnapped by some mysterous figure. This was the first RPG that I actually finished, It served as hope that I could complete a project.<br><br>Princess Story started a lot of things, for one, my art-style. My first version of the game used backpack sprites for most the art, but the newly rebooted version only used art made by me. It was a very long journey, and even after publishing the game, it received little attention. However, it would come back when i entered in a IUPUI programming competition, and used a newly revised version to submit my entry. To my suprise, it won, gold medal and all. <br><br><br><a href='princess.html' class='explore-btn'>Explore Princess Story</a>"
    document.querySelector(".desc-box").style.height = "auto";
});

mainTwo.addEventListener('click', function(){
    mainHeader.innerHTML = "Cake Bake"
    mainText.innerHTML = "Cake Bake is a simple and short game where your only task is to bake a cake. To do this, you select three ingredients, and my character does the rest. <br><br> Cake Bake was orginally made for a contest entry, but hit unexpected success when the Scratch Team decided to feature it on the main page. This lead to it getting more than 100,000 views. From that point on, I expanded the game, reaching 100 cakes. Even if its time on the main page is over, Cake Bake is still being played today. I will never forgot the day I opened scratch.mit's website and saw my game.<br><br><br><a href='cake.html' class='explore-btn'>Explore Cake Bake</a>"
    document.querySelector(".desc-box").style.height = "auto";
});

mainThree.addEventListener('click', function(){
    mainHeader.innerHTML = "A Superhero Story"
    mainText.innerHTML = "Superhero Story is currently an incomplete game where your task is to run around as a superhero. However, daily routines change once you meet a strange girl who has more power than anyone else in the city. <br><br> Superhero Story is the project I am currently working on. There wasn't a huge gap between it and Princess Story, but my programming skills had vastly improved by then. This is actually an 2D open world game, that even saves your progress using a code. This game started right after Cake Bake's success, so there are many easter eggs of fans around the map.<br><br><br><a href='superhero.html' class='explore-btn'>Explore A Superhero Story</a>"
    document.querySelector(".desc-box").style.height = "auto";
});


buttonOne.addEventListener('click', function(){
    resetSections()
    descOne.style.display = "inline-block";
    sectionOne.style.display = "inline-block"; 
    scrolluntil(2150)
});

buttonTwo.addEventListener('click', function(){
    resetSections()
    descTwo.style.display = "inline-block";
    sectionTwo.style.display = "inline-block";
    scrolluntil(2150) 
});

buttonThree.addEventListener('click', function(){
    resetSections()
    descThree.style.display = "inline-block";
    sectionThree.style.display = "inline-block"; 
    scrolluntil(2150)
});