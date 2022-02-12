let stockLechugas = 150;
let stockRuculas = 180;
let stockAlbahacas = 40;
let stockTomates = 80;

let mostrarStockLechugas = document.getElementById("stockLechugas");
let mostrarStockRuculas = document.getElementById("stockRuculas");
let mostrarStockAlbahacas = document.getElementById("stockAlbahacas");
let mostrarStockTomates = document.getElementById("stockTomates");

mostrarStockLechugas.innerText = stockLechugas;
mostrarStockRuculas.innerText = stockRuculas;
mostrarStockAlbahacas.innerText = stockAlbahacas;
mostrarStockTomates.innerText = stockTomates;


const modificarStockLechugas = () =>{
    let inputValue = parseInt(document.getElementById("modificarStockLechugas").value);
    if (inputValue){
        stockLechugas += inputValue;
        document.getElementById("stockLechugas").innerHTML = stockLechugas; 
    }
  }

const modificarStockRuculas = () =>{
    let inputValue = parseInt(document.getElementById("modificarStockRuculas").value);
    if (inputValue){
       stockRuculas += inputValue;
       document.getElementById("stockRuculas").innerHTML = stockRuculas;
    }
  }

const modificarStockAlbahacas = () =>{
    let inputValue = parseInt(document.getElementById("modificarStockAlbahacas").value);
    if (inputValue){
        stockAlbahacas += inputValue;
        document.getElementById("stockAlbahacas").innerHTML = stockAlbahacas;
    }
  }

const modificarStockTomates = () =>{
    let inputValue = parseInt(document.getElementById("modificarStockTomates").value);
    if (inputValue){ 
        stockTomates += inputValue;
        document.getElementById("stockTomates").innerHTML = stockTomates;
    } 
  }