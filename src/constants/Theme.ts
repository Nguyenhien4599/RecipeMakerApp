import { DefaultTheme } from 'react-native-paper';

import { colors } from './Colors';

export const theme = {
    ...DefaultTheme,
    dark: false,
    mode: 'light',
    colors: {
        primary: colors.primary,
        text: colors.text,
        placeholder: colors.placeholder,
        surfaceDisabled: colors.buttonBackgroundDisable,
        outline: colors.primary,
    },
};
