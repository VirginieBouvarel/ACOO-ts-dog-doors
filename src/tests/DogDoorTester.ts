import { DogDoor } from "../DogDoor";
import { Remote } from "../Remote";

export class DogDoorTester {
  async main(): Promise<void> {
    const door = new DogDoor();
    const remote = new Remote(door);
    
    console.log('Fido aboie pour sortir');
    remote.pressButton();

    console.log('Fido est sorti');
    console.log('Fido a terminé');

    try {
      await new Promise<void>(resolve => setTimeout(resolve, 10000));
    } catch (error) {
        console.log(error);
    }

    console.log('Mais il est coincé dehors !');
    console.log('Fido aboie pour rentrer');
    console.log('Virginie entend Fido et prend la télécommande');
    remote.pressButton();

    console.log('Fido est rentré');
  }
}