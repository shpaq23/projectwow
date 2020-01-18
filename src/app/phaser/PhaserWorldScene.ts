export class PhaserWorldScene extends Phaser.Scene {

  constructor() {
    super({ key: 'WorldScene' });
  }

  create(): void {
    console.log('WorldScene Create');
  }

  preload(): void {
    console.log('WorldScene Create');
  }

  update(time: number, delta: number) {
    console.log('WorldScene Update');
    console.log('WorldScene, time', time);
    console.log('WorldScene, delta', delta);
  }
}
