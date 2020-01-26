export class PhaserCharacterAnimationFramesGenerator {

  static spritesInRow = 13;
  static numberOfRows = 21;

  static moveAnimationLength = 9;
  static attackAnimationLength = 6;

  static STAND_UP_FRAME = 8 * PhaserCharacterAnimationFramesGenerator.spritesInRow;
  static STAND_LEFT_FRAME = 9 * PhaserCharacterAnimationFramesGenerator.spritesInRow;
  static STAND_DOWN_FRAME = 10 * PhaserCharacterAnimationFramesGenerator.spritesInRow;
  static STAND_RIGHT_FRAME = 11 * PhaserCharacterAnimationFramesGenerator.spritesInRow;

  constructor() {}

  getMoveUpAnimationFrames(): number[] {
    const animationRow = 8;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.moveAnimationLength, animationRow);
  }

  getMoveLeftAnimationFrames(): number[] {
    const animationRow = 9;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.moveAnimationLength, animationRow);
  }

  getMoveDownAnimationFrames(): number[] {
    const animationRow = 10;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.moveAnimationLength, animationRow);
  }

  getMoveRightAnimationFrames(): number[] {
    const animationRow = 11;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.moveAnimationLength, animationRow);
  }

  getAttackUpAnimationFrames(): number[] {
    const animationRow = 12;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.attackAnimationLength, animationRow);
  }

  getAttackLeftAnimationFrames(): number[] {
    const animationRow = 13;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.attackAnimationLength, animationRow);
  }

  getAttackDownAnimationFrames(): number[] {
    const animationRow = 14;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.attackAnimationLength, animationRow);
  }

  getAttackRightAnimation(): number[] {
    const animationRow = 15;
    return this.generateFrames(PhaserCharacterAnimationFramesGenerator.attackAnimationLength, animationRow);
  }

  private generateFrames(animationLength: number, animationRow: number): number[] {
    const frames: number[] = [];
    const startFrame = (animationRow * PhaserCharacterAnimationFramesGenerator.spritesInRow);
    for (let i = startFrame; i < (startFrame + animationLength); i++) {
      frames.push(i);
    }
    return frames;
  }

}
