// Liste des boss
const bosses = [{
        name: "Sauron",
        hp: 100,
        attack: 20
    },
    {
        name: "Chronos",
        hp: 120,
        attack: 25
    },
    {
        name: "Lilith",
        hp: 150,
        attack: 30
    }
];

// Liste des énigmes
const énigmes = [{
        question: "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?",
        réponse: "le silence"
    },
    {
        question: "Je suis d'eau, je suis d'air, et je suis d'électricité. Qui suis-je ?",
        réponse: "l'éclair"
    },
    {
        question: "Quel est l'indice du premier 'i' de cette question ?",
        réponse: "10"
    }
];

// Classe représentant le guerrier
class Warrior {
    // Constructeur et autres méthodes...

    defense() {
        console.log(`${this.name} se défend et réduit les dégâts subis de moitié.`);
        // Vérification de l'efficacité de la défense
        if (Math.random() < 0.5) {
            // La défense a été efficace, on enlève 50% des dégâts subis
            this.hp -= this.attack / 2;
        } else {
            // La défense n'a pas été efficace, on enlève les dégâts subis
            this.hp -= this.attack;
        }
    }
}


// Classe représentant le mage
class Mage {
    constructor(name, hp, attack, mana) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.mana = mana;
    }

    attack() {
        if (this.mana >= 2) {
            // Le mage a assez de mana pour attaquer
            console.log(`${this.name} attaque le boss avec une boule de feu pour ${this.attack} points de dégâts.`);
            this.mana -= 2;
        } else {
            console.log(`${this.name} n'a plus assez de mana pour attaquer et passe son tour.`);
            this.mana += 7;
        }
    }

    defend() {
        console.log(`${this.name} se met en position de défense.`);
    }
}

// Classe représentant l'archer
class Archer {
    constructor(name, hp, attack, arrows) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.arrows = arrows;
    }

    attack() {
        if (this.arrows >= 2) {
            // L'archer a assez de flèches pour attaquer
            console.log(`${this.name} tire une flèche sur le boss pour ${this.attack} points de dégâts.`);
            this.arrows -= 2;
        } else {
            console.log(`${this.name} n'a plus assez de flèches pour attaquer et passe son tour.`);
            this.arrows += 1;
        }
    }
}
    // defend() {
    //         console.

    // }
            // Classe représentant le boss
            class Boss {
                constructor(name, hp, attack) {
                    this.name = name;
                    this.hp = hp;
                    this.attack = attack;
                }

                attack(hero) {
                    console.log(`Le boss attaque ${hero.name} pour ${this.attack} points de dégâts.`);
                    hero.hp -= this.attack;
                    console.log(`${hero.name} a maintenant ${hero.hp} points de vie.`);
                }

                attaque() {
                    // Code de l'attaque du boss
                    if (this.hp <= this.maxHp * 0.2) {
                        // Le boss a moins de 20% de ses points de vie, il pose une énigme à l'utilisateur
                        console.log("Le boss pose une énigme à l'utilisateur :");
                        // Choix aléatoire d'une énigme
                        const énigme = énigmes[Math.floor(Math.random() * énigmes.length)];
                        console.log(énigme.question);
                        // Trois essais pour trouver la réponse
                        for (let i = 0; i < 3; i++) {
                            const réponse = prompt("Quelle est la réponse ?");
                            if (réponse === énigme.réponse) {
                                console.log("Bonne réponse ! Le boss est vaincu.");
                                this.hp = 0;
                                break;
                            } else {
                                console.log("Mauvaise réponse, essai suivant.");
                            }
                        }
                        console.log("Vous avez échoué, vous êtes morts.");
                    }
                }
            }

            // Choix aléatoire d'un boss parmi les trois disponibles
            const bossIndex = Math.floor(Math.random() * 3);
            const boss = bosses[boss.Boss];

            // Demande de nom pour chaque héros
            const warriorName = prompt("Choisissez le nom de votre guerrier :");
            const mageName = prompt("Choisissez le nom de votre mage :");
            const archerName = prompt("Choisissez le nom de votre archer :");

            // Attribution des points de vie et d'attaque aux héros
            let totalPoints = 100; // Nombre total de points disponibles

            while (totalPoints > 0) {
                console.log(`Il vous reste ${totalPoints} points à distribuer.`);
                const warriorPoints = parseInt(prompt("Combien de points souhaitez-vous attribuer à votre guerrier ?"));
                totalPoints -= warriorPoints;
                if (totalPoints < 0) {
                    console.log("Vous n'avez plus as")
                }
            }

                            // Création des héros avec les points de vie et d'attaque attribués par l'utilisateur
                            const warrior = new Warrior(warriorName, warriorPoints, 10);
                            const mage = new Mage(mageName, totalPoints, 8, 7);
                            const archer = new Archer(archerName, totalPoints, 12, 8);

                            // Demande de posture de départ aux héros
                            const warriorPosture = prompt("Quelle posture souhaitez-vous adopter pour votre guerrier ? (attaque/défense/normal)");
                            const magePosture = prompt("Quelle posture souhaitez-vous adopter pour votre mage ? (attaque/défense/normal)");
                            const archerPosture = prompt("Quelle posture souhaitez-vous adopter pour votre archer ? (attaque/défense/normal)");

                            // Boucle de combat
                            while (boss.hp > 0 && warrior.hp > 0 && mage.hp > 0 && archer.hp > 0) {
                                // Les héros attaquent
                                warrior.attack();
                                mage.attack();
                                archer.attack();

                                // Mise à jour de la posture des héros
                                switch (warriorPosture) {
                                    case "attaque":
                                        warrior.attack();
                                        break;
                                    case "défense":
                                        warrior.defend();
                                        break;
                                }
                                switch (magePosture) {
                                    case "attaque":
                                        mage.attack();
                                        break;
                                    case "défense":
                                        mage.defend();
                                        break;
                                }
                                switch (archerPosture) {
                                    case "attaque":
                                        archer.attack();
                                        break;
                                    case "défense":


                                        // Mise à jour de la posture du boss
                                        boss.attaque();

                                        // Le boss attaque au hasard un héros
                                        const heroIndex = Math.floor(Math.random() * 3);
                                        const hero = [warrior, mage, archer][heroIndex];
                                        boss.attack(hero);

                                        // Fin du combat
                                        if (boss.hp <= 0) {
                                            console.log("Le boss a été vaincu !");
                                        } else if (warrior.hp <= 0 && mage.hp <= 0 && archer.hp <= 0) {
                                            console.log("Tous vos héros sont morts, vous avez perdu !");
                                        }
                                    }
                                }