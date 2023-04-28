function cambio (){
    document.getElementById('textoPredeterminado').textContent = '¡Hola Mundo!';
}
const color = ()=>{
    let col = ['#ff0000', '#00C569', '#00ff00', '#00C59F', '#0000ff', '#ff3333', '#ffff00', '#ff6600', '#FFC500', '#A43E00'];
    let random = Math.floor(Math.random() * col.length);
    const randomColor = col[random];
    document.getElementById('cajaTexto').style.backgroundColor = randomColor;
}
document.getElementById('clic').onclick = function (){
    alert('¡Haz hecho clic!');
}
function cambiarEstilo() {
    const cajaTexto = document.getElementById('cajaTexto');
    if (cajaTexto.style.display === 'none') {
        cajaTexto.style.display = 'block';
        document.getElementById('boton').textContent = 'Ocultar';
    } else {
        cajaTexto.style.display = 'none';
      document.getElementById('boton').textContent = 'Mostrar';
    }
}
  
  
  
  