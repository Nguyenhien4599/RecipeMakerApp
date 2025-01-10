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
        handleToggleBtn(true);
        new Promise((resolve) => {
            setTimeout(() => {
                setResult1(true);
                Animated.timing(fadeAnim1, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    resolve('');
                });
            }, 1500);
        }).then(() => {
            setResult2(true);
            Animated.timing(fadeAnim2, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                handleToggleBtn(false);
            });
        });

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
                                        조리 방법
                                    </Text>
                                    <View style={styles.mb}>
                                        <Text style={styles.text}>1. 연어 굽기</Text>
                                        <Row style={[styles.rowText, styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>연어에 소금과 후추를 약간 뿌려 밑간합니다.</Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                중불로 달군 그릴 팬에 올리브 오일을 두르고 연어를 양면 각각 3~4분씩
                                                구워줍니다. (노릇하게 구워지면 완성)
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>2. 샐러드 준비</Text>
                                        <Row style={[styles.rowText, styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                어린잎 채소는 깨끗이 씻고 물기를 제거합니다.
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                방울토마토는 반으로 자르고, 아보카도는 얇게 슬라이스합니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>3. 드레싱 만들기</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                볼에 레몬즙, 발사믹 식초, 남은 올리브 오일, 소금을 섞어 드레싱을
                                                준비합니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>4. 플레이팅</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                접시에 어린잎 채소를 깔고, 방울토마토와 아보카도를 올립 니다.
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                구운 연어를 곁들인 뒤, 드레싱을 고루 뿌려줍니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>5. 마무리</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                취향에 따라 후추를 조금 더 뿌리고, 레몬즙을 추가로 뿌려 상큼함을
                                                더합니다.
                                            </Text>
                                        </Row>
                                    </View>
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
                                        대체 재료 제안
                                    </Text>
                                    <View style={styles.mb}>
                                        <Text style={styles.text}>1. 연어 스테이크</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 닭가슴살(저지방), 두부 스테이크, 새우(껍질 제거 후)
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 연어처럼 단백질이 풍부하면서 저칼로리인 재료로, 비슷한 맛과 식감을
                                                줄 수 있습니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>2. 아보카도</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 삶은 달걀(1/2개), 캐슈너트(10g), 으깬 호박(구운 단호박)
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 건강한 지방을 제공하면서도 칼로리를 비슷하게 유지할 수 있습니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>3. 어린잎 채소</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>대체 재료: 로메인, 루꼴라, 시금치(생잎)</Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 다양한 채소를 활용하여 식감을 더하거나 신선함을 유지할 수
                                                있습니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>4. 방울토마토</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 파프리카(노란색, 빨간색), 얇게 썬 오이
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 색감과 상큼한 맛을 추가하며 칼로리는 낮게 유지됩니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>5. 레몬즙</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 라임즙, 식초(사과식초나 레드와인 식초), 오렌지즙(소량)
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 새콤한 맛을 유지하면서 다양한 맛의 변화를 줄 수 있습니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>6. 올리브 오일</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 참기름(소량), 카놀라유(소량), 아보카도 오일
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 건강한 지방을 제공하며 칼로리 차이를 최소화할 수 있습니다.
                                            </Text>
                                        </Row>
                                    </View>

                                    <View style={styles.mb}>
                                        <Text style={styles.text}>7. 발사믹 식초</Text>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                대체 재료: 간장(저염), 유자 드레싱(저칼로리), 레몬즙과 꿀(소량 혼합)
                                            </Text>
                                        </Row>
                                        <Row style={[styles.rowPadding]}>
                                            <Text>•</Text>
                                            <Space width={4} />
                                            <Text style={styles.text}>
                                                이유: 드레싱의 풍미를 다양하게 조정하면서 건강함을 유지할 수 있습니다.
                                            </Text>
                                        </Row>
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
