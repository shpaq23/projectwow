import { PhaserCustomKeysManager } from '../utils/PhaserCustomKeysManager';
import { PhaserCharacter } from '../character/PhaserCharacter';

export class PhaserWorldScene extends Phaser.Scene {

  public static SCENE_ID = 'WorldScene';

  private map: Phaser.Tilemaps.Tilemap;
  private tiles: Phaser.Tilemaps.Tileset;
  private grass: Phaser.Tilemaps.StaticTilemapLayer;
  private obstacles: Phaser.Tilemaps.StaticTilemapLayer;
  private character: PhaserCharacter;
  private customKeysManager: PhaserCustomKeysManager;

  constructor() {
    super({key: PhaserWorldScene.SCENE_ID});
  }

  preload(): void {
    console.log('WorldScene Create');
    this.customKeysManager = new PhaserCustomKeysManager();
  }

  create(): void {
    console.log('WorldScene Create');
    this.map = this.make.tilemap({key: 'map'});
    this.tiles = this.map.addTilesetImage('tilesMap', 'tilesMap');
    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);
    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0);
    this.obstacles.setCollisionByExclusion([-1]);
    this.character = new PhaserCharacter(this, 100, 100, 'character', 0);
    this.customKeysManager.addMovementKeys(this);
    // this.physics.add.collider(this.character, this.obstacles);
  }

  update(time: number, delta: number) {
    this.setMovementEvents();
  }

  private setMovementEvents(): void {

    if (Phaser.Input.Keyboard.JustDown(this.customKeysManager.A)) {
      this.character.tryMoveLeft();
    } else if (Phaser.Input.Keyboard.JustDown(this.customKeysManager.D)) {
      this.character.tryMoveRight();
    } else if (Phaser.Input.Keyboard.JustDown(this.customKeysManager.W)) {
      this.character.tryMoveUp();
    } else if (Phaser.Input.Keyboard.JustDown(this.customKeysManager.S)) {

      console.log('onDown key');
      this.character.tryMoveDown();
    }

  }

  private setCamera(): void {
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.character);
    this.cameras.main.setRoundPixels(true);
  }
}
