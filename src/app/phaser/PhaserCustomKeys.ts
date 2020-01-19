export class PhaserCustomKeys {

  public readonly W: Phaser.Input.Keyboard.Key;

  public readonly S: Phaser.Input.Keyboard.Key;

  public readonly A: Phaser.Input.Keyboard.Key;

  public readonly D: Phaser.Input.Keyboard.Key;

  constructor(phaserScene: Phaser.Scene) {
    this.W = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.S = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.A = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.D = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }
}
