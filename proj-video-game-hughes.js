/*This script is mostly for the interactive box and other features*/

let hughesX = 200;
let hughesY = 30;
let hughes = document.querySelector(".hughes-alt");
let hughesMove = document.querySelector(".hughes-move");
let hughesDirection = 1;
let hughesDirectionY = 1;
let hughesRunning = false;
let hughesState = "moving";
let hughesWait = 100;
let hughesAction = true;
let hughesLakeX = 90;
let hughesLakeY = 100;
let hughesGameSelect = "none";
let hughesLakeDirecion = 1;

//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && hughesRunning === false){
        hughesRunning = true;
        const Loop = setInterval(Start,1 , hughes, hughesMove); 

        function Start(person, personMove){
            
        hughesGameSelect = document.querySelector(".main-header").innerHTML;
        hughesMove.style.zIndex = hughesY + 500;
        hughes.style.zIndex = hughesY + 500;


        if(hughesAction === true){
        console.log(hughesAction);
            //console.log(State === "moving" && gameSelect ==="none");
            hughesAction = false;

            
            if(hughesState === "moving" && hughesGameSelect !=="none"){
                //console.log("Moving");

                const hughesInterval = setInterval(hughesMoveFun, 50, person, personMove);
                
        
                function hughesMoveFun(person, personMove){  
          
                    if (hughesDirection === 1){
                        person.style.display = "none";
                        personMove.style.display = "";
                        personMove.style.transform = "scaleX(1)";
                        hughesX = hughesX + 5;
                        hughesWait = hughesWait - 1;

                        if (hughesX > 570 ){
                        hughesDirection = -1;
                        }else{
                        personMove.style.marginLeft = hughesX +"px";
                        }
            
                    }
                
                    else{
                        personMove.style.transform = "scaleX(-1)";
                        hughesX = hughesX - 5;
                        if (hughesX < -150 ){
                        hughesDirection = 1;
                        }else{
                        personMove.style.marginLeft = hughesX +"px";
                        }
                    }

                    if (hughesDirectionY === 1){
                        hughesY = hughesY + 5;
                        if (hughesY > 100 ){
                        hughesDirectionY = -1;
                        }else{
                        personMove.style.marginTop = hughesY +"px";
                        }
                    }else{
                        hughesY = hughesY - 5;
                        if (hughesY < -100 ){
                        hughesDirectionY = 1;
                        }else{
                        personMove.style.marginTop = hughesY +"px";
                        }
                }
                
                    if (hughesWait < 0){
                        hughesState = "standing";
                        hughesAction = true;
                        //console.log("Finished");//
                        person.style.display = "block";
                        personMove.style.display = "none";
                        person.style.marginLeft = hughesX + "px";
                        person.style.marginTop = hughesY + "px";
                        clearInterval(hughesInterval);
                    }
                }       
            }
            else if(hughesGameSelect === "A Superhero Story"){
                console.log("Going to Lake");
                person.style.display = "none";
                personMove.style.display = "";
                console.log(hughesLakeX)

                if(hughesX > hughesLakeX){
                    hughesLakeDirection = 1;
                }else{
                    hughesLakeDirection = 0;
                }
                const hughesLakeInterval = setInterval(hughesLake, 1, person, personMove);

                function hughesLake(person, personMove){
                    console.log("Running");
                    console.log(hughesGameSelect === "A Superhero Story")
                    if(hughesGameSelect !== "A Superhero Story"){
                        hughesAction = true;
                        clearInterval(hughesLakeInterval);    
                    }

                    if(hughesY < hughesLakeY){
                        
                        hughesY = hughesY + 1;
                        personMove.style.marginTop = hughesY +"px";
                    }
                    else{

                        if(hughesLakeDirection === 1){
                        if(hughesX < hughesLakeX){
                            person.style.display = "";
                            personMove.style.display = "none";
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = hughesX +"px";
                            person.style.marginTop = hughesY +"px";
                            
                        }else{
                            personMove.style.transform = "scaleX(-1)";
                            hughesX = hughesX - 1;
                            personMove.style.marginLeft = hughesX +"px";
                            }
                        }else{
                        if(hughesX > hughesLakeX){
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = hughesX +"px";
                            person.style.marginTop = hughesY +"px";
                        }else{
                            hughesX = hughesX + 1;
                            personMove.style.transform = "scaleX(1)";
                            personMove.style.marginLeft = hughesX +"px";
                        }
                        }
                    }

                }
            }
            else{
                hughesWait = Math.floor((Math.random() * 15));
                console.log("Waiting")
                const hughesIntervalAlt = setInterval(hughesAltFun, 1000, person, personMove);

                function hughesAltFun(person, personMove){
                    console.log(hughesWait)
                    person.style.display = "block";
                    personMove.style.display = "none";
                    person.style.marginLeft = hughesX + "px";
                    person.style.marginTop = hughesY + "px";
                    hughesWait = hughesWait - 1;

                    if (hughesWait < 0){
                        hughesState = "moving";
                        hughesAction = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 10) * 10);
                        hughesWait = randomint;
                        clearInterval(hughesIntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
