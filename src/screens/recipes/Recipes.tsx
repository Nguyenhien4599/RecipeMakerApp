import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';

import { Row, Section, Space } from '../../components';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import answerStore from '../../stores/answer';

const Recipes = ({ navigation }: any) => {
    const { data } = answerStore();
    const { handleToggleBtn } = toggleBtnFooterStore();
    const [result1, setResult1] = React.useState(false);
    const [fadeAnim1] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        handleToggleBtn(true);
        setTimeout(() => {
            setResult1(true);
            Animated.timing(fadeAnim1, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                handleToggleBtn(false);
            });
        }, 1500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result1]);

    return (
        <Layout percent={100} navigation={navigation} backScreen="Loading" nextStep="StepOne" textBtnNext="처음으로">
            <ScrollView style={globalStyles.container}>
                {result1 && (
                    <Animated.View style={[{ opacity: fadeAnim1 }]}>
                        <Section>
                            <Row style={styles.row}>
                                <View style={styles.wrapGif}>
                                    <FastImage
                                        source={require('../../../assets/images/Animation.gif')}
                                        style={styles.gif}
                                    />
                                </View>
                                <Space width={8} />

                                <View style={styles.wrapResult}>
                                    <View>
                                        <Text style={styles.text}>{data}</Text>
                                    </View>
                                </View>
                            </Row>
                        </Section>
                    </Animated.View>
                )}
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    wrapGif: {
        padding: 6,
        borderColor: '#CBE9E7',
        borderWidth: 1,
        borderRadius: 99,
    },
    gif: {
        width: 18,
        height: 18,
    },
    row: {
        alignItems: 'baseline',
    },
    wrapResult: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: '#F2FFFB',
        borderColor: '#CBE9E7',
        borderWidth: 1,
    },
    text: {
        color: '#444',
        fontSize: 12,
        fontFamily: fontFamiles.NotoSansKRMedium,
        lineHeight: 20,
    },
    mb: {
        marginBottom: 16,
    },
    rowText: {
        alignItems: 'center',
    },
    rowPadding: {
        paddingLeft: 15,
    },
});
export default Recipes;
