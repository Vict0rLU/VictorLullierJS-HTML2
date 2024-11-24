class combattant {
    constructor(nom, health, attaque, precision) {
        this.nom = nom;
        this.health = health;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        const chance = Math.random();

        if (chance < this.precision) {
            console.log(`${this.nom} a touché ${adversaire.nom} !`);
            adversaire.health -= this.attaque;
            console.log(`${adversaire.nom} perd ${this.attaque} points de vie. Il lui reste : ${adversaire.health}`);
        } else {
            console.log(`${this.nom} a raté son attaque !`);
        }
    }
}

const combattant1 = new combattant("Gladiateur", 100, 20, 0.7);
const combattant2 = new combattant("Lion", 200, 40, 0.2);

while (combattant1.health > 0 && combattant2.health > 0) {
    combattant1.attaquer(combattant2);
    if (combattant2.health <= 0) {
        console.log(`${combattant2.nom} est vaincu`);
        break;
    }

    combattant2.attaquer(combattant1);
    if (combattant1.health <= 0) {
        console.log(`${combattant1.nom} est vaincu`);
        break;
    }
}