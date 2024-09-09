import { Bark } from "../Bark";
import { BarkRecognizer } from "../BarkRecognizer";
import { DogDoor } from "../DogDoor";

export class DogDoorTester {
  async main(): Promise<void> {
    const door = new DogDoor();
    const recognizer = new BarkRecognizer(door);

    door.addAllowedBark(new Bark('Wouaf'));
    door.addAllowedBark(new Bark('Wouff'));
    door.addAllowedBark(new Bark('Wouh'));
    door.addAllowedBark(new Bark('Wouuuuuf'));

    console.log('Fido aboie pour sortir');
    recognizer.recognize(new Bark('Wouh'));
    console.log('Fido est sorti');

    try {
      await new Promise<void>(resolve => setTimeout(resolve, 10000));
    } catch (error) {
        console.log(error);
    }
    console.log('Un autre petit chien aboie pour rentrer');
    recognizer.recognize(new Bark("Yip"));

    try {
      await new Promise<void>(resolve => setTimeout(resolve, 10000));
    } catch (error) {
        console.log(error);
    }
    console.log('Fido a terminé');
    console.log('Mais il est coincé dehors !');
    console.log('Fido aboie pour rentrer');
    recognizer.recognize(new Bark('Wouaf'));
    console.log('Fido est rentré');
  }
}