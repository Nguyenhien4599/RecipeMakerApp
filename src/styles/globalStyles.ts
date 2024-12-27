import { StyleSheet } from 'react-native';

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
    section: {
        paddingHorizontal: 18,
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
});
