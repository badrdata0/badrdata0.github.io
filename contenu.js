// =====================================================
//  C'EST LE SEUL FICHIER À MODIFIER POUR TON CONTENU
// =====================================================

// 1) Ton profil
const PROFIL = {
  nom: "Badr M.",
  bio: "There is no spoon.",
  photo: "images/photo.svg",   // remplace par images/photo.jpg
  liens: [
    { type: "instagram", url: "https://instagram.com/" },
    { type: "youtube",   url: "https://youtube.com/" },
    { type: "linkedin",  url: "https://linkedin.com/" },
    { type: "email",     url: "mailto:toi@exemple.com" }
  ]
};

// 2) Tes catégories (l'ordre ici = l'ordre sur la page d'accueil)
const CATEGORIES = [
  { id: "finance", titre: "Finance / Trading / Investing",
    description: "Argent, marchés et investissement, expliqués sans jargon." },
  { id: "data", titre: "Data",
    description: "Données, statistiques et machine learning, avec des exemples concrets." },
  { id: "psychologie", titre: "Psychologie / Philosophie",
    description: "Pourquoi on pense et on agit comme on le fait." }
];

// 3) Tes essais. Pour en ajouter un : crée le fichier dans /essais
//    puis ajoute une ligne ici. Le tri par date est automatique.
const ESSAIS = [
  { titre: "Les intérêts composés, la 8e merveille du monde",
    date: "2026-09-20", categorie: "finance",
    resume: "Pourquoi commencer tôt compte plus que mettre beaucoup.",
    fichier: "essais/interets-composes.html" },
  { titre: "Qu'est-ce qu'un réseau de neurones ?",
    date: "2026-09-12", categorie: "data",
    resume: "Une explication avec des boutons de volume.",
    fichier: "essais/reseau-de-neurones.html" },
  { titre: "Pourquoi on remet tout à demain",
    date: "2026-08-30", categorie: "psychologie",
    resume: "La procrastination n'est pas de la paresse.",
    fichier: "essais/procrastination.html" },
  { titre: "Épargner avant de dépenser",
    date: "2026-08-02", categorie: "finance",
    resume: "La règle simple qui change tout.",
    fichier: "essais/epargner.html" }
];
