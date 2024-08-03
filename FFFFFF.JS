// <!-- Manipulation des tableaux

// 1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
//  2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
// Sans utiliser les methodes javascript :
// 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
// 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min -->

// function pour remplir un tableau
function remplissezletableau(){
    return prompt('').split(',').slice(0,5).map(Number);
};

let tab1= remplissezletableau('Remplissez le tableau séparés par des virgules');

console.log(tab1);
let tab2=remplissezletableau('Remplissez le tableau 2');
tab2.table;
console.log(tab2);
let tab3 =tab1.filter(num=>!tab2.includes(num));
console.log(tab3)
let tab4 =tab2.filter(num=>!tab1.includes(num));
console.log(tab4);
// function pour trier notre tab1

function trierletableau(table) {
    // boucle exterieure pour le nombre de passage necessaire
    for(let b=0; b <table.length - 1; b++) { 
    // Boucle intérieure pour comparer et échanger les éléments adjacents
    for(let i=0; i <table.length - 1 -b; i++) {
         // Si l'élément courant est plus grand que le suivant, on les échange
         if(table[i] > table [i + 1]){
            let tamp= table[i];
            table[i]=table[i + 1];
            table[i+1]=tamp;
         }
    }
    }
    // Retourne le tableau trié
  return table;
}
/*
Le spread operator, représenté par ..., est utilisé pour "décomposer" un tableau ou un objet. Lorsqu'il est utilisé sur un tableau, il crée une nouvelle copie de ce tableau en décomposant chaque élément et en les plaçant dans un nouveau tableau.
 */
// trier le tab1

// Appeler la fonction de tri pour tab1
let tab1Trie = trierletableau([...tab1]); // Utilisation du spread operator pour ne pas modifier l'original
console.log('Tab1 après tri:', tab1Trie);

// function pour maximum et minnimum
function  max() {
  return tab1.reduce((acc,val)=>{
    return val>acc? val:acc;
  },tab1[0]);
  
};

function  mini() {
  return tab1.reduce((acc,val)=>{
    return val<acc? val:acc;
  },tab1[0]);
  
};
console.log(`La valeur maximale est ${max()} et la valeur minimale est ${mini()}`);
