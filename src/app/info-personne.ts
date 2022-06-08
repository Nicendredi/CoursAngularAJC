import { Adresse } from "./adresse"
import { Personne } from "./personne"

export class InfoPersonne {
    secu: number
    p: Personne
    a: Adresse
    info: string

    getInformation() {
        this.info = this.secu + " " + this.p.nom + " " + this.a.cp
    }
}
