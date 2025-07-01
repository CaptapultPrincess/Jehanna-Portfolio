//Variables for the Stars
let starBox = document.querySelector(".star-box");
let starOne = document.querySelector(".star-1");
let starTwo = document.querySelector(".star-2");
let starThree = document.querySelector(".star-3");
let starFour = document.querySelector(".star-4");
let starFive = document.querySelector(".star-5");
let starSix = document.querySelector(".star-6");

//Variables for the Telescope
let telescope = document.querySelector(".telescope");
let teleBtn = document.querySelector(".telescope-btn");
let teleHead= document.querySelector(".telescope-head")
let jLogo = document.querySelector(".j-logo")

//Variables for the text box
let starBoxHead = document.querySelector(".star-box-head");
let starBoxp = document.querySelector(".star-box-p");

//Starter code
telescope.style.display = "none";


//Tracks the mouseX and mouseY of the mouse when it moves
document.addEventListener('mousemove', function(){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    let telescopeX = mouseX - 3200;
    let telescopeY = mouseY - 2100;
    telescope.style.marginLeft = `${telescopeX}px`;
    telescope.style.marginTop = `${telescopeY}px`;

});

//For each star, this displays a certain text when the mouse hovers over
starOne.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Place in Time for Me"
    starBoxp.innerHTML =  "As time moves on, I can defintely see a change in diversity and a decrease in racism.I like to honor those who worked so hard before me to stop racism. Nonetheless, I don't think the job is done, knowing the issues currently going on in the media. I dive into this topic more in depth in my Website for Change. Growing up as a kid, I was a heavy gamer. However, now that i'm grown, I realized there is hardly any postive, bright, bubbly black characters in any video games, and hardly in the media. I don't want any black girls, or other ethnicities, to expierance the same loneliness I did. One of my biggest missions as a indie game developer, is to create a place in time for me."
    starBox.style.opacity = "1";
});

starTwo.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "Heaven on Earth"
    starBoxp.innerHTML =  "If you known me long enough, you've probably heard me say I'm a follower of Jesus Christ. For a while, I wish I could find a game for christians. Sadly, majority of the few christian games are violent and fighting-based. Even though this works well with boys and girls who enjoy fighting games, there are hardly any games for people who enjoy a more story-based game, or little kids. I don't want to share the gospel in a way that is forceful, but in a way that tells the true emotions, scenarios, and struggles that come with being a follower of Christ. "
    starBox.style.opacity = "1";
});

starThree.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "Family is Forever"
    starBoxp.innerHTML =  "Before I got into coding, I wanted to be a fashion designer. I had to do a career's project and research my own career, fashion designing. At the end of the project, I left fashion designing for one main reason, movement. Being a fashion designer required me to move around a lot. It collided with my dream to settle down and build a home with a family. I didn't want my kids to have to move continiously, or worse, hardly see me with all my business trips. My family is as important to me as work."
    starBox.style.opacity = "1";
});

starFour.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Million Dreams"
    starBoxp.innerHTML =  "Looking at a world filled with careers, its  hard to choose just one, so here are a few that I had to let go. Lawyer: I have a strong voice, and execellent debating skills, but I feared the day I have a case I disagreed with. Movie Director: I had tons of movie ideas, but then I realized you can make a lot of movies in the form of video games. Professional Chess Player: I love the idea of being a really smart chess player, but never found the inspiration to make it a career. Singer: Everyone wants to have that unbelievable, beautiful singing voie, but little actually practice. I have a lot of little dreams, but you have to focus on one to make it happen."
    starBox.style.opacity = "1";
});

starFive.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "The Dream Team"
    starBoxp.innerHTML =  "My dream is to be an indie game developer, but even an independent developer needs help. That is why I want to find the dream team, people who are passionate like me, but have different skills. I would need programmers, artist, musicians to come together with a common goal, and work to make great video games"
    starBox.style.opacity = "1";
});

starSix.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Fictional Fantasy"
    starBoxp.innerHTML =  "I want to be an Indie Game Developer. I want to make video games, that a lot of people can enjoy. I don't just want it to be popular, I want my games to have an impact, to have stories, lore, twist, happiness, sadness, and more. I want my video games to be an expierance."
    starBox.style.opacity = "1";
});

//For each star, this hides the text box when the mouse isn't hovering over
starOne.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starTwo.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starThree.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starFour.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starFive.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starSix.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});



//Shows and Hides the telescope
teleBtn.addEventListener('click', function() 
{
    console.log(telescope.style.display)
    if(telescope.style.display === "none"){
        teleHead.innerHTML = "Hide Telescope";
        telescope.style.display = "inline-block";
        jLogo.style.display = "inline-block"
        telescope.style.zIndex = "1";
        
    }else{
        teleHead.innerHTML = "Show Telescope";
        telescope.style.display = "none";
        jLogo.style.display = "none";
        telescope.style.zIndex = "-5";
    }
});

