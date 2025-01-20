import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Input, Row, Section, Space } from '../../components';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import stepThreeStore from '../../stores/stepThree';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';
import { dataBtnSuggestStep3 } from '../../constants/ListDataSuggest';

const StepThree = ({ navigation }: any) => {
    const { width } = Dimensions.get('window');
    const dataAccordion1 = ['매운 음식', '해산물', '채식', '직접입력'];
    const dataAccordion2 = ['특정 재료', '조리법', '유당 불내증', '직접입력'];

    const { data, handleChangeData } = stepThreeStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        checkDisableBtn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useFocusEffect(
        React.useCallback(() => {
            checkDisableBtn();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [data]),
    );

    const checkDisableBtn = () => {
        const obj = { ...data };

        if (data.valueAccordion1 === '직접입력') obj.valueAccordion1 = data.textInput1;
        if (data.valueAccordion2 === '직접입력') obj.valueAccordion2 = data.textInput2;

        if (obj.valueAccordion1 && obj.valueAccordion2) {
            if (obj.listBtnActive.includes(9) && !obj.textInputOther) return handleToggleBtn(true);
            handleToggleBtn(false);
        } else handleToggleBtn(true);
    };

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
                    <Text style={globalStyles.title}>
                        취향에 맞는 레시피를 추천해드리기{'\n'}위해 몇 가지 질문을 드립니다.
                    </Text>
                    <Text style={globalStyles.descriptions}>
                        이 정보는 여러분의 개별적인 취향에 맞춰 맞춤 레시피를 제공하는 데 도움이 됩니다.
                    </Text>
                </Section>
                <Section>
                    <View style={styles.wrapInput}>
                        <Accordion
                            // eslint-disable-next-line react-native/no-inline-styles
                            styleContainer={{ marginBottom: 0 }}
                            placeholder={'선호하는 음식을 알려주세요.'}
                            items={dataAccordion1}
                            value={data.valueAccordion1}
                            setValue={(val: string) => {
                                handleChangeData(val, 'valueAccordion1');
                            }}
                        />
                        <Input
                            placeholder="선호하는 음식을 알려주세요."
                            name="textInput1"
                            callBack={handleChangeData}
                            value={data.textInput1}
                            styleWrapper={styles.mbInput}
                        />

                        <Text style={styles.textHelper}>ex) 매운 음식, 해산물, 일식 등</Text>
                        {data.valueAccordion1 === '직접입력' && (
                            <Input
                                placeholder="선호하는 음식을 알려주세요."
                                name="textInput1"
                                callBack={handleChangeData}
                                value={data.textInput1}
                                styleWrapper={styles.mbInput}
                            />
                        )}
                    </View>
                    <View style={styles.wrapInput}>
                        <Accordion
                            // eslint-disable-next-line react-native/no-inline-styles
                            styleContainer={{ marginBottom: 0 }}
                            placeholder={'비선호하시는 음식스타일을 알려주세요.'}
                            items={dataAccordion2}
                            value={data.valueAccordion2}
                            setValue={(val: string) => {
                                handleChangeData(val, 'valueAccordion2');
                            }}
                        />
                        <Input
                            placeholder="비선호하시는 음식스타일을 알려주세요."
                            name="textInput2"
                            callBack={handleChangeData}
                            value={data.textInput2}
                            styleWrapper={styles.mbInput}
                        />
                        <Text style={styles.textHelper}>ex) 특정 재료 및 조리법등</Text>
                        {data.valueAccordion2 === '직접입력' && (
                            <Input
                                placeholder="비선호하시는 음식스타일을 알려주세요."
                                name="textInput2"
                                callBack={handleChangeData}
                                value={data.textInput2}
                                styleWrapper={styles.mbInput}
                            />
                        )}
                    </View>
                    <View style={styles.wrapSuggest}>
                        <Text style={[globalStyles.text, { color: colors.textDisabled }]}>건강목표를 알려주세요.</Text>
                    </View>

                    <View>
                        <Row style={styles.wrapBtn}>
                            {dataBtnSuggestStep3.map((item, index) => {
                                if (index + 1 !== dataBtnSuggestStep3.length) {
                                    return (
                                        <Text
                                            key={index}
                                            onPress={handlePressBtn(item.id)}
                                            style={[
                                                styles.btn,
                                                globalStyles.text,
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                {
                                                    width: width * 0.4,
                                                    textAlign: 'center',
                                                },
                                                {
                                                    color: data.listBtnActive.includes(item.id)
                                                        ? colors.backgroundColor
                                                        : colors.text,
                                                },
                                                data.listBtnActive.includes(item.id) && {
                                                    fontFamily: fontFamiles.NotoSansKRBold,
                                                },
                                                data.listBtnActive.includes(item.id) && styles.btnActive,
                                            ]}
                                        >
                                            {item.text}
                                        </Text>
                                    );
                                } else {
                                    return (
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        <View style={{ width: '100%' }} key={index}>
                                            <Row style={styles.wrapBtnOther}>
                                                <Text
                                                    key={index}
                                                    onPress={handlePressBtn(item.id)}
                                                    style={[
                                                        styles.btn,
                                                        globalStyles.text,

                                                        {
                                                            color: data.listBtnActive.includes(item.id)
                                                                ? colors.backgroundColor
                                                                : colors.text,
                                                        },
                                                        data.listBtnActive.includes(item.id) && {
                                                            fontFamily: fontFamiles.NotoSansKRBold,
                                                        },
                                                        data.listBtnActive.includes(item.id) && styles.btnActive,
                                                    ]}
                                                >
                                                    {item.text}
                                                </Text>

                                                {data.listBtnActive.includes(item.id) && (
                                                    <>
                                                        <Space width={6} />

                                                        <Input
                                                            // eslint-disable-next-line react-native/no-inline-styles
                                                            styleWrapper={{
                                                                width: '83%',
                                                                marginBottom: 0,
                                                            }}
                                                            // eslint-disable-next-line react-native/no-inline-styles
                                                            styleInput={{ height: 20 }}
                                                            name="textInputOther"
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
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 300,
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
    btnActive: {
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: 'transparent',
    },
});

export default StepThree;
