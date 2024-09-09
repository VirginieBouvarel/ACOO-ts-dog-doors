export class DogDoor {
  private doorIsOpen: boolean;
  private allowedBark: string | undefined;

  constructor() {
    this.doorIsOpen = false;
    this.allowedBark = undefined;
  }

  getAllowedBark(): string | undefined {
    return this.allowedBark;
  }

  setAllowedBark(bark: string): void {
    this.allowedBark = bark;
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