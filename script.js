
// //ESERCIZI IN JS


// // ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeTitle(){
    document.querySelector('#title').innerHTML='Negozio di arrampicata'}
 console.log(changeTitle()) 
 
 // // ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

 function changeColorPage() {
    document.querySelector('body').style.backgroundColor = 'lightblue'

}

console.log(changeColorPage())
// // ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress(){
    document.querySelector('#address').innerHTML='via Gregorio Ottavo 5, 45332, Roma'
}

console.log(changeAddress())


// // ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClass(){
    
    let links= document.querySelectorAll('a')

    for(i=0;i<links.length;i++){

    links[i].classList.add('link')}
}

addClass()





// // ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della 
// tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function changeClass(){
    
    let img= document.querySelectorAll('.table-cell img')

    for(i=0;i<img.length;i++){

        

    img[i].classList.toggle('imgHidden')}
}

changeClass()



// // ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto 
// in uno differente, ogni volta che viene invocata


function randomColor(){
    const prezzi= document.querySelectorAll('#fourth-row p')
    for(i=0;i<prezzi.length;i++){
        prezzi[i]
    }
}

