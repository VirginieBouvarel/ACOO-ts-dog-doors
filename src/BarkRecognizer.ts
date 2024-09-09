import { Bark } from "./Bark";
import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  recognize(bark: Bark) :void {
    console.log(`   Détecteur d'aboiement: J'ai entendu un ${bark.getSound()}`);
    if(this.door.getAllowedBark()!.equals(bark)) {
      this.door.open();
    } else {
      console.log("Ce chien n'est pas autorisé à entrer");
    }
  }
}