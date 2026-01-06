const box=[];
const container = document.querySelector("#container");
let isMouseDown_box = false;
const reset_button = document.querySelector(".reset_button")
let size = 4;
const containerheight = 540;

//creating box
for (let i = 0; i < size*size; i++) {
    box[i] = document.createElement("divs");
   
    box[i].style.width = containerheight/4+"px";
    box[i].style.height = containerheight/4+"px";
    box[i].style.margin="0px";
    box[i].style.backgroundColor = "red";
   
    box[i].classList.add("box");  
   
    container.appendChild(box[i]);  
}




//Range slider
const square_num = document.querySelector("#box_size");
const Gridsize = document.querySelector("#Grid_size");
Gridsize.textContent="4x4";

square_num.addEventListener("input",()=>{

    Gridsize.textContent=square_num.value+"x"+square_num.value;
     size = Number(square_num.value);

})




//Hover Effects
for (let i = 0; i < size*size; i++) {
box[i].addEventListener("mousedown",()=>{
     isMouseDown_box = true;
         box[i].style.backgroundColor = "black";

})
}


for (let i = 0; i < size*size; i++) {
        box[i].addEventListener("mouseover",()=>{
           
                  if(isMouseDown_box){
                      box[i].style.backgroundColor = "black";
              }
                })
}


document.addEventListener("mouseup",()=>{
        isMouseDown_box=false;
})
 

//Reset Color

reset_button.addEventListener("click",()=>{

    for (let i = 0; i < size*size; i++) {
            box[i].style.backgroundColor = "blue";
    }

})









