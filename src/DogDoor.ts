export class DogDoor {
  private doorIsOpen: boolean;

  constructor() {
    this.doorIsOpen = false;
  }

  open(): void {
    console.log("La trappe s'ouvre");
    this.doorIsOpen = true;
  }

  close(): void {
    console.log("La trappe se ferme");
    this.doorIsOpen = false;
  }

  isOpen(): boolean {
    return this.doorIsOpen;
  }
}