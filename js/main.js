// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

let listaSpesa = [],

let object = false

let listObject = prompt ("Inserisci elementi da aggiungere alla lista")

for (let i = 0;   ; i++){
    console.log(i)
    if (listObject == listaSpesa [i]){
        object = true;
    }

}

// Da riportare in pagina

if (object == true){
    document.getElementById ("element").innerHTML = listObject
} 
  
