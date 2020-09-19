
//Obtener un array con la lista de los pilotos
 const pilotos = formula1.map(item=>{
    return item.piloto;
}); 
/*
Dividir el array pilotos en 3 sub-arrays
*/
const pilotosLI07 = pilotos.slice(0,7);
const pilotosLI714 = pilotos.slice(7,14);
const pilotosLI1420 = pilotos.slice(14,20); 
var conlist=document.getElementById('f1');
var count=0;
function update() {
    if (count===0) {
        const lElementos = pilotosLI07.map(function(item){
            return `<li class="list-group-item">${item}</li>`;
          });
       const cad = lElementos.join("");
                    conlist.innerHTML=cad;
        count=1;
    } else if (count===1) {
        const lElementos = pilotosLI714.map(function(item){
            return `<li class="list-group-item">${item}</li>`;
          });
        const cad = lElementos.join("");
                    conlist.innerHTML=cad;
        count=2;
    }else if (count===2) {
        const lElementos = pilotosLI1420.map(function(item){
            return `<li class="list-group-item">${item}</li>`;
          });
        const cad = lElementos.join("");
                    conlist.innerHTML=cad;
        count=0;
    }
    select()
}
var fotos=['imagen/f1/44.jpg','imagen/f1/4.jpg','imagen/f1/5.jpg','imagen/f1/7.jpg', 'imagen/f1/8.jpg', 'imagen/f1/16.jpg', 'imagen/f1/18.jpg',
'imagen/f1/27.jpg', 'imagen/f1/20.jpg', 'imagen/f1/23.jpg', 'imagen/f1/3.jpg', 'imagen/f1/36.jpg','imagen/f1/27.jpg','imagen/f1/31.jpg',
'imagen/f1/63.jpg', 'imagen/f1/33.jpg', 'imagen/f1/55.jpg', 'imagen/f1/77.jpg', 'imagen/f1/99.jpg', 'imagen/f1/10.jpg']
const select=function(){
  var lt=document.getElementById('f1').children;
  lt[0].classList.add("active");
  console.log(lt)
  if (lt[0].classList.contains("active")) {
    most(0)
  }
     for (let i = 0; i < pilotos.length; i++) {
        lt[i].onclick=function(){
          if (!lt[i].classList.contains("active")) {
          var a=i-1;
            lt[a].classList.remove('active');
            lt[i].classList.add("active");
            most(i);
          }
        }
    }  
}
var fotos=['imagen/f1/44.jpg','imagen/f1/4.jpg','imagen/f1/5.jpg','imagen/f1/7.jpg', 'imagen/f1/8.jpg', 'imagen/f1/16.jpg', 'imagen/f1/18.jpg',
'imagen/f1/27.jpg', 'imagen/f1/20.jpg', 'imagen/f1/23.jpg', 'imagen/f1/3.jpg', 'imagen/f1/36.jpg','imagen/f1/27.jpg','imagen/f1/31.jpg',
'imagen/f1/63.jpg', 'imagen/f1/33.jpg', 'imagen/f1/55.jpg', 'imagen/f1/77.jpg', 'imagen/f1/99.jpg', 'imagen/f1/10.jpg']
function most(a) {
  const lis=document.getElementsByClassName('list');
  const name=document.getElementsByTagName('h5');
  const foto=document.getElementsByTagName('img');
    for (let i = 0; i < formula1.length; i++) {
        foto[0].src=fotos[a];
        name[0].innerHTML=`${this.formula1[a].piloto}`;
        lis[0].innerHTML=`Nacionalidad: ${this.formula1[a].nacionalidad}`;
        lis[1].innerHTML=`Escuderia: ${this.formula1[a].escuderia}`;
        lis[2].innerHTML=`Titulos: ${this.formula1[a].titulos}`;
    }
}

