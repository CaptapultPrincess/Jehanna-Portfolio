/*This script is mostly for the interactive box and other features*/

let X = 0;
let Y = 0;
let deighi = document.querySelector(".deighi-alt");
let deighiMove = document.querySelector(".deighi-move");
let Direction = 1;
let DirectionY = 1;
let running = false;
let State = "moving";
let Wait = 100;
let Action = true;
let LakeX = 0;
let LakeY = 100;
let gameSelect = "none";
let LakeDirecion = 1;

//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && running === false){
        running = true;
        const Loop = setInterval(Start,1 , deighi, deighiMove); 

        function Start(person, personMove){
            
        gameSelect = document.querySelector(".main-header").innerHTML;
        deighiMove.style.zIndex = Y + 500;
        deighi.style.zIndex = Y + 500;


        if(Action === true){
        console.log(Action);
            //console.log(State === "moving" && gameSelect ==="none");
            Action = false;

            
            if(State === "moving" && gameSelect !=="none"){
                //console.log("Moving");

                const Interval = setInterval(MoveFun, 50, person, personMove);
        
                function MoveFun(person, personMove){  
          
                    if (Direction === 1){
                        person.style.display = "none";
                        personMove.style.display = "";
                        personMove.style.transform = "scaleX(1)";
                        X = X + 5;
                        Wait = Wait - 1;

                        if (X > 570 ){
                        Direction = -1;
                        }else{
                        personMove.style.marginLeft = X +"px";
                        }
            
                    }
                
                    else{
                        personMove.style.transform = "scaleX(-1)";
                        X = X - 5;
                        if (X < -150 ){
                        Direction = 1;
                        }else{
                        personMove.style.marginLeft = X +"px";
                        }
                    }

                    if (DirectionY === 1){
                        Y = Y + 5;
                        if (Y > 100 ){
                        DirectionY = -1;
                        }else{
                        personMove.style.marginTop = Y +"px";
                        }
                    }else{
                        Y = Y - 5;
                        if (Y < -100 ){
                        DirectionY = 1;
                        }else{
                        personMove.style.marginTop = Y +"px";
                        }
                }
                
                    if (Wait < 0){
                        State = "standing";
                        Action = true;
                        //console.log("Finished");//
                        person.style.display = "block";
                        personMove.style.display = "none";
                        person.style.marginLeft = X + "px";
                        person.style.marginTop = Y + "px";
                        clearInterval(Interval);
                    }
                }       
            }
            else if(gameSelect === "A Princess Story"){
                console.log("Going to Lake");
                person.style.display = "none";
                personMove.style.display = "";
                console.log(LakeX)

                if(X > LakeX){
                    LakeDirection = 1;
                }else{
                    LakeDirection = 0;
                }
                const lakeInterval = setInterval(Lake, 1, person, personMove);

                function Lake(person, personMove){
                    console.log("Running");
                    console.log(gameSelect === "A Princess Story")
                    if(gameSelect !== "A Princess Story"){
                        Action = true;
                        clearInterval(lakeInterval);    
                    }

                    if(Y < LakeY){
                        
                        Y = Y + 1;
                        personMove.style.marginTop = Y +"px";
                    }
                    else{

                        if(LakeDirection === 1){
                        if(X < LakeX){
                            person.style.display = "";
                            personMove.style.display = "none";
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = X +"px";
                            person.style.marginTop = Y +"px";
                            
                        }else{
                            personMove.style.transform = "scaleX(-1)";
                            X = X - 1;
                            personMove.style.marginLeft = X +"px";
                            }
                        }else{
                        if(X > LakeX){
                            person.style.display = "block";
                            personMove.style.display = "none";
                            person.style.marginLeft = X +"px";
                            person.style.marginTop = Y +"px";
                        }else{
                            X = X + 1;
                            personMove.style.transform = "scaleX(1)";
                            personMove.style.marginLeft = X +"px";
                        }
                        }
                    }

                }
            }
            else{
                Wait = Math.floor((Math.random() * 10));
                console.log("Waiting")
                const IntervalAlt = setInterval(AltFun, 1000, person, personMove);

                function AltFun(person, personMove){
                    console.log(Wait)
                    person.style.display = "block";
                    personMove.style.display = "none";
                    person.style.marginLeft = X + "px";
                    person.style.marginTop = Y + "px";
                    Wait = Wait - 1;

                    if (Wait < 0){
                        State = "moving";
                        Action = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 5) * 10);
                        Wait = randomint;
                        /*
                        if ((Math.floor((Math.random() * 10))+ 10) < 10 ){
                            Direction = 1;
                        }else{
                            Direction = -1;
                        }
                        */



                        clearInterval(IntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
