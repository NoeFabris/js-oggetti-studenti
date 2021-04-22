// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

console.log('Es.1')
var students = {
    'name' : 'Noè',
    'surname' : 'Fabris',
    'age' : '23'
};
for (var key in students) {
    console.log(key + (' : ') + students[key]);
};


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

console.log('Es.2')
var arrayStudents = [
    {
        'name' : 'Noè',
        'surname' : 'Fabris',
        'age' : '23'  
    },
    {
        'name' : 'Elena',
        'surname' : 'Eger',
        'age' : '22'  
    },
    {
        'name' : 'Mario',
        'surname' : 'Rossi',
        'age' : '25'  
    }
];
for (let i = 0; i < arrayStudents.length; i++) {
    var obj = arrayStudents[i]
    for (var key in obj) {
        if (key === 'age') {
            break;
        }
        console.log(key + (' : ') + obj[key]);
    } 
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


console.log('Es.3')
var arrayStudents = [
    {
        'name' : 'Noè',
        'surname' : 'Fabris',
        'age' : '23'  
    },
    {
        'name' : 'Elena',
        'surname' : 'Eger',
        'age' : '22'  
    },
    {
        'name' : 'Mario',
        'surname' : 'Rossi',
        'age' : '25'  
    }
];
arrayStudents.push({
    'name' : prompt('Inserisci il nome dello studente'),
    'surname' : prompt('Inserisci il cognome dello studente'),
    'age' : prompt('Inserisci quanti anni ha')
 })


console.log(arrayStudents)
for (let i = 0; i < arrayStudents.length; i++) {
    var obj = arrayStudents[i]
    for (var key in obj) {
        if (key === 'age') {
            break;
        }
        console.log(key + (' : ') + obj[key]);
    } 
}