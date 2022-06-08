export class Client {
    nom: string
    prenom: string

    public toString(): string {
        return "{" +
            this.prenom +
            " " +
            this.nom +
            "}";
    }
}
