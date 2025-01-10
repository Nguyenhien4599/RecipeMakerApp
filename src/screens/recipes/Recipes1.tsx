import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { globalStyles } from '../../styles/globalStyles';
import Layout from '../../layout';
import { Row, Section, Space } from '../../components';
import { fontFamiles } from '../../constants/FontFamilies';
import { colors } from '../../constants/Colors';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';

const Recipes1 = ({ navigation }: any) => {
    const [fadeAnim] = React.useState(new Animated.Value(0));
    const headers = ['영양소', '양', '%'];
    const data = [
        ['칼로리', '450kcal', '22%'],
        ['단백질', '25g', '50%'],
        ['탄수화물', '14g', '5%'],

        ['포화지방', '35g', '45%'],
        ['식이섬유', '5g', '20%'],
        ['나트륨', '250mg', '10'],
    ];
    const [result1, setResult1] = React.useState(false);
    const { handleToggleBtn } = toggleBtnFooterStore();
    React.useEffect(() => {
        handleToggleBtn(true);
        setTimeout(() => {
            setResult1(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                handleToggleBtn(false);
            });
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout percent={100} navigation={navigation} nextStep="StepOne" textBtnNext="처음으로">
            <ScrollView style={globalStyles.container}>
                <Section>
                    {/*  eslint-disable-next-line react-native/no-inline-styles */}
                    <Row style={[styles.row, { marginBottom: 16 }]}>
                        <View style={styles.wrapGif}>
                            <FastImage source={require('../../../assets/images/Animation.gif')} style={styles.gif} />
                        </View>
                        <Space width={8} />
                        <View style={[globalStyles.container, styles.wrapResult]}>
                            <Text style={[styles.text, styles.mb, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                상세 영양 성분표(1인분 기준)
                            </Text>

                            <Row>
                                {headers.map((item, index) => (
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.tdHeader,
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            !index && {
                                                borderTopLeftRadius: 8,
                                            },
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            index + 1 === headers.length && {
                                                borderTopRightRadius: 8,
                                            },
                                        ]}
                                        key={index}
                                    >
                                        {item}
                                    </Text>
                                ))}
                            </Row>
                            {data.map((item, idx) => (
                                <Row key={idx}>
                                    {item.map((text, index) => (
                                        <Text
                                            style={[
                                                styles.tdBodyTable,
                                                styles.text,
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                {
                                                    backgroundColor: 'transparent',
                                                    fontFamily: fontFamiles.NotoSansKRMedium,
                                                },
                                                !index && { fontFamily: fontFamiles.NotoSansKRBold },
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                !index && idx + 1 === data.length && { borderBottomLeftRadius: 8 },
                                                idx + 1 === data.length &&
                                                    // eslint-disable-next-line react-native/no-inline-styles
                                                    index + 1 === item.length && { borderBottomRightRadius: 8 },
                                                index % 2 !== 0 && styles.hiddenBorderOdd,
                                                // index === 2 && { borderLeftWidth: 0 },
                                            ]}
                                            key={index}
                                        >
                                            {text}
                                        </Text>
                                    ))}
                                </Row>
                            ))}
                        </View>
                    </Row>

                    {result1 && (
                        <Animated.View style={[{ opacity: fadeAnim }]}>
                            <Row style={styles.row}>
                                <View style={styles.wrapGif}>
                                    <FastImage
                                        source={require('../../../assets/images/Animation.gif')}
                                        style={styles.gif}
                                    />
                                </View>
                                <Space width={8} />
                                <View style={[globalStyles.container, styles.wrapResult]}>
                                    <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                        시각적 평가
                                    </Text>
                                    <Text style={[styles.text, styles.mb]}>
                                        그릴드 연어와 아보카도 샐러드는 색감과 식감을 고려하여 시각적으로도 매우
                                        만족스러운 요리입니다.
                                    </Text>
                                    <View>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            1. 연어 굽기
                                        </Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                연어의 노릇노릇한 겉면과 아보카도의 연한 녹색이 조화를 이루며,
                                                방울토마토의 빨강과 어린잎 채소의 녹색이 생동감을 더합니다.
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                레몬즙과 드레싱으로 약간의 광택이 더해져 신선함이 돋보입니다.
                                            </Text>
                                        </Row>
                                    </View>
                                    <View>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            2. 구성:
                                        </Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                연어는 메인으로 중앙에 배치하고, 아보카도와 방울토마토, 어린잎 채소가
                                                주변에 자연스럽게 배치됩니다.
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                입체적인 플레이팅으로 고급스러운 느낌을 강조합니다.
                                            </Text>
                                        </Row>
                                    </View>
                                    <View>
                                        <Text style={[styles.text, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                            3. 식감:
                                        </Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                연어의 바삭한 외피와 부드러운 속살, 아보카도의 크리미함, 채소의 아삭한
                                                질감이 어우러져 식감의 다양성을 제공합니다.
                                            </Text>
                                        </Row>
                                    </View>
                                </View>
                            </Row>
                        </Animated.View>
                    )}
                </Section>
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
    rowText: {
        alignItems: 'center',
    },
    rowPadding: {
        paddingLeft: 15,
    },
    wrapResult: {
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
    tdHeader: {
        width: '33.33%',
        padding: 8,
        backgroundColor: colors.textDisabled,
        fontFamily: fontFamiles.NotoSansKRBold,
        borderWidth: 1,
        borderColor: '#999',
    },
    tdBodyTable: {
        width: '33.33%',
        padding: 8,
        fontFamily: fontFamiles.NotoSansKRMedium,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#999',
    },
    mb: {
        marginBottom: 8,
    },
    hiddenBorderOdd: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
});
export default Recipes1;
