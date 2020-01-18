export class PhaserBootScene extends Phaser.Scene {

  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    console.log('BootScene Create');
    this.scene.start('WorldScene');
  }

  preload(): void {
    this.load.image('tiles', 'assets/phaser/map.png');
    console.log('BootScene Preload');
  }

  update(time: number, delta: number): void {
    console.log('BootScene Update');
    console.log('BootScene, time', time);
    console.log('BootScene, delta', delta);
  }
}
