/*This script is mostly for the interactive box and other features*/

let bakerX = 150;
let bakerY = 20;
let baker = document.querySelector(".baker-alt");
let bakerMove = document.querySelector(".baker-move");
let bakerDirection = -1;
let bakerDirectionY = 1;
let bakerRunning = false;
let bakerState = "moving";
let bakerWait = 100;
let bakerAction = true;
let bakerLakeX = 150;
let bakerLakeY = 90;
let bakerGameSelect = "none";
let bakerLakeDirecion = 1;

//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && bakerRunning === false){
        bakerRunning = true;
        const Loop = setInterval(Start,1 , baker, bakerMove); 

        function Start(person, personMove){
            
        bakerGameSelect = document.querySelector(".main-header").innerHTML;
        bakerMove.style.zIndex = bakerY + 500;
        baker.style.zIndex = bakerY + 500;


        if(bakerAction === true){
        console.log(bakerAction);
            //console.log(State === "moving" && gameSelect ==="none");
            bakerAction = false;

            
            if(bakerState === "moving" && bakerGameSelect !=="none"){
                //console.log("Moving");

                const bakerInterval = setInterval(bakerMoveFun, 50, person, personMove);
                
        
                function bakerMoveFun(person, personMove){  
          
                    if (bakerDirection === 1){
                        person.style.display = "none";
                        personMove.style.display = "";
                        personMove.style.transform = "scaleX(1)";
                        bakerX = bakerX + 5;
                        bakerWait = bakerWait - 1;

                        if (bakerX > 570 ){
                        bakerDirection = -1;
                        }else{
                        personMove.style.marginLeft = bakerX +"px";
                        }
            
                    }
                
                    else{
                        personMove.style.transform = "scaleX(-1)";
                        bakerX = bakerX - 5;
                        if (bakerX < -150 ){
                        bakerDirection = 1;
                        }else{
                        personMove.style.marginLeft = bakerX +"px";
                        }
                    }

                    if (bakerDirectionY === 1){
                        bakerY = bakerY + 5;
                        if (bakerY > 100 ){
                        bakerDirectionY = -1;
                        }else{
                        personMove.style.marginTop = bakerY +"px";
                        }
                    }else{
                        bakerY = bakerY - 5;
                        if (bakerY < -100 ){
                        bakerDirectionY = 1;
                        }else{
                        personMove.style.marginTop = bakerY +"px";
                        }
                }
                
                    if (bakerWait < 0){
                        bakerState = "standing";
                        bakerAction = true;
                        //console.log("Finished");//
                        person.style.display = "block";
                        personMove.style.display = "none";
                        person.style.marginLeft = bakerX + "px";
                        person.style.marginTop = bakerY + "px";
                        clearInterval(bakerInterval);
                    }
                }       
            }
            else if(bakerGameSelect === "Cake Bake"){
                console.log("Going to Lake");
                person.style.display = "none";
                personMove.style.display = "";
                console.log(bakerLakeX)

                if(bakerX > bakerLakeX){
                    bakerLakeDirection = 1;
                }else{
                    bakerLakeDirection = 0;
                }
                const bakerLakeInterval = setInterval(bakerLake, 1, person, personMove);

                function bakerLake(person, personMove){
                    console.log("Running");
                    console.log(bakerGameSelect === "Cake Bake")
                    if(bakerGameSelect !== "Cake Bake"){
                        bakerAction = true;
                        clearInterval(bakerLakeInterval);    
                    }

                    if(bakerY < bakerLakeY){
                        
                        bakerY = bakerY + 1;
                        personMove.style.marginTop = bakerY +"px";
                    }
                    else{

                        if(bakerLakeDirection === 1){
                        if(bakerX < bakerLakeX){
                            person.style.display = "";
                            personMove.style.display = "none";
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = bakerX +"px";
                            person.style.marginTop = bakerY +"px";
                            
                        }else{
                            personMove.style.transform = "scaleX(-1)";
                            bakerX = bakerX - 1;
                            personMove.style.marginLeft = bakerX +"px";
                            }
                        }else{
                        if(bakerX > bakerLakeX){
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = bakerX +"px";
                            person.style.marginTop = bakerY +"px";
                        }else{
                            bakerX = bakerX + 1;
                            personMove.style.transform = "scaleX(1)";
                            personMove.style.marginLeft = bakerX +"px";
                        }
                        }
                    }

                }
            }
            else{
                bakerWait = Math.floor((Math.random() * 15));
                console.log("Waiting")
                const bakerIntervalAlt = setInterval(bakerAltFun, 1000, person, personMove);

                function bakerAltFun(person, personMove){
                    console.log(bakerWait)
                    person.style.display = "block";
                    personMove.style.display = "none";
                    person.style.marginLeft = bakerX + "px";
                    person.style.marginTop = bakerY + "px";
                    bakerWait = bakerWait - 1;

                    if (bakerWait < 0){
                        bakerState = "moving";
                        bakerAction = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 10) * 10);
                        bakerWait = randomint;
                        clearInterval(bakerIntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
