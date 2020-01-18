export class PhaserWorldScene extends Phaser.Scene {

  private map: Phaser.Tilemaps.Tilemap;
  private tiles: Phaser.Tilemaps.Tileset;
  private grass: Phaser.Tilemaps.StaticTilemapLayer;
  private obstacles: Phaser.Tilemaps.StaticTilemapLayer;

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
  }

  preload(): void {
    console.log('WorldScene Create');
  }

  update(time: number, delta: number) {
    // console.log('WorldScene Update');
    // console.log('WorldScene, time', time);
    // console.log('WorldScene, delta', delta);
  }
}
