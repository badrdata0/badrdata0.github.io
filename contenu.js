// =====================================================
//  C'EST LE SEUL FICHIER À MODIFIER POUR TON CONTENU
// =====================================================

// 1) Ton profil
const PROFIL = {
  nom: "Badr M.",
  bio: "There is no spoon.",
  photo: "images/howto.jpg",   // remplace par images/photo.jpg
  liens: [
    { type: "instagram", url: "https://instagram.com/" },
    { type: "youtube",   url: "https://youtube.com/" },
    { type: "linkedin",  url: "https://linkedin.com/" },
    { type: "email",     url: "mailto:toi@exemple.com" }
  ]
};

// 2) Tes catégories (l'ordre ici = l'ordre sur la page d'accueil)
const CATEGORIES = [
  { id: "finance", titre: "Finance - Trading - Investing",
    description: "Make Money." },
  { id: "data", titre: "Data",
    description: "Read and Analyze" },
  { id: "psychology", titre: "Philosophy / Psychology",
    description: "Understand life." }
];

// 3) Tes essais. Pour en ajouter un : crée le fichier dans /essais
//    puis ajoute une ligne ici. Le tri par date est automatique.
const ESSAIS = [
  { titre: "Les intérêts composés, la 8e merveille du monde",
    date: "2026-09-20", categorie: "finance",
    resume: "Pourquoi commencer tôt compte plus que mettre beaucoup.",
    fichier: "essais/interets-composes.html" },
];
