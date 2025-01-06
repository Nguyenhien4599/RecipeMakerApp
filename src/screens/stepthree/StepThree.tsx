import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Input, Row, Section, Space } from '../../components';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import stepThreeStore from '../../stores/stepThree';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';

const StepThree = ({ navigation }: any) => {
    const dataBtnSuggest = [
        { id: 1, text: '체중감량' },
        { id: 2, text: '체중증가' },
        { id: 3, text: '근육증가' },
        { id: 4, text: '심혈관 건강 개선' },
        { id: 5, text: '혈당 관리' },
        { id: 6, text: '소화 건강' },
        { id: 7, text: '피부 건강 개선' },
        { id: 8, text: '스트레스 완화' },
        { id: 9, text: '기타' },
    ];
    const { data, handleChangeData } = stepThreeStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        if (data.textInput1 && data.textInput2) handleToggleBtn(false);
        else handleToggleBtn(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.textInput1, data.textInput2]);

    const handlePressBtn = (idBtn: number) => () => {
        if (!data.listBtnActive.includes(idBtn)) handleChangeData([...data.listBtnActive, idBtn], 'listBtnActive');
        else {
            handleChangeData(
                data.listBtnActive.filter((id) => id !== idBtn),
                'listBtnActive',
            );
        }
    };

    return (
        <Layout percent={50} navigation={navigation} nextStep="StepFour">
            <ScrollView style={[globalStyles.container]}>
                <Section>
                    <Text numberOfLines={2} style={globalStyles.title}>
                        취향에 맞는 레시피를 추천해드리기{'\n'}위해 몇 가지 질문을 드립니다.
                    </Text>
                    <Text numberOfLines={2} style={globalStyles.descriptions}>
                        이 정보는 여러분의 개별적인 취향에 맞춰 맞춤 레시피를 제공하는 데 도움이 됩니다.
                    </Text>
                </Section>
                <Section styles={styles.mt}>
                    <View>
                        <Input
                            placeholder="선호하는 음식을 알려주세요."
                            name="textInput1"
                            callBack={handleChangeData}
                            value={data.textInput1}
                            styleWrapper={styles.mbInput}
                        />
                        <Text style={styles.textHelper}>ex) 매운 음식, 해산물, 일식 등</Text>
                    </View>
                    <View style={styles.wrapInput}>
                        <Input
                            placeholder="비선호하시는 음식스타일을 알려주세요."
                            name="textInput2"
                            callBack={handleChangeData}
                            value={data.textInput2}
                            styleWrapper={styles.mbInput}
                        />
                        <Text style={styles.textHelper}>ex) 특정 재료 및 조리법등</Text>
                    </View>
                    <View style={styles.wrapSuggest}>
                        <Text style={[globalStyles.text, { color: colors.textDisabled }]}>
                            알러지 및 주의해야 할 사항을 알려주세요.
                        </Text>
                    </View>

                    <View>
                        <Row style={styles.wrapBtn}>
                            {dataBtnSuggest.map((item, index) => {
                                if (index + 1 !== dataBtnSuggest.length) {
                                    return (
                                        <Button
                                            mode={data.listBtnActive.includes(item.id) ? 'contained' : 'outlined'}
                                            key={index}
                                            onPress={handlePressBtn(item.id)}
                                            style={[
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                data.listBtnActive.includes(item.id) && {
                                                    borderWidth: 1,
                                                    borderColor: 'transparent',
                                                },
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    globalStyles.text,
                                                    { color: colors.text },
                                                    data.listBtnActive.includes(item.id) && {
                                                        fontFamily: fontFamiles.NotoSansKRBold,
                                                    },
                                                    data.listBtnActive.includes(item.id) && {
                                                        color: colors.backgroundColor,
                                                    },
                                                ]}
                                            >
                                                {item.text}
                                            </Text>
                                        </Button>
                                    );
                                } else {
                                    return (
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        <View style={{ width: '100%' }} key={index}>
                                            <Row style={styles.wrapBtnOther}>
                                                <Button
                                                    mode={
                                                        data.listBtnActive.includes(item.id) ? 'contained' : 'outlined'
                                                    }
                                                    onPress={handlePressBtn(item.id)}
                                                    style={[
                                                        // eslint-disable-next-line react-native/no-inline-styles
                                                        data.listBtnActive.includes(item.id) && {
                                                            borderWidth: 1,
                                                            borderColor: 'transparent',
                                                        },
                                                    ]}
                                                >
                                                    <Text
                                                        style={[
                                                            globalStyles.text,
                                                            { color: colors.text },
                                                            data.listBtnActive.includes(item.id) && {
                                                                fontFamily: fontFamiles.NotoSansKRBold,
                                                            },
                                                            data.listBtnActive.includes(item.id) && {
                                                                color: colors.backgroundColor,
                                                            },
                                                        ]}
                                                    >
                                                        {item.text}
                                                    </Text>
                                                </Button>

                                                {data.listBtnActive.includes(item.id) && (
                                                    <>
                                                        <Space width={6} />

                                                        <Input
                                                            // eslint-disable-next-line react-native/no-inline-styles
                                                            styleWrapper={{
                                                                width: '78%',
                                                                marginBottom: 0,

                                                                height: '80%',
                                                            }}
                                                            // eslint-disable-next-line react-native/no-inline-styles
                                                            styleInput={{ margin: 0, height: 52 }}
                                                            name="textInput"
                                                            placeholder=""
                                                            value={data.textInputOther}
                                                            callBack={handleChangeData}
                                                        />
                                                    </>
                                                )}
                                            </Row>
                                        </View>
                                    );
                                }
                            })}
                        </Row>
                    </View>
                </Section>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    mt: {
        marginTop: 36,
    },
    mbInput: {
        marginBottom: 8,
    },
    wrapInput: {
        marginBottom: 24,
    },
    textHelper: {
        fontSize: 12,
        color: colors.textDisabled,
        fontFamily: fontFamiles.NotoSansKRMedium,
        lineHeight: 22,
        letterSpacing: -0.72,
    },
    wrapSuggest: { padding: 8, marginBottom: 8, borderBottomColor: colors.placeholder, borderBottomWidth: 1 },
    wrapBtn: {
        gap: 12,
        flexWrap: 'wrap',
    },
    wrapBtnOther: { alignItems: 'flex-start' },
});

export default StepThree;
