
export class CreateModel{
    name: string;
    mastery: string;
    Fort: number;
    Chak: number;
    int: number;
    str: number;
    agi: number;
    weapon: string;
    creationDate: string;
    updateDate: string;

    constructor(name: string, mastery: string, Fort: number, Chak: number, int: number, str: number, agi: number, weapon: string, creationDate: string, updateDate: string){
        this.name = name;
        this.mastery = mastery;
        this.Fort = Fort;
        this.Chak = Chak;
        this.int = int;
        this.str = str;
        this.agi = agi;
        this.weapon = weapon;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }

    

}