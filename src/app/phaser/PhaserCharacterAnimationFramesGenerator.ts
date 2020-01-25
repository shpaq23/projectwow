export class PhaserCharacterAnimationFramesGenerator {

  private readonly spritesInRow = 13;
  private readonly numberOfRows = 21;

  private readonly moveAnimationLength = 9;
  private readonly attackAnimationLength = 6;

  constructor() {}

  getMoveUpAnimationFrames(): number[] {
    const animationRow = 8;
    return this.generateFrames(this.moveAnimationLength, animationRow);
  }

  getMoveLeftAnimationFrames(): number[] {
    const animationRow = 9;
    return this.generateFrames(this.moveAnimationLength, animationRow);
  }

  getMoveDownAnimationFrames(): number[] {
    const animationRow = 10;
    return this.generateFrames(this.moveAnimationLength, animationRow);
  }

  getMoveRightAnimationFrames(): number[] {
    const animationRow = 11;
    return this.generateFrames(this.moveAnimationLength, animationRow);
  }

  getAttackUpAnimationFrames(): number[] {
    const animationRow = 12;
    return this.generateFrames(this.attackAnimationLength, animationRow);
  }

  getAttackLeftAnimationFrames(): number[] {
    const animationRow = 13;
    return this.generateFrames(this.attackAnimationLength, animationRow);
  }

  getAttackAnimationDownFrames(): number[] {
    const animationRow = 14;
    return this.generateFrames(this.attackAnimationLength, animationRow);
  }

  getAttackAnimationRight(): number[] {
    const animationRow = 15;
    return this.generateFrames(this.attackAnimationLength, animationRow);
  }

  private generateFrames(animationLength: number, animationRow: number): number[] {
    const frames: number[] = [];
    const startFrame = (animationRow * this.spritesInRow);
    for (let i = startFrame; i < (startFrame + animationLength); i++) {
      frames.push(i);
    }
    return frames;
  }

}
