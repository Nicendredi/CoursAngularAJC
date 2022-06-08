export class Personne {
    id: number;
    nom: string;
    prenom: string;
    age: number;

    public toString(): string {
        return "{" +
            this.id + ", " +
            this.nom + " " +
            "}";
    }

}
