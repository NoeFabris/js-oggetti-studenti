// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.


var studente = {
    'nome' : 'Noè',
    'cognome' : 'Fabris',
    'eta' : '23'
}
for (var key in studente) {
    console.log(key + (' : ') + studente[key])
}


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.