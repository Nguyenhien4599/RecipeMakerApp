import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';

import { Row, Section, Space } from '../../components';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';

const Recipes = ({ navigation }: any) => {
    const { handleToggleBtn } = toggleBtnFooterStore();
    const [result1, setResult1] = React.useState(false);
    const [result2, setResult2] = React.useState(false);
    const [fadeAnim1] = React.useState(new Animated.Value(0));
    const [fadeAnim2] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        handleToggleBtn(false);
        setResult1(true);
        Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();

        // Set result2 sau 1 khoảng delay
        setTimeout(() => {
            setResult2(true);
            Animated.timing(fadeAnim2, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 1500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result1, result2]);

    return (
        <Layout percent={100} onlybtnNext navigation={navigation} nextStep="Recipes1">
            <ScrollView style={globalStyles.container}>
                <Section>
                    <Row style={styles.row}>
                        <View style={styles.wrapGif}>
                            <FastImage source={require('../../../assets/images/Animation.gif')} style={styles.gif} />
                        </View>
                        <Space width={8} />
                        <View style={styles.wrapResult}>
                            <Text style={[styles.text, styles.mb, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                그릴드 연어와 아보카도 샐러드
                            </Text>
                            <Row style={styles.mb}>
                                <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>재료: </Text>
                                <Text style={styles.text}>약 450kcal (1인분 기준)</Text>
                            </Row>
                            <Row style={styles.mb}>
                                <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                    조리 시간:{' '}
                                </Text>
                                <Text style={styles.text}>약 25분</Text>
                            </Row>
                            <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>재료 (1인분)</Text>
                            <Section>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>연어 스테이크 (100g): 약 208kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>아보카도 (1/4개, 약 50g): 약 80kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>어린잎 채소 (한 줌, 약 50g): 약 15kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>방울토마토 (3~4개, 약 50g): 약 10kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>레몬즙 (1큰술): 약 4kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>올리브 오일 (1작은술): 약 40kcal</Text>
                                </Row>
                                <Row style={styles.rowText}>
                                    <Text>•</Text>
                                    <Space width={4} />
                                    <Text style={styles.text}>소금, 후추: 약간</Text>
                                </Row>
                            </Section>
                        </View>
                    </Row>
                </Section>
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
                                    <Text style={[styles.text, styles.mb, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                        그릴드 연어와 아보카도 샐러드
                                    </Text>
                                    <Row style={styles.mb}>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            재료:{' '}
                                        </Text>
                                        <Text style={styles.text}>약 450kcal (1인분 기준)</Text>
                                    </Row>
                                    <Row style={styles.mb}>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            조리 시간:{' '}
                                        </Text>
                                        <Text style={styles.text}>약 25분</Text>
                                    </Row>
                                    <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                        재료 (1인분)
                                    </Text>
                                    <Section>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>연어 스테이크 (100g): 약 208kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>아보카도 (1/4개, 약 50g): 약 80kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>어린잎 채소 (한 줌, 약 50g): 약 15kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>방울토마토 (3~4개, 약 50g): 약 10kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>레몬즙 (1큰술): 약 4kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>올리브 오일 (1작은술): 약 40kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>소금, 후추: 약간</Text>
                                        </Row>
                                    </Section>
                                </View>
                            </Row>
                        </Section>
                    </Animated.View>
                )}

                {result2 && (
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
                                    <Text style={[styles.text, styles.mb, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                        그릴드 연어와 아보카도 샐러드
                                    </Text>
                                    <Row style={styles.mb}>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            재료:{' '}
                                        </Text>
                                        <Text style={styles.text}>약 450kcal (1인분 기준)</Text>
                                    </Row>
                                    <Row style={styles.mb}>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            조리 시간:{' '}
                                        </Text>
                                        <Text style={styles.text}>약 25분</Text>
                                    </Row>
                                    <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                        재료 (1인분)
                                    </Text>
                                    <Section>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>연어 스테이크 (100g): 약 208kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>아보카도 (1/4개, 약 50g): 약 80kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>어린잎 채소 (한 줌, 약 50g): 약 15kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>방울토마토 (3~4개, 약 50g): 약 10kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>레몬즙 (1큰술): 약 4kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>올리브 오일 (1작은술): 약 40kcal</Text>
                                        </Row>
                                        <Row style={styles.rowText}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>소금, 후추: 약간</Text>
                                        </Row>
                                    </Section>
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
});
export default Recipes;
