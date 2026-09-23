// Ce fichier construit les pages à partir de contenu.js. Pas besoin d'y toucher.
const ICONES = {
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  youtube:'<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/><path d="M7 10v7M7 7v.01M11 17v-7m0 3a3 3 0 016 0v4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  email:'<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="currentColor"/><path d="M3 6l9 7 9-7" stroke="#fff" stroke-width="2" fill="none"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 3v11a4 4 0 11-4-4M14 3c0 3 2 5 5 5"/></svg>'
};
const echap = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dateFR = d => new Date(d + "T12:00:00").toLocaleDateString("fr-FR", {day:"numeric", month:"long", year:"numeric"});
const tries = () => [...ESSAIS].sort((a, b) => b.date.localeCompare(a.date));

function afficherProfil() {
  const liens = PROFIL.liens.map(l =>
    `<a href="${echap(l.url)}" aria-label="${echap(l.type)}" target="_blank" rel="noopener">${ICONES[l.type] || echap(l.type)}</a>`).join("");
  document.getElementById("profil").innerHTML = `
    <img src="${echap(PROFIL.photo)}" alt="Photo de ${echap(PROFIL.nom)}">
    <h1>${echap(PROFIL.nom)}</h1>
    <p>${echap(PROFIL.bio)}</p>
    <nav class="liens">${liens}</nav>`;
  document.title = PROFIL.nom;
}

function afficherAccueil() {
  afficherProfil();
  document.getElementById("categories").innerHTML = CATEGORIES.map(c => {
    const n = ESSAIS.filter(e => e.categorie === c.id).length;
    return `<a class="categorie" href="categorie.html?c=${encodeURIComponent(c.id)}">
      <img src="${echap(c.image)}" alt="">
      <div><h2>${echap(c.titre)}</h2><p>${echap(c.description)}</p>
      <small>${n} essai${n > 1 ? "s" : ""}</small></div></a>`;
  }).join("");
}

function afficherCategorie() {
  afficherProfil();
  const id = new URLSearchParams(location.search).get("c");
  const cat = CATEGORIES.find(c => c.id === id);
  const zone = document.getElementById("contenu");
  if (!cat) { zone.innerHTML = `<p class="vide">Catégorie introuvable. <a href="index.html">Retour à l'accueil</a></p>`; return; }
  document.title = cat.titre + " · " + PROFIL.nom;
  const essais = tries().filter(e => e.categorie === id);
  const liste = essais.length
    ? `<ul class="liste">${essais.map(e => `<li><a href="${echap(e.fichier)}">
        <time datetime="${e.date}">${dateFR(e.date)}</time>
        <h3>${echap(e.titre)}</h3><p>${echap(e.resume || "")}</p></a></li>`).join("")}</ul>`
    : `<p class="vide">Pas encore d'essai ici.</p>`;
  zone.innerHTML = `
    <div class="bandeau"><img src="${echap(cat.image)}" alt="">
      <a class="retour" href="index.html" aria-label="Retour à l'accueil">‹</a></div>
    <h1 class="titre-cat">${echap(cat.titre)}</h1><hr>
    <p>${echap(cat.description)}</p><hr>${liste}`;
}

// Pour les pages d'essai : ajoute l'en-tête avec ta photo et un lien retour
function afficherEssai() {
  const haut = document.getElementById("haut");
  if (haut) haut.innerHTML = `<img src="../${echap(PROFIL.photo)}" alt=""><span>${echap(PROFIL.nom)}</span>`;
}
