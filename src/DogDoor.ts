export class DogDoor {
  private doorIsOpen: boolean;

  constructor() {
    this.doorIsOpen = false;
  }

  open(): void {
    console.log("La trappe s'ouvre");
    this.doorIsOpen = true;

    const doorTimer = setTimeout(() => {
      this.close();
      clearTimeout(doorTimer);
    }, 5000);
  }

  close(): void {
    console.log("La trappe se ferme");
    this.doorIsOpen = false;
  }

  isOpen(): boolean {
    return this.doorIsOpen;
  }
}