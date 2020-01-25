import { PhaserCustomKeys } from './PhaserCustomKeys';
import { PhaserAnimations } from './PhaserAnimations';

export class PhaserWorldScene extends Phaser.Scene {

  private map: Phaser.Tilemaps.Tilemap;
  private tiles: Phaser.Tilemaps.Tileset;
  private grass: Phaser.Tilemaps.StaticTilemapLayer;
  private obstacles: Phaser.Tilemaps.StaticTilemapLayer;
  private character: Phaser.Physics.Arcade.Sprite;
  private customKeys: PhaserCustomKeys;
  private animations: PhaserAnimations;

  constructor() {
    super({key: 'WorldScene'});
  }

  create(): void {
    console.log('WorldScene Create');
    this.map = this.make.tilemap({key: 'map'});
    this.tiles = this.map.addTilesetImage('tilesMap', 'tilesMap');
    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);
    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0);
    this.obstacles.setCollisionByExclusion([-1]);
    this.character = this.physics.add.sprite(100, 100, 'character', 0);
    this.customKeys = new PhaserCustomKeys(this);
    this.animations = new PhaserAnimations(this.anims);
    this.animations.createCharacterMoveAnimations();
    // this.physics.add.collider(this.character, this.obstacles);
  }

  preload(): void {
    console.log('WorldScene Create');
  }

  update(time: number, delta: number) {
    this.setMovementEvents();
    this.setMovementAnimations();
  }

  private setMovementEvents(): void {

    const characterBody: Phaser.Physics.Arcade.Body = this.character.body as Phaser.Physics.Arcade.Body;

    characterBody.setVelocity(0);

    if (this.customKeys.A.isDown) {
      characterBody.setVelocityX(-64);
    } else if (this.customKeys.D.isDown) {
      characterBody.setVelocityX(64);
    }

    if (this.customKeys.W.isDown) {
      characterBody.setVelocityY(-64);
    } else if (this.customKeys.S.isDown) {
      characterBody.setVelocityY(64);
    }

  }

  private setMovementAnimations(): void {
    const leftButtonDown = this.customKeys.activePointer.leftButtonDown();
    if (this.customKeys.A.isDown) {
      this.character.anims.play('moveLeft', true);
      if (leftButtonDown) {
      }
    } else if (this.customKeys.D.isDown) {
      this.character.anims.play('moveRight', true);
    } else if (this.customKeys.S.isDown) {
      this.character.anims.play('moveDown', true);
    } else if (this.customKeys.W.isDown) {
      this.character.anims.play('moveUp', true);
    } else {
      this.character.anims.stop();
    }
  }

  private setCamera(): void {
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.character);
    this.cameras.main.setRoundPixels(true);
  }
}
