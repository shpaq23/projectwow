import {PhaserCustomKeys} from './PhaserCustomKeys';

export class PhaserWorldScene extends Phaser.Scene {

  private map: Phaser.Tilemaps.Tilemap;
  private tiles: Phaser.Tilemaps.Tileset;
  private grass: Phaser.Tilemaps.StaticTilemapLayer;
  private obstacles: Phaser.Tilemaps.StaticTilemapLayer;
  private character: Phaser.Physics.Arcade.Sprite;
  private customKeys: PhaserCustomKeys;

  constructor() {
    super({ key: 'WorldScene' });
  }

  create(): void {
    console.log('WorldScene Create');
    this.map = this.make.tilemap({key: 'map'});
    this.tiles = this.map.addTilesetImage('tilesMap', 'tilesMap');
    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);
    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0);
    this.obstacles.setCollisionByExclusion([-1]);
    this.character =  this.physics.add.sprite(100, 100, 'character', 19);
    this.character.setScale(0.4);
    this.customKeys = new PhaserCustomKeys(this);


  }

  preload(): void {
    console.log('WorldScene Create');
  }

  update(time: number, delta: number) {
    this.setMovementEvents();
  }

  private setMovementEvents(): void {

    const characterBody: Phaser.Physics.Arcade.Body = this.character.body as Phaser.Physics.Arcade.Body;

    characterBody.setVelocity(0);

    if (this.customKeys.A.isDown) {
      characterBody.setVelocityX(-80);
    } else if (this.customKeys.D.isDown) {
      characterBody.setVelocityX(80);
    }

    if (this.customKeys.W.isDown) {
      characterBody.setVelocityY(-80);
    } else if (this.customKeys.S.isDown) {
      characterBody.setVelocityY(80);
    }

  }

  private setCamera(): void {
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.character);
    this.cameras.main.setRoundPixels(true);
  }
}
