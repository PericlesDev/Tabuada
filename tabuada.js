function Calcular(){
 var valor = parseInt(document.getElementById('valor').value);
 var texto = '';

 for(var i = 1; i <=10; i++){
     texto = texto + i.toString() +
      ' x ' + valor.toString() +
       ' = ' + (i*valor).toString() +
       '<br>';
/* Alternando a sigla ( * )
podemos calcular em diferentes Simbolos Matemáticos */
    }
    document.getElementById('resultado').innerHTML = texto;
}