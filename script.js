var utilisateurs = [
    "ouvrier",
    "paysan",
    "patron de ma PME",
    "chef d'entreprise",
    "expatrié en Suisse",
    "militaire"
];

var gentils_pluriel = [
    "les bons français",
    "les vrais français",
    "les français de souche",
    "les honnêtes français",
    "les vrais patriotes",
    "les français qui aiment leur pays"
];

var gentils_singulier = [
    "Nicolas Sarkozy",
    "Jean-François Copé",
    "Nadine Morano",
    "Alain Juppé",
    "Marine Le Pen",
    "Claude Guéant",
    "Patrick Balkany",
    "Eric Zemmour",
    "Alain Soral",
    "De Gaulle",
    "Jacques Chirac",
    "François Fillon"
];

var nous = [
    "la France qui se lève tôt",
    "la France qui bosse",
    "la vraie France",
    "la France chrétienne",
    "la France traditionelle"
];

var gentils_groupes = [
    "de l'UMP",
    "du FN",
    "du MEDEF",
    "de ma PME"
];

var mechants_pluriel = [
    "les gauchistes",
    "les bobos",
    "les gauchos",
    "les arabes",
    "les français de papiers",
    "les assistés",
    "les chômeurs",
    "les bien-pensants",
    "les musulmans",
    "les gauchos bobos"
];

var mechants_singulier = [
    "Hollande",
    "Taubira",
    "Royal",
    "Mohammed",
    "l'immigré",
    "la france qui fout rien",
    "la racaille",
    "la banlieue"
];

var mechants_groupes = [
    "du PS",
    "de la LICRA",
    "du gouvernement",
    "de la gauche"
];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function element_from_array(tableau) {
    return tableau[getRandomInt(0, tableau.length - 1)];
}

function intro1() {
    return (
        "BRAVO!!! On voit où part l'argent de " + element_from_array(nous) +
        " !! Pour aider " + element_from_array(mechants_pluriel) + " et " + element_from_array(mechants_pluriel) +
        " grâce aux idiots " + element_from_array(mechants_groupes)
    );
}

function intro2() {
    return (
        "En tant que " + element_from_array(utilisateurs) +
        ", ça me fait mal de voir ce qui arrive à " + element_from_array(gentils_singulier)
    );
}

function intro3() {
    return (
        "En tant que " + element_from_array(utilisateurs) +
        ", je n'aime pas voir à quel point on persécute " + element_from_array(gentils_pluriel)
    );
}

function intro4() {
    return (
        "Je suis " + element_from_array(utilisateurs) +
        " et la position " + element_from_array(mechants_groupes) + " me dégoute profondément"
    );
}

function intro5() {
    return (
        "Je suis " + element_from_array(utilisateurs) +
        " et je soutiens les idées " + element_from_array(gentils_groupes) + " dans cette histoire"
    );
}

function randomintro() {
    return element_from_array([intro1(), intro2(), intro3(), intro4(), intro5()]);
}

function conclusion1() {
    return (" VIVEMENT que " + element_from_array(gentils_singulier) + " vienne faire le ménage !!!!!!");
}

function conclusion2() {
    return (" " + element_from_array(gentils_singulier) + " VITE!!!");
}

function conclusion3() {
    return (" RAS LE BOL DE " + element_from_array(mechants_singulier) + " !");
}

function conclusion4() {
    return (" " + element_from_array(gentils_singulier) + " 2017!!!!!!! ON EN A BESOIN !!!");
}

function randomconclu() {
    return element_from_array([conclusion1(), conclusion2(), conclusion3(), conclusion4()]);
}


document.getElementById("commentcontent").innerHTML = randomintro() + ", " + randomconclu();
