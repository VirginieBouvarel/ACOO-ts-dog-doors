import { DogDoor } from "./DogDoor";

export class Remote {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }
  
  pressButton(): void {
    console.log("Quelqu'un presse le bouton de la télécommande...");
    if(this.door.isOpen()) {
      this.door.close();
    } else {
      this.door.open();
    }

    const timer = setTimeout(() => {
      this.door.close();
      clearTimeout(timer);
  }, 5000);
  }
}