import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { globalStyles } from '../../styles/globalStyles';
import { Text } from 'react-native-paper';
import { fontFamiles } from '../../constants/FontFamilies';
import useCombinedStore from '../../hooks/useCombinedStore';

const Loading = ({ navigation }: any) => {
    console.log('data: ', useCombinedStore());
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Recipes');
        }, 1500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={[globalStyles.container, globalStyles.center]}>
            <FastImage
                source={require('../../../assets/images/loading.gif')}
                style={styles.gif}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.wrapText}>
                <Text style={[globalStyles.title, styles.text]}>조리중에 있습니다. </Text>
                <Text style={[globalStyles.title, styles.text]}>잠시만 기다려 주세요.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gif: {
        width: 240,
        height: 240,
    },
    wrapText: {
        marginTop: 16,
        alignItems: 'center',
    },
    text: {
        fontFamily: fontFamiles.NotoSansKRMedium,
        ...(Platform.OS === 'android' && { lineHeight: 32 }),
    },
});

export default Loading;
