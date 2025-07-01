/*This script is mostly for the interactive box and other features*/

let deighiX = 0;
let deighiY = 0;
let deighi = document.querySelector(".deighi-alt");
let deighiMove = document.querySelector(".deighi-move");
let deighiDirection = 1;
let deighiDirectionY = 1;
let running = false;
let deighiState = "none";
let deighiWait = 100;
let deighiAction = true;
let deighiLakeX = 0;
let deighiLakeY = 100;
let gameSelect = "none";
let deighiLakeDirecion = 1;


let juliX = 0;
let juliY = 0;
let juli = document.querySelector(".juli-alt");
let juliMove = document.querySelector(".juli-move");
let juliDirection = 1;
let juliDirectionY = 1;
let juliState = "none";
let juliWait = 100;
let juliAction = true;
let juliLakeX = 0;
let juliLakeY = 0;
let juliLakeDirection = 1;


//When user scrolls, start
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && running === false){
        running = true;
        deighiState = "moving";
        const deighiLoop = setInterval(deighiStart,1);
        function deighiStart(){

        gameSelect = document.querySelector(".main-header").innerHTML;
        if(deighiAction === true){
            console.log(deighiState === "moving" && gameSelect ==="none");
            deighiAction = false;

            
            if(deighiState === "moving" && gameSelect !=="none"){
                console.log("Moving");
                const deighiInterval = setInterval(deighiMoveFun, 50);
        
                function deighiMoveFun(){  
                    console.log("Hello!")          
                    if (deighiDirection === 1){
                        deighi.style.display = "none";
                        deighiMove.style.display = "";
                        deighiMove.style.transform = "scaleX(1)";
                        deighiX = deighiX + 5;
                        deighiWait = deighiWait - 1;
                        //console.log(deighiWait);

                        if (deighiX > 570 ){
                        deighiDirection = -1;
                        }else{
                        deighiMove.style.marginLeft = deighiX +"px";
                        }
            
                    }
                
                    else{
                        deighiMove.style.transform = "scaleX(-1)";
                        deighiX = deighiX - 5;
                        //console.log(deighiX > 500);

                        if (deighiX < -150 ){
                        deighiDirection = 1;
                        }else{
                        deighiMove.style.marginLeft = deighiX +"px";
                        }
                    }

                    if (deighiDirectionY === 1){
                        deighiY = deighiY + 5;
                        //console.log(deighiWait);
                        if (deighiY > 100 ){
                        deighiDirectionY = -1;
                        }else{
                        deighiMove.style.marginTop = deighiY +"px";
                        }
                    }else{
                        deighiY = deighiY - 5;
                        //console.log(deighiWait);
                        if (deighiY < -100 ){
                        deighiDirectionY = 1;
                        }else{
                        deighiMove.style.marginTop = deighiY +"px";
                        }
                }
                
                    if (deighiWait < 0){
                        deighiState = "standing";
                        deighiAction = true;
                        //console.log("Finished");//
                        deighi.style.display = "block";
                        deighiMove.style.display = "none";
                        deighi.style.marginLeft = deighiX + "px";
                        deighi.style.marginTop = deighiY + "px";
                        clearInterval(deighiInterval);
                    }
                }       
            }
            else if(gameSelect === "A Princess Story"){
                console.log("Going to Lake");
                deighi.style.display = "none";
                deighiMove.style.display = "";
                console.log(deighiLakeX)

                if(deighiX > deighiLakeX){
                    deighiLakeDirection = 1;
                }else{
                    deighiLakeDirection = 0;
                }
                const lakeInterval = setInterval(deighiLake, 1);

                function deighiLake(){
                    console.log("Running");
                    console.log(gameSelect === "A Princess Story")
                    if(gameSelect !== "A Princess Story"){
                        deighiAction = true;
                        clearInterval(lakeInterval);    
                    }

                    if(deighiY < deighiLakeY){
                        
                        deighiY = deighiY + 1;
                        deighiMove.style.marginTop = deighiY +"px";
                    }
                    else{

                        if(deighiLakeDirection === 1){
                        if(deighiX < deighiLakeX){
                            deighi.style.display = "";
                            deighiMove.style.display = "none";
                            deighi.style.display = "block";
                            deighiMove.style.display = "none";
                            deighi.style.marginLeft = deighiX +"px";
                            deighi.style.marginTop = deighiY +"px";
                            
                        }else{
                            deighiMove.style.transform = "scaleX(-1)";
                            deighiX = deighiX - 1;
                            deighiMove.style.marginLeft = deighiX +"px";
                            }
                        }else{
                        if(deighiX > deighiLakeX){
                            deighi.style.display = "block";
                            deighiMove.style.display = "none";
                            deighi.style.marginLeft = deighiX +"px";
                            deighi.style.marginTop = deighiY +"px";
                        }else{
                            deighiX = deighiX + 1;
                            deighiMove.style.transform = "scaleX(1)";
                            deighiMove.style.marginLeft = deighiX +"px";
                        }
                        }
                    }

                }
            }
            else{
                Math.floor((Math.random() * 10));
                console.log("Waiting")
                const deighiIntervalAlt = setInterval(deighiAltFun, 1000);

                function deighiAltFun(){
                    deighi.style.display = "block";
                    deighiMove.style.display = "none";
                    deighi.style.marginLeft = deighiX + "px";
                    deighi.style.marginTop = deighiY + "px";
                    deighiWait = deighiWait - 1;
                    //console.log(deighiWait);

                    if (deighiWait < 0){
                        deighiState = "moving";
                        deighiAction = true;
                        let randomint = ((Math.floor((Math.random() * 10))+ 5) * 10);
                        deighiWait = 50;
                        clearInterval(deighiIntervalAlt);
                    }
                }
            }
        
        }
    }        
}});
