import { Bark } from "./Bark";

export class DogDoor {
  private doorIsOpen: boolean;
  private allowedBarks: Bark[];

  constructor() {
    this.doorIsOpen = false;
    this.allowedBarks = [];
  }

  getAllowedBarks(): Bark[] {
    return this.allowedBarks;
  }

  addAllowedBark(bark: Bark): void {
    this.allowedBarks.push(bark);
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