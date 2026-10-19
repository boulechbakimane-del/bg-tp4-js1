"use strict"; // Mode strict activé (vu dans le cours)

// Fonction f1 : Affiche un tableau simple de chaînes de caractères (vu dans le cours)
function f1() {
    let tabEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    // Affichage des éléments du tableau un par un ou du tableau global selon la console demandée
    console.log(tabEtudiants[0]);
    console.log(tabEtudiants[1]);
    console.log(tabEtudiants[2]);
}

// Fonction f2 : Affiche un objet littéral représentant un étudiant (vu dans le cours)
function f2() {
    let unEtudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };
    console.log(unEtudiant);
}

// Fonction f3 : Affiche un tableau d'objets étudiants formaté (vu dans le cours)
function f3() {
    let tableauObjetsEtudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle pour afficher chaque étudiant sous le format "nom-prenom-age" (vu dans le cours)
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        let e = tableauObjetsEtudiants[i];
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}