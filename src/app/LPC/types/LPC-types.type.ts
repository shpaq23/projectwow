import { LPCFemaleChestEnum } from 'src/app/LPC/enums/female/LPC-female-chest.enum';
import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleRaceEnum } from 'src/app/LPC/enums/female/LPC-female-race.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCFemaleWeaponEnum } from 'src/app/LPC/enums/female/LPC-female-weapon.enum';
import { LPCBeltEnum } from 'src/app/LPC/enums/LPC-belt.enum';
import { LPCBootsEnum } from 'src/app/LPC/enums/LPC-boots.enum';
import { LPCEarsEnum } from 'src/app/LPC/enums/LPC-ears.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCHandsEnum } from 'src/app/LPC/enums/LPC-hands.enum';
import { LPCHeadEnum } from 'src/app/LPC/enums/LPC-head.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCShouldersEnum } from 'src/app/LPC/enums/LPC-shoulders.enum';
import { LPCMaleChestEnum } from 'src/app/LPC/enums/male/LPC-male-chest.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCMaleSpecialEnum } from 'src/app/LPC/enums/male/LPC-male-special.enum';
import { LPCMaleWeaponEnum } from 'src/app/LPC/enums/male/LPC-male-weapon.enum';

export type LPCRace = LPCFemaleRaceEnum | LPCMaleRaceEnum;

export type LPCEars = LPCEarsEnum;

export type LPCEyes = LPCEyesEnum;

export type LPCHair = LPCFemaleHairEnum | LPCMaleHairEnum;

export type LPCHairColor = LPCHairColorEnum;

export type LPCBoots = LPCBootsEnum;

export type LPCLegs = LPCLegsEnum;

export type LPCBelt = LPCBeltEnum;

export type LPCChest = LPCFemaleChestEnum | LPCMaleChestEnum;

export type LPCHead = LPCHeadEnum;

export type LPCShoulders = LPCShouldersEnum;

export type LPCHands = LPCHandsEnum;

export type LPCWeapon = LPCFemaleWeaponEnum | LPCMaleWeaponEnum;

export type LPCSpecial = LPCFemaleSpecialEnum | LPCMaleSpecialEnum;

