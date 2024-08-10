// mis frases
var _CONTENT = [ 
    "NECESITAS AYUDA...",
    "CONTACTAME"
];


var _PART = 0;


var _PART_INDEX = 0;


var _INTERVAL_VAL;


var _ELEMENT = document.querySelector("#text-container");


var _CURSOR = document.querySelector("#cursor");


function Type() { 
   
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX++;

    
    if (texto === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 100);
        }, 3000);
    }
}


function Delete() {
    
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX--;

    
    if (texto === '') {
        clearInterval(_INTERVAL_VAL);

        
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;
        
        _PART_INDEX = 0;

        
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}


_INTERVAL_VAL = setInterval(Type, 150);



function mostrar(i){
    
    let botones = document.querySelectorAll("nav button");
    botones[0].className = "";
    botones[1].className = "";
    botones[2].className = "";
    botones[i].className = "selected";

    if(i==0){
        document.getElementById("proyectos").style.display="block";
        document.getElementById("marcas").style.display="none";
        document.getElementById("descripcion").style.display="none";
    }
    if(i==1){
        document.getElementById("proyectos").style.display="none";
        document.getElementById("marcas").style.display="block";
        document.getElementById("descripcion").style.display="none";
    }
    if(i==2){
        document.getElementById("proyectos").style.display="none";
        document.getElementById("marcas").style.display="none";
        document.getElementById("descripcion").style.display="block";
    }
}

const navbar = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});