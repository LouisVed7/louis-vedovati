// Les photos sont pour l'instant chargées depuis Wix (static.wixstatic.com).
// Quand tu les auras téléchargées, mets-les dans /images et remplace la fonction src() ci-dessous.
// Chaque entrée : [identifiant Wix, extension, légende]
const GALLERIES = {
  galerie: [
    ["db09fe7c83eb43d1a7b41071a7e2868d","jpg",""],
    ["864d76995e2940f6840ec832316e8da4","jpg",""],
    ["80d427e2313b410cbd55bffc3e331267","jpg",""],
    ["d3478dd41d4b4c8189ec2882ff8958c0","jpg",""],
    ["8eb401d217484357946627cd570e0314","png",""],
    ["990b2490d7cd40c580ef41b13dc309cc","jpeg","Ventimiglia, 31 Juillet 2024"],
    ["83b5203261e14a47a937178764dc590c","jpeg",""],
    ["0778c9a420de4f82a6ff87bd854c852b","jpeg","Petite citronnade ?, Juin 2023"],
    ["980edf60be9e4803a82692efe9749c26","jpeg","Gourdon - Novembre 2023"],
    ["b4c89ed6dd1141b4a08c5aa97c50b18b","jpg","Prunelle"],
    ["4be4e268cf264b5191c6f338c17b26ec","jpg","12 Février 2023, Antibes, FR"],
    ["98167ab432d74b9697b599ed3b013a44","jpg","Sans titre"],
    ["7b8f6212c6904210aacda7b781806fb8","jpg","Main devant l'objectif : ne me regardez pas !"],
    ["21ca2efc9ebc41b690277c9e9974cb3b","jpg","Rue"],
    ["10f0c1ddd573404186cb89227a16e578","jpg","À l'origine"],
    ["042b0caf87fa4a2787bdc513a1ada02a","jpg","Pile de livres ou tas de livres"],
    ["19b3ce7222d74b489f49e9a58ece0ae8","jpg","inder"],
    ["9d82e1512f5d49edae22cb06343aa429","jpg","Genesis"],
    ["ee81018b3f7748208e60e96f1b03bf42","jpg","La carte postale de 1976"],
    ["112bc345dce943358a229c834a34f2a6","jpg","Estate"],
    ["71cd6e38b9224881a07b64b585f015a1","jpg","Griserie"],
    ["d6240eb94d1a44788965dbe4fd6fcb7f","jpg","Trinquons"],
    ["f4fdcbc554da471d84a6f5efd20dd6e8","jpg",""],
    ["76173cf4b49f4bd085578c7fd7f2133c","jpg","Toujours plus de bruits"],
    ["28e0545bc12949da975103ac2e95d6d2","png","Tas de ferraille"]
  ],
  nice: [
    ["ba9173b1aa6c41c886ad0fff888b1f1f","jpeg",""],
    ["a9205f24f2c14d4d803c836246780a19","jpeg","Nice, 12 Avril 2024"],
    ["a07a9fcdcf1c40aeb218f9b77463a165","jpg","Buon appetito !"],
    ["fd249d86470a45e880895c150af09ef6","jpg","Dimanche niçois"],
    ["6a8f8aa9a7f44130939a5c906cd20c4c","jpg","Ahmed"],
    ["9ff7fa843e8e4507ae16966d72c77f20","jpg","Sentier du littoral"]
  ],
  genova: [
    ["dc65e93cc5674c6c90e70e608c69a24b","jpg","28 Janvier 2023, Genova, IT (1)"],
    ["8e843dff1fe34126b7c5510d403221e2","jpg","28 Janvier 2023, Genova, IT (2)"],
    ["9b56a8362c5e4fa19d1c56fabd00f8fc","jpg","28 Janvier 2023, Genova, IT (3)"],
    ["cfb5b2721c4e4d5083056074b0ffc7d2","jpg","28 Janvier 2023, Genova, IT (4)"],
    ["1a674a5bd1b24406980ee46d2027a241","jpg","28 Janvier 2023, Genova, IT (5)"],
    ["c3a87760c1d84af3bddf962aedbbe684","jpg","28 Janvier 2023, Genova, IT (6)"],
    ["69a67db656e34a11b912144490824e68","jpg","28 Janvier 2023, Genova, IT (7)"],
    ["a89b0fb0965b490ba8f079d38ffd0316","jpg","28 Janvier 2023, Genova, IT (8)"],
    ["0c3a838bc9ca454e901a4d9c367c41d4","jpg","28 Janvier 2023, Genova, IT (9)"]
  ],
  exposition: [
    ["695a9c3266db44cb9ad27b733183147b","jpg","Éloge – Le Cantique des Cantiques"],
    ["ad6e2b1c273d4c92a2f49bcb09f58e6a","jpg","Éloge – Le Cantique des Cantiques"],
    ["7d078e6e10bd46a2855e1d3eaa3ebd2d","jpg","Éloge – Le Cantique des Cantiques"],
    ["ac98ded103e9432e806701c81556cce1","jpg","Éloge – Le Cantique des Cantiques"],
    ["77a454561579494d96b1a8f9bcb38fa3","jpg","Éloge – Le Cantique des Cantiques"],
    ["6f35442852b24985b41f8a11f872d035","jpg","Éloge – Le Cantique des Cantiques"],
    ["80d297804769436088fffdcf03c47c23","jpeg","Éloge – Le Cantique des Cantiques"],
    ["ad5b3e50c12d42f5aad44066c1205a3e","png","Éloge – affiche"],
    ["8556db356f7f4e5f938feb1905878248","jpg","Éloge – affiche"]
  ]
};

// Adresse d'une image Wix à une largeur maximale donnée
function src(id, ext, size) {
  return `https://static.wixstatic.com/media/6b32c2_${id}~mv2.${ext}/v1/fit/w_${size},h_${size},q_90/photo.${ext}`;
}
