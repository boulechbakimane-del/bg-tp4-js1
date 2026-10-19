"use strict"; // Mode strict activé (vu dans le cours)

// Fonction B : Prend une moyenne (float) en paramètre et retourne true (ADMIS) ou false (AJOURNÉ) (vu dans le cours)
function B(moyenne) {
    // Condition de délibération (exemple : moyenne >= 10)
    if (moyenne >= 10.0) {
        return true;
    } else {
        return false;
    }
}

// Fonction A : Gère les données de l'ensemble "Students" et affiche le résultat via console.log (vu dans le cours)
function A() {
    // Définition des données sous forme de tableau d'objets ou de tableaux imbriqués
    // (id, nom, prenom, moyenneTP, moyenneExamen -> calcul de la moyenne générale)
    let students = [
        { id: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
        { id: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
        { id: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
    ];

    // Parcours des étudiants pour calculer la moyenne et effectuer la délibération
    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        
        // Calcul simple de la moyenne basé sur les données (ex: moyenne des deux notes)
        let moyenneGenerale = parseFloat((s.note1 + s.note2) / 2);

        // Appel de la fonction B qui retourne un booléen (vu dans le cours)
        let estAdmis = B(moyenneGenerale);

        // Affichage exact du résultat demandé dans la console
        if (estAdmis) {
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}