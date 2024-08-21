import {fontFamilies} from '../constants/fonts';

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.URBANIST;
  return selectedFontFamily[weight];
};
