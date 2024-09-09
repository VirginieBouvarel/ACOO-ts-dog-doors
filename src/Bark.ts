export class Bark {
  private sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  getSound(): string {
    return this.sound;
  }

  equals(obj: {}): boolean {
    if (obj instanceof Bark) {
      const otherBark = obj as Bark;
      return otherBark.getSound().toLowerCase() === this.sound.toLowerCase();
    }
    return false;
  }
}