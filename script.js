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
        'age' : 23  
    },
    {
        'name' : 'Elena',
        'surname' : 'Eger',
        'age' : 22  
    },
    {
        'name' : 'Mario',
        'surname' : 'Rossi',
        'age' : 25 
    }
];
var check = false
var numNuoviStudenti = 1
var studente = {
    'name' : '',
    'surname' : '',
    'age' : ''
}

while (check === false) {
    var name = prompt('Inserisci il nome dello studente')
    checkInserimentoString(name)
    if (check === false) {
        alert('Inserisci il nome in lettere')
    } else {
        studente['name'] = name
    }
}
check = false

while (check === false) {
    var surname = prompt('Inserisci il cognome dello studente')
    checkInserimentoString(surname)
    if (check === false) {
        alert('Inserisci il cognome in lettere')
    } else {
        studente['surname'] = surname
    }
}
check = false

while (check === false) {
    var age = checkInserimentoNum(prompt('Inserisci quanti anni ha'))
    if (check === false) {
        alert('Inserisci un numero')
    } else {
        studente['age'] = age
    }
}

console.log(studente)
arrayStudents.push(studente)

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