import { StyleSheet, Platform } from 'react-native';

import { fontFamiles } from '../constants/FontFamilies';
import { colors } from '../constants/Colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    end: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    section: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.35)',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },
    borderRadius: {
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontFamily: fontFamiles.NotoSansKRSemiBold,
        color: colors.title,
        ...(Platform.OS === 'android' && { lineHeight: 32 }),
        marginBottom: Platform.OS === 'ios' ? 8 : 0,
    },
    text: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.42,
    },
    descriptions: {
        color: colors.text,
        fontSize: 12,
        fontFamily: fontFamiles.NotoSansKRSemiBold,
        letterSpacing: -0.36,
    },
});
