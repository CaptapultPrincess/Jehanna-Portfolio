/*This script is mostly for the interactive box and other features*/

let juliX = 100;
let juliY = 0;
let juli = document.querySelector(".juli-alt");
let juliMove = document.querySelector(".juli-move");
let juliDirection = -1;
let juliDirectionY = 1;
let juliRunning = false;
let juliState = "moving";
let juliWait = 100;
let juliAction = true;
let juliLakeX = 150;
let juliLakeY = 100;
let juliGameSelect = "none";
let juliLakeDirecion = 1;

//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && juliRunning === false){
        juliRunning = true;
        const Loop = setInterval(Start,1 , juli, juliMove); 

        function Start(person, personMove){
            
        juliGameSelect = document.querySelector(".main-header").innerHTML;
        juliMove.style.zIndex = juliY + 500;
        juli.style.zIndex = juliY + 500;


        if(juliAction === true){
        console.log(juliAction);
            //console.log(State === "moving" && gameSelect ==="none");
            juliAction = false;

            
            if(juliState === "moving" && juliGameSelect !=="none"){
                //console.log("Moving");

                const juliInterval = setInterval(juliMoveFun, 50, person, personMove);
                
        
                function juliMoveFun(person, personMove){  
          
                    if (juliDirection === 1){
                        person.style.display = "none";
                        personMove.style.display = "";
                        personMove.style.transform = "scaleX(1)";
                        juliX = juliX + 5;
                        juliWait = juliWait - 1;

                        if (juliX > 570 ){
                        juliDirection = -1;
                        }else{
                        personMove.style.marginLeft = juliX +"px";
                        }
            
                    }
                
                    else{
                        personMove.style.transform = "scaleX(-1)";
                        juliX = juliX - 5;
                        if (juliX < -150 ){
                        juliDirection = 1;
                        }else{
                        personMove.style.marginLeft = juliX +"px";
                        }
                    }

                    if (juliDirectionY === 1){
                        juliY = juliY + 5;
                        if (juliY > 100 ){
                        juliDirectionY = -1;
                        }else{
                        personMove.style.marginTop = juliY +"px";
                        }
                    }else{
                        juliY = juliY - 5;
                        if (juliY < -100 ){
                        juliDirectionY = 1;
                        }else{
                        personMove.style.marginTop = juliY +"px";
                        }
                }
                
                    if (juliWait < 0){
                        juliState = "standing";
                        juliAction = true;
                        //console.log("Finished");//
                        person.style.display = "block";
                        personMove.style.display = "none";
                        person.style.marginLeft = juliX + "px";
                        person.style.marginTop = juliY + "px";
                        clearInterval(juliInterval);
                    }
                }       
            }
            else if(juliGameSelect === "A Princess Story"){
                console.log("Going to Lake");
                person.style.display = "none";
                personMove.style.display = "";
                console.log(juliLakeX)

                if(juliX > juliLakeX){
                    juliLakeDirection = 1;
                }else{
                    juliLakeDirection = 0;
                }
                const juliLakeInterval = setInterval(juliLake, 1, person, personMove);

                function juliLake(person, personMove){
                    console.log("Running");
                    console.log(juliGameSelect === "A Princess Story")
                    if(juliGameSelect !== "A Princess Story"){
                        juliAction = true;
                        clearInterval(juliLakeInterval);    
                    }

                    if(juliY < juliLakeY){
                        
                        juliY = juliY + 1;
                        personMove.style.marginTop = juliY +"px";
                    }
                    else{

                        if(juliLakeDirection === 1){
                        if(juliX < juliLakeX){
                            person.style.display = "";
                            personMove.style.display = "none";
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = juliX +"px";
                            person.style.marginTop = juliY +"px";
                            
                        }else{
                            personMove.style.transform = "scaleX(-1)";
                            juliX = juliX - 1;
                            personMove.style.marginLeft = juliX +"px";
                            }
                        }else{
                        if(juliX > juliLakeX){
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = juliX +"px";
                            person.style.marginTop = juliY +"px";
                        }else{
                            juliX = juliX + 1;
                            personMove.style.transform = "scaleX(1)";
                            personMove.style.marginLeft = juliX +"px";
                        }
                        }
                    }

                }
            }
            else{
                juliWait = Math.floor((Math.random() * 15));
                console.log("Waiting")
                const juliIntervalAlt = setInterval(juliAltFun, 1000, person, personMove);

                function juliAltFun(person, personMove){
                    console.log(juliWait)
                    person.style.display = "block";
                    personMove.style.display = "none";
                    person.style.marginLeft = juliX + "px";
                    person.style.marginTop = juliY + "px";
                    juliWait = juliWait - 1;

                    if (juliWait < 0){
                        juliState = "moving";
                        juliAction = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 10) * 10);
                        juliWait = randomint;
                        clearInterval(juliIntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
