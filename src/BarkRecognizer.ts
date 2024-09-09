import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  recognize(bark: string) :void {
    console.log(`   Détecteur d'aboiement: J'ai entendu un ${bark}`);
    this.door.open();
  }
}