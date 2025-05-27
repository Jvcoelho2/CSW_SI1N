 //let cars = [" corolla "," uno", " brasilia ", " sandeiro"," ka"," gol"]
 //let text = "";
// for (let i =0; i <cars.length; i++){
 //text += "Carro numero  " + i + cars[i] +  "<br>";
// }
// document.getElementById("carros").innerHTML = text;
let cars = [" corolla "," uno", " brasilia ", " sandeiro"," ka"," gol"]
let text = "";

let x = 0;
while(x < cars.length) {
    text += "Carro numero  " + x + cars[x] + "<br>"; 
    x++;
}
alert(text)
 document.getElementById("carros").innerHTML = text; 
