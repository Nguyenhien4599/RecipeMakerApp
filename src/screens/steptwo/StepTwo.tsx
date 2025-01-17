import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Input, Row, Section, Space } from '../../components';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import stepTwoStore from '../../stores/stepTwo';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';
import { dataBtnSuggestStep2 } from '../../constants/ListDataSuggest';

const StepTwo = ({ navigation }: any) => {
    const { width } = Dimensions.get('window');
    const dataAccordion = ['한식', '양식', '중식', '일식'];

    const { data, handleChangeData } = stepTwoStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        checkDisabledBtn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useFocusEffect(
        React.useCallback(() => {
            checkDisabledBtn();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [data.ValueAccordion]),
    );

    const checkDisabledBtn = () => {
        if (data.ValueAccordion) {
            if (data.listBtnActive.includes(10) && data.textInput) handleToggleBtn(false);
            else if (!data.listBtnActive.includes(10)) handleToggleBtn(false);
            else handleToggleBtn(true);
        } else handleToggleBtn(true);
    };

    const handlePressBtn = (idBtn: number) => () => {
        if (!data.listBtnActive.includes(idBtn)) {
            handleChangeData([...data.listBtnActive, idBtn], 'listBtnActive');
        } else {
            handleChangeData(
                data.listBtnActive.filter((id) => id !== idBtn),
                'listBtnActive',
            );
        }
    };

    return (
        <Layout percent={34} navigation={navigation} nextStep="StepThree">
            <ScrollView style={[globalStyles.container]}>
                <Section>
                    <Text style={globalStyles.title}>
                        건강 목표와 음식 섭취에{'\n'}대한 특별한 주의 사항을 알려주세요.
                    </Text>
                    <Text style={globalStyles.descriptions}>건강에 맞는 맞춤 레시피를 추천하기 위해 필요합니다.</Text>
                </Section>
                <Section>
                    <Accordion
                        placeholder="자주 드시는 식사 유형을 알려주세요."
                        items={dataAccordion}
                        value={data.ValueAccordion}
                        setValue={(text: string) => handleChangeData(text, 'ValueAccordion')}
                    />
                    <View style={styles.wrapSuggest}>
                        <Text style={[globalStyles.text, { color: colors.textDisabled }]}>
                            알러지 및 주의해야 할 사항을 알려주세요.
                        </Text>
                    </View>
                    <View>
                        <Row style={styles.wrapBtn}>
                            {dataBtnSuggestStep2.map((item, index) => {
                                if (index + 1 !== dataBtnSuggestStep2.length) {
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
                                                            name="textInput"
                                                            placeholder=""
                                                            value={data.textInput}
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
    wrapSuggest: { padding: 8, marginBottom: 8, borderBottomColor: colors.placeholder, borderBottomWidth: 1 },
    wrapBtn: {
        gap: 12,
        flexWrap: 'wrap',
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 300,
    },
    btnActive: {
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    wrapBtnOther: { alignItems: 'flex-end' },
});

export default StepTwo;
