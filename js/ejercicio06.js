const punoP = ["Carabaya","Sandia","Melgar","Azangaro","San Antonio de Putina","Lampa","San Roman","Huancane","Moho","Puno","El Collao","Chucuito","Yunguyo"];
const cuscoP = ["La Convención","Anta", "Urubamba","Calca","Paruro","Cusco","Paucartambo","Paruro","Acomayo","Quispicanchis","Canchis","Chumbivilcas","Canas","Espinar"];
const tacnaP = ["Tacna","Candarave","Jorge Basadre", "Tarata"];

//a. Añadir Elementos HTML con createElement: Options de una Lista Desplegable
const provinciasP=function(){
    let create=document.getElementById('s1');
        for (let i = 0; i < punoP.length; i++) {
            let opt=document.createElement('Option');
            create.appendChild(opt);
            opt.innerHTML=punoP[i];
        }
}
const provinciasC=function(){
    let create=document.getElementById('s1');
        for (let i = 0; i < cuscoP.length; i++) {
            let opt=document.createElement('Option');
            create.appendChild(opt);
            opt.innerHTML=cuscoP[i];
        }
}
function remove(){
    const s = document.getElementById("s1");
    while (s.length>0) {
        s.remove(s.length-1);    
    }
}
function listar(){
    remove();
    provinciasP();
}
function listar2(){
    remove();
    provinciasC();
}
//b. Mostrar la imagen que selecciono en la lista desplegable
/*
La propiedad options.selectedIndex retorna el indice de la option elegida,
Si s es el SELECT, entoces s.options.selectedIndex es el indice seleccionado;
Si el usuario eligio la primera opcion, el indice será 0.
*/
function ver() {
    const select=document.getElementById('s2');
    var imagen=document.getElementById('m1');
    select.options.selectedIndex;
    if (select.options.selectedIndex=='0') {
        imagen.src='imagen/puno/puno1.jpg';
        console.log('isla de uros')
    }else if(select.options.selectedIndex=='1'){
        imagen.src='imagen/puno/puno2.jpg';
        console.log('isla de taquile')
    }else if(select.options.selectedIndex=='2'){
        imagen.src='imagen/puno/puno3.jpg';
        console.log('isla de amantani')
    }   
}
//c. Añadir Elementos HTML con createElement: Options de una Lista Desplegable a partir de la seleccion de una options de una Lista Desplegable.
function list() {
    const select=document.getElementById('s3');
    const select2=document.getElementById('s4');
    select.options.selectedIndex;
    if (select.options.selectedIndex=='0') {
        for (let i = 0; i < punoP.length; i++) {
            let opt=document.createElement('Option');
            select2.appendChild(opt);
            opt.innerHTML=punoP[i];
        }
    }else if(select.options.selectedIndex=='1'){
        for (let i = 0; i < cuscoP.length; i++) {
            let opt=document.createElement('Option');
            select2.appendChild(opt);
            opt.innerHTML=cuscoP[i];
        }
    }else if(select.options.selectedIndex=='2'){
        for (let i = 0; i < tacnaP.length; i++) {
            let opt=document.createElement('Option');
            select2.appendChild(opt);
            opt.innerHTML=tacnaP[i];
        }
    } 
}
function remove2(){
    const s = document.getElementById("s4");
    while (s.length>0) {
        s.remove(s.length-1);    
    }
}
function listar3(){
    remove2();
    list();
}
//d. Añadir Elementos HTML con createElement: Options de una Lista Desplegable desde una lista procesada de una lista de objetos (formula1)
/*
const pilotos = formula1.map(function(item){
    return item.piloto;
});
*/
const piloto=function() {
    var elec=document.getElementById('s5');
    for (let i = 0; i < formula1.length; i++) {
        let opt=document.createElement('Option'); 
        elec.appendChild(opt);  
        opt.innerHTML=formula1[i].piloto;
    }
}
const escuderias=function () {
    var elec=document.getElementById('s5');
    for (let i = 0; i < formula1.length; i++) {
        let opt=document.createElement('Option'); 
        elec.appendChild(opt);  
        opt.innerHTML=formula1[i].escuderia;
    }
}
const nacionalidad=function () {
    var elec=document.getElementById('s5');
    for (let i = 0; i < formula1.length; i++) {
        let opt=document.createElement('Option'); 
        elec.appendChild(opt);  
        opt.innerHTML=formula1[i].nacionalidad;
    }
}
const campeones=function () {
    var elec=document.getElementById('s5');
    for (let i = 0; i < formula1.length; i++) {
        if (formula1[i].titulos>0) {
            let opt=document.createElement('Option'); 
            elec.appendChild(opt);
             opt.innerHTML=formula1[i].piloto;
        }
       
    }
}
function remove3(){
    const s = document.getElementById("s5");
    while (s.length>0) {
        s.remove(s.length-1);    
    }
}
function listForm1(btn) {
    switch (btn) {
        case 'r1':
            remove3();
            piloto();
            break;
        case 'r2':
            remove3();
            escuderias();
            break;
        case 'r3':
            remove3();
            nacionalidad();
            break;
        case 'r4':
            remove3();
            campeones();
            break;
    
        default:
            break;
    }
}