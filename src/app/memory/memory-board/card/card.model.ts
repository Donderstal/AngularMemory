export class CardModel { 
    public id: number;
    public imagePath: string;
    public flipped: boolean;
    public guessed: boolean

    constructor(id: number, imagePath: string, flipped: boolean, guessed: boolean) {
        this.id = id
        this.imagePath = imagePath
        this.flipped = flipped
        this.guessed = guessed
    }
  
 }
