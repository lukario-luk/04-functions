//1 - crie uma função que exiba uma mensagem   no console

function philosophize (){
  console.log("Todos tentam realizar algo grandioso, sem reparar que a vida se compõe de coisas pequenas. De: Frank Clark")
}philosophize()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
 function evocar (name1){
  console.log(name1)
}evocar("lucas")

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function informe(name2, age, favoriteSong) {
  console.log(`I'm ${name2}, I'm ${age} years old, my birthday is coming, I'm going to be ${age +1} years old, I'm selecting some songs for a party, especially the ${favoriteSong}`)
}informe("lucas", 20, "pop music")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function favorites (fMovie, fSong){
  console.log(`my day was very nice, i went to the movies to watch ${fMovie} and the store was playing my favorite song ${fSong} `)
}favorites("Spider-man", "Experience")


//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triple (number){
  return number *3;
}
console.log(triple(111222))