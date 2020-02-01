export const PHASER_CONFIG: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 1024,
  height: 640,
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
