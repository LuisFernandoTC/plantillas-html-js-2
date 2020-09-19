//a. Manipular una clase de un elemento HTML
/*
La clase "active" en bootstrap añade el estilo de seleccion de un elemento (otro color),
<li class="list-group-item active">Cras justo odio</li>
Si l es el item de la lista
Para añadir la clase "active" a l, use: l.classList.add("active")
Para quitar la clase "active" a l, use: l.classList.remove("active")
Para consultar si l tiene la clase "active", use: l.classList.contains("active"), devuelve true o false
*/
function next() {
    var lt=document.getElementsByTagName('li')
    if (lt[0].classList.contains("active")) {
        lt[0].classList.remove('active');
        lt[1].classList.add("active");
      }
      else if (lt[1].classList.contains("active")) {
        lt[1].classList.remove('active');
        lt[2].classList.add("active");
      }
      else if (lt[2].classList.contains("active")) {
        lt[2].classList.remove('active');
        lt[3].classList.add("active");
      }
     else if (lt[3].classList.contains("active")) {
        lt[3].classList.remove('active');
        lt[4].classList.add("active");
      }
}
function prev() {
    var lt=document.getElementsByTagName('li')
    if (lt[4].classList.contains("active")) {
        lt[4].classList.remove('active');
        lt[3].classList.add("active");
      }
      else if (lt[3].classList.contains("active")) {
        lt[3].classList.remove('active');
        lt[2].classList.add("active");
      }
      else if (lt[2].classList.contains("active")) {
        lt[2].classList.remove('active');
        lt[1].classList.add("active");
      }
     else if (lt[1].classList.contains("active")) {
        lt[1].classList.remove('active');
        lt[0].classList.add("active");
      }
}
//activarColor();
//b. Manipular una clase de un elemento HTML
function slideNext() {
    const slides=document.getElementsByClassName('carousel-item');
    if (slides[0].classList.contains("active")) {
        slides[0].classList.remove('active');
        slides[1].classList.add("active");
      }else if (slides[1].classList.contains("active")) {
        slides[1].classList.remove('active');
        slides[2].classList.add("active");
      }
      else if (slides[2].classList.contains("active")) {
        slides[2].classList.remove('active');
        slides[0].classList.add("active");
      }
      console.log('Avanzando...')
}
function slidePrev() {
    const slides=document.getElementsByClassName('carousel-item');
    if (slides[2].classList.contains("active")) {
        slides[2].classList.remove('active');
        slides[1].classList.add("active");
      }else if (slides[1].classList.contains("active")) {
        slides[1].classList.remove('active');
        slides[0].classList.add("active");
      }else if (slides[0].classList.contains("active")) {
        slides[0].classList.remove('active');
        slides[1].classList.add("active");
      }
      console.log('Retorcediendo...')
}