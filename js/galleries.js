// Chaque ligne : ["nom-du-fichier.jpg", "Légende"]
// Les photos sont rangées dans images/<galerie>/ (galerie, nice, genova, exposition).
const GALLERIES = {
  galerie: [
    ["G1.JPEG", "La Brigue, 26 août 2026, FR"],
    ["G2.JPG", "Ahmed, La Chaise, 26 février 2025, FR"],
    ["G3.JPG", "Ahmed, La Chaise, 26 février 2025, FR"],
    ["G4.jpg", "Dignes-Les-Bains, 27 octobre 2024, FR"],
    ["G5.JPG", "Musée Gassendi à Dignes-Les-Bains, 26 octobre 2024, FR"],
    ["G6.JPEG", "Musée Gassendi à Dignes-Les-Bains, 26 octobre 2024, FR"],
    ["G7.jpg", "Sanremo, un jour en août 2024, IT"],
    ["G8.jpeg", "Ventimiglia, 31 juillet 2024, IT"],
    ["G9.jpeg", "Villefranche-sur-Mer, 8 mai 2024, FR"],
    ["G10.jpeg", "Petite citronnade ?, juin 2023, FR"],
    ["G11.jpeg", "Gourdon, novembre 2023, FR"],
    ["G12.jpg", "Prunelle, Imperia, juillet 2023, FR"],
    ["G13.jpg", "12 février 2023, Antibes, FR"],
    ["G14.jpeg", "10, 2020, FR"],
    ["G15.jpg", "Louis Vedovati, 2021, FR"],
    ["G16.jpg", "Trinquons, Nantes, 2021, FR"],
    ["G17..jpg", "En musique, mars 2023"],
    ["G18.jpg", "Estate, 2021, FR"],
    ["G19.jpg", "La carte postale de 1976, FR"],
    ["G20.jpg", "Griserie, Nantes, 2021"],
    ["G21.jpg", "Genesis, 2021"],
    ["G22.jpg", "Inder : Verbe du 1er groupe. Définition : Espérer trouver l'amour. Exemple : J'inde. 2021"],
    ["G23.jpg", "2020"],
    ["G24.jpg", "Nantes, 2021"],
    ["G25.jpg", "À table !, 2020"],
    ["G26.jpg", "L'amour d'un chat, 2020"],
    ["G27.jpg", "À  l'origine, 2020"],
    ["G28.jpg", "Tat de feraille, 2020"],
    ["G29.jpeg", "Toujours plus de bruits, 2020"],
    ["G30.jpeg", "Souvenir de vacances, 2019"],
    ["G31.jpg", "Rue, 2021"],
    ["G32.jpg", "Somptueuse, 2019"]
  ],
  nice: [
    ["N1.jpeg", ""],
    ["N2.jpeg", "Nice, 12 Avril 2024"],
    ["N3.jpg", "Buon appetito !"],
    ["N4.jpg", "Dimanche niçois"],
    ["N5.jpg", "Ahmed"],
    ["N6.jpg", "Sentier du littoral"]
  ],
  genova: [
    ["GIT1.jpg", "28 Janvier 2023, Genova, IT (1)"],
    ["GIT2.jpg", "28 Janvier 2023, Genova, IT (2)"],
    ["GIT3.jpg", "28 Janvier 2023, Genova, IT (3)"],
    ["GIT4.jpg", "28 Janvier 2023, Genova, IT (4)"],
    ["GIT5.jpg", "28 Janvier 2023, Genova, IT (5)"],
    ["GIT6.jpg", "28 Janvier 2023, Genova, IT (6)"],
    ["GIT7.jpg", "28 Janvier 2023, Genova, IT (7)"],
    ["GIT8.jpg", "28 Janvier 2023, Genova, IT (8)"],
    ["GIT9.JPEG", "28 Janvier 2023, Genova, IT (9)"]
  ],
  exposition: [
    ["PRELUDE.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE I.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE II.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE III.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE IV.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE V.jpg", "Éloge – Le Cantique des Cantiques"],
    ["NOTEDOREE.jpeg", "Éloge – Le Cantique des Cantiques"],
    ["EX1.png", "Éloge, poésie par Louis Vedovati"],
    ["EX2.jpg", "Éloge, poésie par Louis Vedovati"]
  ]
};

// Chemin d'une photo : images/<nom de la galerie>/<fichier>
function src(fichier) {
  const dossier = document.querySelector("[data-gallery]").dataset.gallery;
  return `images/${dossier}/${fichier}`;
}
