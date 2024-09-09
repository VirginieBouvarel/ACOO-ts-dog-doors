import { DogDoor } from "../DogDoor";
import { Remote } from "../Remote";

export class DogDoorTester {
  main(): void {
    const door = new DogDoor();
    const remote = new Remote(door);
    
    console.log('Fido aboie pour sortir');
    remote.pressButton();

    console.log('Fido est sorti');
    remote.pressButton();

    console.log('Fido a terminé');
    remote.pressButton();

    console.log('Fido est rentré');
    remote.pressButton();
  }
}