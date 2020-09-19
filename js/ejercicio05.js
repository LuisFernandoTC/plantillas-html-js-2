//a. Añada la propiedad onclick a los botones X
  const onclickmost=document.getElementsByClassName('close');
  for (let i = 0; i < onclickmost.length; i++) {
      onclickmost[i].onclick=function(){
        var alert=document.getElementsByClassName('alert');
        alert[i].style.display='none';
      }
  }
//b. Añada la propiedad onclick a los botones Visitar
  const aumentar=document.getElementsByTagName('a');
  var count=1;
  aumentar[0].onclick=function(){
    var uros=document.getElementById('uros')
    uros.innerHTML='Uros:'+ (count++);
  }
  var count2=1;
  aumentar[1].onclick=function(){
      var taquile=document.getElementById('taquile')
      taquile.innerHTML='Taquile:'+ (count2++);
  }
//c. Añada etiquetas HTML - DIV desde una cadena: Alerta Bootstrap
 const create=(elec) =>{
  var create=document.getElementById('d1');
  create.innerHTML=`<div role='alert' id='a1'>
                      Este mensaje desaparecerá...al cliquear en el botón
                      <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>`;
      switch (elec) {
        case 'danger':
            create.className='alert alert-danger';
            create.onclick=function() {
              create.style.display='none';
            }
            console.log('Creando danger...')
          break;
        case 'success':
          create.className='alert alert-success';
          create.onclick=function() {
            create.style.display='none';
          } 
          console.log('Creando success...')
          break;
        case 'warning':
          create.className='alert alert-warning';
          create.onclick=function() {
            create.style.display='none';
          } 
          console.log('Creando warning...')
          break;
      }
      create.style.display='block';
}
//d. Añada etiquetas HTML - item de lista desde una cadena
  const peliculas = ["Gladiador", "Titanic","X-Men", "Avengers"];
  const musica = ["Robbie Williams", "Katy Perry","Coldplay"];
  const libros    = ["Meg", "Agua para elefantes","Oscura","Plenitud","Testamento Maya"];
const mostrarElementos= (element) =>{
  const creart=document.getElementById("t1");
  const crear = document.getElementById("t2");
    switch (element) {
      case 'libros':
                    creart.innerHTML='Libros';
                    const lElementos = libros.map(function(item){
                      return `<li class="list-group-item">${item}</li>`;
                    });
                    const cad = lElementos.join("");
                    crear.innerHTML=cad;    
        break;
      case 'peliculas':
                    creart.innerHTML='Peliculas';
                    const l1Elementos = peliculas.map(function(item){
                      return `<li class="list-group-item">${item}</li>`;
                    });
                    const cad1 = l1Elementos.join("");
                    crear.innerHTML=cad1;    
        break;
      case 'musicas':
                    creart.innerHTML='Musicas';
                    const l2Elementos = musica.map(function(item){
                      return `<li class="list-group-item">${item}</li>`;
                    });
                    const cad2 = l2Elementos.join("");
                    crear.innerHTML=cad2;    
        break;
      default:
        break;
    }
}