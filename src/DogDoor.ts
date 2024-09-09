import { Bark } from "./Bark";

export class DogDoor {
  private doorIsOpen: boolean;
  private allowedBark: Bark | undefined;

  constructor() {
    this.doorIsOpen = false;
  }

  getAllowedBark(): Bark | undefined {
    return this.allowedBark;
  }

  setAllowedBark(bark: Bark): void {
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