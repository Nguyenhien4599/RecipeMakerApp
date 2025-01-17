import LottieView from 'lottie-react-native';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import { fontFamiles } from '../constants/FontFamilies';
import { globalStyles } from '../styles/globalStyles';

const Loading = () => {
    return (
        <View style={[globalStyles.container, globalStyles.center]}>
            <LottieView
                source={require('../../assets/lottie/loading.json')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: 240, height: 240 }}
                autoPlay
                loop
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
