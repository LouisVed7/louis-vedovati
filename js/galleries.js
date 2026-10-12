// Chaque ligne : ["nom-du-fichier.jpg", "Légende"]
// Les photos sont rangées dans images/<galerie>/ (galerie, nice, genova, exposition).
const GALLERIES = {
  galerie: [
    ["G1.JPEG", ""],
    ["G2.JPG", ""],
    ["G3.JPG", ""],
    ["G4.jpg", ""],
    ["G5.JPG", ""],
    ["G6.JPEG", "Ventimiglia, 31 Juillet 2024"],
    ["G7.jpg", ""],
    ["G8.jpeg", "Petite citronnade ?, Juin 2023"],
    ["G9.jpeg", "Gourdon - Novembre 2023"],
    ["G10.jpeg", "Prunelle"],
    ["G11.jpeg", "12 Février 2023, Antibes, FR"],
    ["G12.jpg", "Sans titre"],
    ["G13.jpg", "Main devant l'objectif : ne me regardez pas !"],
    ["G14.jpeg", "Rue"],
    ["G15.jpg", "À l'origine"],
    ["G16.jpg", "Pile de livres ou tas de livres"],
    ["G17.jpg", "inder"],
    ["G18.jpg", "Genesis"],
    ["G19.jpg", "La carte postale de 1976"],
    ["G20.jpg", "Estate"],
    ["G21.jpg", "Griserie"],
    ["G22.jpg", "Trinquons"],
    ["G23.jpg", ""],
    ["G24.jpg", "Toujours plus de bruits"],
    ["G25.jpg", "Tas de ferraille"]
    ["G26.jpg", ""],
    ["G27.jpg", ""],
    ["G28.jpg", ""],
    ["G29.jpeg", ""],
    ["G30.jpeg", ""],
    ["G31.jpg", ""],
    ["G32.jpg", ""],
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
    ["GIT4.tiff", "28 Janvier 2023, Genova, IT (4)"],
    ["GIT5.jpg", "28 Janvier 2023, Genova, IT (5)"],
    ["GIT6.jpg", "28 Janvier 2023, Genova, IT (6)"],
    ["GIT7.jpg", "28 Janvier 2023, Genova, IT (7)"],
    ["GIT8.jpg", "28 Janvier 2023, Genova, IT (8)"],
    ["GIT9.JPEG", "28 Janvier 2023, Genova, IT (9)"]
  ],
  exposition: [
    ["PRÉLUDE (Cantique IV).jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE I.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE II.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE III.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE IV.jpg", "Éloge – Le Cantique des Cantiques"],
    ["CANTIQUE V.jpg", "Éloge – Le Cantique des Cantiques"],
    ["NOTE DO RÉ (Cantique III).JPEG", "Éloge – Le Cantique des Cantiques"],
    ["EX1.png", "Éloge, poésie par Louis Vedovati"],
    ["EX2.jpg", "Éloge, poésie par Louis Vedovati"]
  ]
};

// Chemin d'une photo : images/<nom de la galerie>/<fichier>
function src(fichier) {
  const dossier = document.querySelector("[data-gallery]").dataset.gallery;
  return `images/${dossier}/${fichier}`;
}
