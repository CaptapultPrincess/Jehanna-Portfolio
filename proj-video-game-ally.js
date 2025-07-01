/*This script is mostly for the interactive box and other features*/

let allyX = 500;
let allyY = 50;
let ally = document.querySelector(".ally-alt");
let allyMove = document.querySelector(".ally-move");
let allyDirection = -1;
let allyDirectionY = 1;
let allyRunning = false;
let allyState = "moving";
let allyWait = 100;
let allyAction = true;
let allyLakeX = 150;
let allyLakeY = 80;
let allyGameSelect = "none";
let allyLakeDirecion = 1;

//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && allyRunning === false){
        allyRunning = true;
        const Loop = setInterval(Start,1 , ally, allyMove); 

        function Start(person, personMove){
            
        allyGameSelect = document.querySelector(".main-header").innerHTML;
        allyMove.style.zIndex = allyY + 500;
        ally.style.zIndex = allyY + 500;


        if(allyAction === true){
        console.log(Action);
            //console.log(State === "moving" && gameSelect ==="none");
            allyAction = false;

            
            if(allyState === "moving" && allyGameSelect !=="none"){
                //console.log("Moving");

                const allyInterval = setInterval(allyMoveFun, 50, person, personMove);
                
        
                function allyMoveFun(person, personMove){  
          
                    if (allyDirection === 1){
                        person.style.display = "none";
                        personMove.style.display = "";
                        personMove.style.transform = "scaleX(1)";
                        allyX = allyX + 5;
                        allyWait = allyWait - 1;

                        if (allyX > 570 ){
                        allyDirection = -1;
                        }else{
                        personMove.style.marginLeft = allyX +"px";
                        }
            
                    }
                
                    else{
                        personMove.style.transform = "scaleX(-1)";
                        allyX = allyX - 5;
                        if (allyX < -150 ){
                        allyDirection = 1;
                        }else{
                        personMove.style.marginLeft = allyX +"px";
                        }
                    }

                    if (allyDirectionY === 1){
                        allyY = allyY + 5;
                        if (allyY > 100 ){
                        allyDirectionY = -1;
                        }else{
                        personMove.style.marginTop = allyY +"px";
                        }
                    }else{
                        allyY = allyY - 5;
                        if (allyY < -100 ){
                        allyDirectionY = 1;
                        }else{
                        personMove.style.marginTop = allyY +"px";
                        }
                }
                
                    if (allyWait < 0){
                        allyState = "standing";
                        allyAction = true;
                        //console.log("Finished");//
                        person.style.display = "block";
                        personMove.style.display = "none";
                        person.style.marginLeft = allyX + "px";
                        person.style.marginTop = allyY + "px";
                        clearInterval(allyInterval);
                    }
                }       
            }
            else if(allyGameSelect === "A Superhero Story"){
                console.log("Going to Lake");
                person.style.display = "none";
                personMove.style.display = "";
                console.log(allyLakeX)

                if(allyX > allyLakeX){
                    allyLakeDirection = 1;
                }else{
                    allyLakeDirection = 0;
                }
                const allyLakeInterval = setInterval(allyLake, 1, person, personMove);

                function allyLake(person, personMove){
                    console.log("Running");
                    console.log(allyGameSelect === "A Superhero Story")
                    if(allyGameSelect !== "A Superhero Story"){
                        allyAction = true;
                        clearInterval(allyLakeInterval);    
                    }

                    if(allyY < allyLakeY){
                        
                        allyY = allyY + 1;
                        personMove.style.marginTop = allyY +"px";
                    }
                    else{

                        if(allyLakeDirection === 1){
                        if(allyX < allyLakeX){
                            person.style.display = "";
                            personMove.style.display = "none";
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = allyX +"px";
                            person.style.marginTop = allyY +"px";
                            
                        }else{
                            personMove.style.transform = "scaleX(-1)";
                            allyX = allyX - 1;
                            personMove.style.marginLeft = allyX +"px";
                            }
                        }else{
                        if(allyX > allyLakeX){
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = allyX +"px";
                            person.style.marginTop = allyY +"px";
                        }else{
                            allyX = allyX + 1;
                            personMove.style.transform = "scaleX(1)";
                            personMove.style.marginLeft = allyX +"px";
                        }
                        }
                    }

                }
            }
            else{
                allyWait = Math.floor((Math.random() * 15));
                console.log("Waiting")
                const allyIntervalAlt = setInterval(allyAltFun, 1000, person, personMove);

                function allyAltFun(person, personMove){
                    console.log(allyWait)
                    person.style.display = "block";
                    personMove.style.display = "none";
                    person.style.marginLeft = allyX + "px";
                    person.style.marginTop = allyY + "px";
                    allyWait = allyWait - 1;

                    if (allyWait < 0){
                        allyState = "moving";
                        allyAction = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 10) * 10);
                        allyWait = randomint;
                        clearInterval(allyIntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
