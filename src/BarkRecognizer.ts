import { Bark } from "./Bark";
import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  recognize(bark: Bark) :void {
    console.log(`   Détecteur d'aboiement: J'ai entendu un ${bark.getSound()}`);
    const allowedBarks = this.door.getAllowedBarks();

    for (let i = 0; i < allowedBarks.length; i++) {
      const allowedBark = allowedBarks[i];
      if(allowedBark.equals(bark)) {
        this.door.open();
        return;
      }
    }
    console.log("Ce chien n'est pas autorisé à entrer");
  }
}