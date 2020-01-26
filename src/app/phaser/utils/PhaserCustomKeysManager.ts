export class PhaserCustomKeysManager {

  public W: Phaser.Input.Keyboard.Key;

  public S: Phaser.Input.Keyboard.Key;

  public A: Phaser.Input.Keyboard.Key;

  public D: Phaser.Input.Keyboard.Key;

  public SPACE: Phaser.Input.Keyboard.Key;

  addMovementKeys(phaserScene: Phaser.Scene) {
    this.W = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.S = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.A = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.D = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.SPACE = phaserScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }
}
