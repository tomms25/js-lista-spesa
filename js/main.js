// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

let listaSpesa = ["pane", "latte", "affettati", "cereali", "farina", "pasta"];

console.log(listaSpesa.length);




// for (i = 0; i < listaSpesa.length; i++){
//     // let lista = document.getElementById("lista-spesa")
//     let oggetto = document.createElement("li");
//     document.getElementById("lista").appendChild(oggetto);
//     oggetto.innerText = (listaSpesa[i]);
    
// }


let i = 0;
while (i < listaSpesa.length){

    // copio il contenuto come nel for
    let oggetto = document.createElement("li");
    document.getElementById("lista").appendChild(oggetto);
    oggetto.innerText = (listaSpesa[i]);


    // Devo inserire l'incremento 
    i++;
}



