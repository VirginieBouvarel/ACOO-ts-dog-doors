import { BarkRecognizer } from "../BarkRecognizer";
import { DogDoor } from "../DogDoor";

export class DogDoorTester {
  async main(): Promise<void> {
    const door = new DogDoor();
    const recognizer = new BarkRecognizer(door);
    
    console.log('Fido aboie pour sortir');
    recognizer.recognize("Wouaf");

    console.log('Fido est sorti');
    console.log('Fido a terminé');

    try {
      await new Promise<void>(resolve => setTimeout(resolve, 10000));
    } catch (error) {
        console.log(error);
    }

    console.log('Mais il est coincé dehors !');
    console.log('Fido aboie pour rentrer');
    recognizer.recognize("Wouaf");

    console.log('Fido est rentré');
  }
}