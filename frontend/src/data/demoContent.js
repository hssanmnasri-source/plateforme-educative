// 📁 Demo Quiz Data
// This is demo data for React Hooks quiz - will be stored in Firestore

export const demoReactQuiz = {
    title: "Quiz React & Hooks",
    description: "Évaluez vos connaissances sur React et les Hooks",
    difficulty: "intermediate",
    courseId: "demo-react-course",
    order: 1,
    questions: [
        // Beginner Level
        {
            id: "q1",
            question: "Quel langage est principalement utilisé pour définir la structure et le contenu d'une page web ?",
            options: ["CSS", "JavaScript", "HTML", "Python"],
            correctAnswer: 2,
            explanation: "HTML (HyperText Markup Language) est le langage standard pour créer la structure des pages web."
        },
        {
            id: "q2",
            question: "Que signifie l'acronyme DOM dans le contexte du développement web ?",
            options: ["Document Object Model", "Data Order Manager", "Design Object Mapping", "Direct Output Method"],
            correctAnswer: 0,
            explanation: "Le DOM (Document Object Model) est une interface de programmation qui représente la structure d'un document HTML/XML."
        },
        {
            id: "q3",
            question: "Dans la programmation, une variable est utilisée pour...",
            options: ["Définir le style d'un élément", "Stocker temporairement une valeur", "Créer une fonction", "Connecter une base de données"],
            correctAnswer: 1,
            explanation: "Une variable permet de stocker et manipuler des données dans un programme."
        },
        {
            id: "q4",
            question: "Dans React, comment appelle-t-on le composant qui ne fait que recevoir des données et n'a pas son propre état interne ?",
            options: ["Composant de classe", "Composant fonctionnel (ou stateless)", "Composant parent", "Composant d'état"],
            correctAnswer: 1,
            explanation: "Un composant fonctionnel sans état (stateless) reçoit des props mais ne gère pas son propre state."
        },
        {
            id: "q5",
            question: "Laquelle de ces méthodes sert à ajouter un élément à la fin d'un tableau (Array) en JavaScript ?",
            options: [".get()", ".insert()", ".pop()", ".push()"],
            correctAnswer: 3,
            explanation: "La méthode .push() ajoute un ou plusieurs éléments à la fin d'un tableau."
        },
        // Intermediate Level
        {
            id: "q6",
            question: "Quel est le rôle principal du Hook useEffect en React ?",
            options: [
                "Gérer l'état local",
                "Exécuter des effets secondaires (requêtes API, abonnements) après le rendu",
                "Créer des références",
                "Optimiser le rendu du composant"
            ],
            correctAnswer: 1,
            explanation: "useEffect permet d'exécuter du code après le rendu du composant, comme des appels API ou des abonnements."
        },
        {
            id: "q7",
            question: "Que représente le tableau de dépendances passé comme deuxième argument à useEffect ?",
            options: [
                "La liste des composants à mettre à jour",
                "Les valeurs que l'effet doit surveiller pour se ré-exécuter",
                "Les données initiales du composant",
                "Les props que le composant ne doit pas utiliser"
            ],
            correctAnswer: 1,
            explanation: "Le tableau de dépendances indique à useEffect quand se ré-exécuter - seulement quand ces valeurs changent."
        },
        {
            id: "q8",
            question: "En développement front-end, que signifie l'acronyme API ?",
            options: [
                "Application Process Interface",
                "Asynchronous Programming Instruction",
                "Application Programming Interface",
                "Advanced Protocol Integration"
            ],
            correctAnswer: 2,
            explanation: "API (Application Programming Interface) définit comment différents logiciels communiquent entre eux."
        },
        {
            id: "q9",
            question: "Qu'est-ce que le concept de 'Lifting State Up' en React ?",
            options: [
                "Le déplacement de l'état d'un enfant vers son parent commun",
                "L'utilisation de Hooks à la place de classes",
                "Le déploiement de l'application sur un serveur",
                "L'utilisation du contexte global"
            ],
            correctAnswer: 0,
            explanation: "Lifting State Up consiste à déplacer l'état vers un composant parent commun pour le partager entre composants enfants."
        },
        {
            id: "q10",
            question: "Quelle propriété CSS est utilisée pour rendre un élément cliquable sans qu'il ne réagisse aux événements de la souris ou du toucher ?",
            options: ["visibility: hidden;", "cursor: none;", "display: none;", "pointer-events: none;"],
            correctAnswer: 3,
            explanation: "pointer-events: none désactive toutes les interactions de la souris sur un élément."
        },
        // Advanced Level
        {
            id: "q11",
            question: "Pourquoi utiliserait-on React.memo sur un composant fonctionnel ?",
            options: [
                "Pour créer un état global",
                "Pour optimiser les composants qui ne doivent pas se re-rendre si leurs props n'ont pas changé",
                "Pour forcer un re-rendu",
                "Pour gérer des effets asynchrones complexes"
            ],
            correctAnswer: 1,
            explanation: "React.memo est une HOC qui mémorise le composant et évite les re-rendus inutiles quand les props n'ont pas changé."
        },
        {
            id: "q12",
            question: "Quel est le rôle principal de useCallback ?",
            options: [
                "Mémoriser le résultat d'une fonction coûteuse",
                "Mémoriser la fonction elle-même (prévenir sa recréation inutile)",
                "Exécuter un rappel après le montage",
                "Gérer les transitions d'état asynchrones"
            ],
            correctAnswer: 1,
            explanation: "useCallback mémorise une fonction pour éviter qu'elle soit recréée à chaque rendu, utile pour optimiser les performances."
        },
        {
            id: "q13",
            question: "Qu'est-ce que le Tree Shaking dans le contexte du bundling JavaScript (Webpack, Rollup) ?",
            options: [
                "La réduction de la taille des images",
                "L'optimisation des structures de données arborescentes",
                "L'élimination du code mort ou inutilisé dans le bundle final",
                "Le chargement progressif des composants"
            ],
            correctAnswer: 2,
            explanation: "Tree Shaking analyse et supprime le code JavaScript non utilisé pour réduire la taille du bundle final."
        },
        {
            id: "q14",
            question: "Quel problème le Hook useReducer est-il le mieux adapté à résoudre par rapport à useState ?",
            options: [
                "La gestion des formulaires",
                "La gestion d'une logique d'état complexe qui dépend de l'état précédent",
                "La gestion des références DOM",
                "La création d'un état global simple"
            ],
            correctAnswer: 1,
            explanation: "useReducer est idéal pour gérer un état complexe avec plusieurs sous-valeurs ou quand le prochain état dépend du précédent."
        },
        {
            id: "q15",
            question: "Dans le contexte de l'API de navigation (fetch), quel statut HTTP indique qu'une ressource a été créée avec succès sur le serveur ?",
            options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
            correctAnswer: 1,
            explanation: "Le code de statut HTTP 201 Created indique qu'une nouvelle ressource a été créée avec succès."
        }
    ]
};

export const demoReactExercise = {
    title: "Exercice Progressif: To-Do List React",
    description: "Construisez une application de gestion de tâches en 3 étapes progressives",
    courseId: "demo-react-course",
    order: 1,
    levels: [
        {
            level: 0,
            title: "Affichage Statique",
            description: `Créez un composant TodoList qui affiche une liste de tâches pré-définies.

Objectifs:
- Créez un composant fonctionnel TodoList
- Définissez un tableau de 3 tâches (strings): ['Acheter lait', 'Coder React', 'Faire sport']
- Utilisez map() pour afficher chaque tâche dans un <li>
- Ajoutez les éléments dans une <ul>`,
            starterCode: `import React from 'react';

function TodoList() {
  // Définissez votre tableau de tâches ici
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      {/* Ajoutez votre liste ici */}
    </div>
  );
}

export default TodoList;`,
            solution: `import React from 'react';

function TodoList() {
  const taches = ['Acheter lait', 'Coder React', 'Faire sport'];
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
            hints: [
                "Utilisez un tableau pour stocker les tâches",
                "La méthode .map() transforme chaque élément du tableau",
                "N'oubliez pas la prop 'key' pour chaque <li>"
            ]
        },
        {
            level: 1,
            title: "Ajout de l'État (useState)",
            description: `Ajoutez la fonctionnalité d'ajout de nouvelles tâches.

Objectifs:
- Utilisez useState pour gérer le tableau de tâches
- Ajoutez un champ <input> et un bouton "Ajouter"
- Utilisez un deuxième useState pour la valeur de l'input
- Implémentez la fonction d'ajout qui met à jour le state`,
            starterCode: `import React, { useState } from 'react';

function TodoList() {
  const [taches, setTaches] = useState(['Acheter lait', 'Coder React', 'Faire sport']);
  // Ajoutez un state pour la nouvelle tâche
  
  const ajouterTache = () => {
    // Implémentez la logique d'ajout
  };
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      
      {/* Ajoutez input et bouton ici */}
      
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
            solution: `import React, { useState } from 'react';

function TodoList() {
  const [taches, setTaches] = useState(['Acheter lait', 'Coder React', 'Faire sport']);
  const [nouvelleTache, setNouvelleTache] = useState('');
  
  const ajouterTache = () => {
    if (nouvelleTache.trim()) {
      setTaches([...taches, nouvelleTache]);
      setNouvelleTache('');
    }
  };
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      
      <div>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>
      
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
            hints: [
                "Utilisez le spread operator [...taches, nouvelleTache] pour ajouter",
                "N'oubliez pas de vider l'input après l'ajout",
                "Vérifiez que l'input n'est pas vide avec .trim()"
            ]
        },
        {
            level: 2,
            title: "Suppression et Styles",
            description: `Ajoutez la suppression de tâches et un style conditionnel.

Objectifs:
- Ajoutez un bouton "X" à côté de chaque tâche
- Implémentez la fonction de suppression avec .filter()
- Ajoutez un style (texte barré) si la tâche contient "Fait"`,
            starterCode: `import React, { useState } from 'react';

function TodoList() {
  const [taches, setTaches] = useState(['Acheter lait', 'Coder React', 'Faire sport']);
  const [nouvelleTache, setNouvelleTache] = useState('');
  
  const ajouterTache = () => {
    if (nouvelleTache.trim()) {
      setTaches([...taches, nouvelleTache]);
      setNouvelleTache('');
    }
  };
  
  const supprimerTache = (index) => {
    // Implémentez la suppression
  };
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      
      <div>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>
      
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>
            {tache}
            {/* Ajoutez le bouton supprimer et le style conditionnel */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
            solution: `import React, { useState } from 'react';

function TodoList() {
  const [taches, setTaches] = useState(['Acheter lait', 'Coder React', 'Faire sport']);
  const [nouvelleTache, setNouvelleTache] = useState('');
  
  const ajouterTache = () => {
    if (nouvelleTache.trim()) {
      setTaches([...taches, nouvelleTache]);
      setNouvelleTache('');
    }
  };
  
  const supprimerTache = (index) => {
    setTaches(taches.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      
      <div>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>
      
      <ul>
        {taches.map((tache, index) => (
          <li 
            key={index}
            style={{ 
              textDecoration: tache.includes('Fait') ? 'line-through' : 'none' 
            }}
          >
            {tache}
            <button onClick={() => supprimerTache(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
            hints: [
                "Utilisez .filter() pour créer un nouveau tableau sans l'élément supprimé",
                "Le style conditionnel peut utiliser l'opérateur ternaire",
                "La méthode .includes() vérifie si une string contient un texte"
            ]
        }
    ]
};
