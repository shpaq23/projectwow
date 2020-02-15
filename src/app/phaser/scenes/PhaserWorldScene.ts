import { PhaserCustomKeysManager } from '../utils/PhaserCustomKeysManager';
import { PhaserCharacter } from '../character/PhaserCharacter';
import { PhaserEnemy } from '../enemy/PhaserEnemy';
export class PhaserWorldScene extends Phaser.Scene {

  public static SCENE_ID = 'WorldScene';

  private map: Phaser.Tilemaps.Tilemap;
  private tiles: Phaser.Tilemaps.Tileset;
  private grass: Phaser.Tilemaps.StaticTilemapLayer;
  private obstacles: Phaser.Tilemaps.StaticTilemapLayer;
  private character: PhaserCharacter;
  private enemy: PhaserEnemy;
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
    this.character = new PhaserCharacter(this);
    this.enemy = new PhaserEnemy(this);
    this.character.setEnemies([this.enemy]);
    this.enemy.setCharacter(this.character);
    this.customKeysManager.addMovementKeys(this);
    this.physics.add.collider(this.character, this.obstacles, () => this.character.stopMove());
    this.setCamera();
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
      this.character.tryMoveDown();
    } else if (Phaser.Input.Keyboard.JustDown(this.customKeysManager.SPACE)) {
      this.character.tryAttack();
    }

    if (this.enemy.isCharacterInRange()) {
      console.log('character in range');
    }

  }

  private setCamera(): void {
    this.cameras.main.setBounds(0, 0, 640, 1472);
    this.cameras.main.startFollow(this.character);
  }
}
