export const PHASER_CONFIG: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 480,
  zoom: 1.3,
  backgroundColor: '#FFF',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0}
    }
  },
  render: {
    pixelArt: true
  }
};
