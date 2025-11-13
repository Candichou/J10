// =============================================
// 🧩 Exercice 01 – Pokedex Explorer
// Fichier : J09/01_pokedex/script.js
// =============================================

// 🧠 Objectif : explorer et analyser les données du Pokédex en JavaScript pur
// ---------------------------------------------------------------
// Étapes :
// 1. Charger les données JSON
// 2. Manipuler les tableaux et objets
// 3. Écrire des fonctions d’analyse et de recherche
// ---------------------------------------------------------------

// 💾 Étape 1 : Charger le fichier JSON
// Si tu es dans un environnement Node.js, tu peux utiliser fs :
import fs from "fs";

let pokedex;
// Essaie d’abord de lire et parser le fichier local pokedex.json
try {
  const data = fs.readFileSync("01_pokedex/pokedex.json", "utf8");
  pokedex = JSON.parse(data);
  console.log("✅ Fichier chargé avec succès !");
} catch (err) {
  console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  process.exit(1);
}

// Vérifie que la structure est bien celle attendue
//console.log("Nombre de Pokémon :", pokedex.pokemon.length);
console.log("Premier Pokémon :", pokedex.pokemon[0].name);

// ---------------------------------------------------------------
// ✨ Étape 2 : Fonctions de base à compléter
// ---------------------------------------------------------------

/**
 * Retourne le nombre total de Pokémon dans le Pokédex
 */

function countPokemon() {
  const allPokemon = pokedex.pokemon.length;
  console.log(allPokemon);
}
countPokemon();

/**
 * Retourne un tableau des Pokémon pesant plus de 10 kg
 */
function heavyPokemon() {
  let tableau = [];
  //parcours le tableau et avc parseFloat tu peux prendre le poids en valeur et non en string.
  for (let i = 0; i < pokedex.pokemon.length; i++) {
    //let weightvalue = parseFloat(pokedex.pokemon[i].weight);
    if (parseFloat(pokedex.pokemon[i].weight) > 10);
    {
      tableau.push(pokedex.pokemon[i].name);
    }
  }
  console.log(tableau);
}
// TODO : filtrer selon le champ "weight" (ex: "6.9 kg" -> penser à parseFloat)
heavyPokemon();

/**
 * Retourne la liste des Pokémon triés par poids (croissant)
 */
function sortByWeight() {
  // ? = if
  // : = else
  //condition pour ordre croissant
  pokedex.pokemon.sort((a, b) => (a.weight > b.weight ? 1 : -1));
  console.log(pokedex.pokemon);
  // TODO : trier le tableau pokedex.pokemon par poids
}
sortByWeight();
/**
 * Retourne les évolutions d’un Pokémon donné (s’il en a)
 */
function getEvolutions(name) {
  // TODO : chercher le Pokémon, vérifier la clé "next_evolution"
  const arrayPokemon = [];
  for (let i = 0; i < pokedex.pokemon.length; i++) {
    if (pokedex.pokemon[i].name === name) {
      for (let j = 0; j < pokedex.pokemon[i].next_evolution.length; j++) {
        arrayPokemon.push(pokedex.pokemon[i].next_evolution[j].name);
      }
      console.log(arrayPokemon);
    }
  }
}

getEvolutions("Bulbasaur");
getEvolutions("Pikachu");

/**
 * Retourne un objet complet représentant le Pokémon recherché
 */
function searchPokemon(name) {
  // On récupère le tableau de Pokémon
  const pokemons = pokedex.pokemon;

  // On cherche le Pokémon avec une boucle simple
  //let pokemonTrouve = null;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name === name) {
      pokemonTrouve = pokemons[i];
    } else if (pokemons[i].name === null) {
      console.log("Pokémon introuvable");
      return null;
    } else {
    }
    // --- Affichage simple ---
  }
  console.log("Nom :", pokemonTrouve.name);

  // Types
  for (let i = 0; i < pokemonTrouve.type.length; i++) {
    console.log("Type :", pokemonTrouve.type[i]);
  }

  console.log("Taille :", pokemonTrouve.height);
  console.log("Poids :", pokemonTrouve.weight);

  // Évolutions
  if (pokemonTrouve.next_evolution) {
    for (let i = 0; i < pokemonTrouve.next_evolution.length; i++) {
      console.log("Évolutions :", pokemonTrouve.next_evolution[i].name);
    }
  } else {
    console.log("Aucune");
  }
  // Faiblesses
  for (let i = 0; i < pokemonTrouve.weaknesses.length; i++) {
    console.log("Faiblesses :", pokemonTrouve.weaknesses[i]);
  }

  return pokemonTrouve; // pas obligatoire mais utile
}
/*   const recherchePokemon = [];

  for (let i = 0; i < pokedex.pokemon.length; i++) 
  {
    if (pokedex.pokemon[i].name === name) 
      console.log(); 
  }  */

// TODO : trouver le Pokémon, retourner ses infos principales

searchPokemon("Nidorina");
// ---------------------------------------------------------------
// 🔍 Tests rapides (tu peux commenter ou adapter ces lignes)
// ---------------------------------------------------------------

// console.log(countPokemon());
// console.log(heavyPokemon().slice(0, 5));
//console.log(getEvolutions("Bulbasaur"));
//console.log(searchPokemon("Pikachu"));
