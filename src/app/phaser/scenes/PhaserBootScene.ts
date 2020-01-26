export class PhaserBootScene extends Phaser.Scene {

  public static SCENE_ID = 'BootScene';

  constructor() {
    super({ key: PhaserBootScene.SCENE_ID });
  }

  create(): void {
    console.log('BootScene Create');
    this.scene.start('WorldScene');
  }

  preload(): void {
    this.load.image('tilesMap', 'assets/phaser/tilesMap.png');

    this.load.tilemapTiledJSON('map', 'assets/phaser/worldmap.json');

    this.load.spritesheet('character', 'assets/phaser/character.png', { frameWidth: 64, frameHeight: 64 });

    console.log('BootScene Preload');
  }

  update(time: number, delta: number): void {
    // console.log('BootScene Update');
    // console.log('BootScene, time', time);
    // console.log('BootScene, delta', delta);
  }
}
