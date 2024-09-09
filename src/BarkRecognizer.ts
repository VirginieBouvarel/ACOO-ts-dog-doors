import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  recognize(bark: string) :void {
    console.log(`   Détecteur d'aboiement: J'ai entendu un ${bark}`);
    if(this.door.getAllowedBark() === bark) {
      this.door.open();
    } else {
      console.log("Ce chien n'est pas autorisé à entrer");
    }
  }
}