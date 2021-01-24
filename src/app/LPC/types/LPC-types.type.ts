import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCBeltEnum } from 'src/app/LPC/enums/LPC-belt.enum';
import { LPCBootsEnum } from 'src/app/LPC/enums/LPC-boots.enum';
import { LPCChestEnum } from 'src/app/LPC/enums/LPC-chest.enum';
import { LPCEarsEnum } from 'src/app/LPC/enums/LPC-ears.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCHandsEnum } from 'src/app/LPC/enums/LPC-hands.enum';
import { LPCHeadEnum } from 'src/app/LPC/enums/LPC-head.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCRaceEnum } from 'src/app/LPC/enums/LPC-race.enum';
import { LPCShouldersEnum } from 'src/app/LPC/enums/LPC-shoulders.enum';
import { LPCWeaponEnum } from 'src/app/LPC/enums/LPC-weapon.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';

export type LPCRace = LPCRaceEnum | LPCMaleRaceEnum;

export type LPCEars = LPCEarsEnum;

export type LPCEyes = LPCEyesEnum;

export type LPCHair = LPCFemaleHairEnum | LPCMaleHairEnum;

export type LPCHairColor = LPCHairColorEnum;

export type LPCBoots = LPCBootsEnum;

export type LPCLegs = LPCLegsEnum;

export type LPCBelt = LPCBeltEnum;

export type LPCChest = LPCChestEnum;

export type LPCHead = LPCHeadEnum;

export type LPCShoulders = LPCShouldersEnum;

export type LPCHands = LPCHandsEnum;

export type LPCWeapon = LPCWeaponEnum;

export type LPCSpecial = LPCFemaleSpecialEnum | LPCMaleSpecialEnum;

