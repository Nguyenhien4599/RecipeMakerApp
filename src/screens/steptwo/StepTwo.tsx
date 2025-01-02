import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Accordion, Row, Section } from '../../components';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';

const StepTwo = ({ navigation }: any) => {
    const dataAccordion = ['한식', '양식', '중식', '일식'];
    return (
        <Layout percent={34} navigation={navigation} nextStep="StepThree">
            <View style={[globalStyles.container]}>
                <Section>
                    <Text numberOfLines={2} style={globalStyles.title}>
                        건강 목표와 음식 섭취에{'\n'}대한 특별한 주의 사항을 알려주세요.
                    </Text>
                    <Text numberOfLines={2} style={globalStyles.descriptions}>
                        건강에 맞는 맞춤 레시피를 추천하기 위해 필요합니다.
                    </Text>
                </Section>
                <Section styles={styles.mt}>
                    <Accordion placeholder="자주 드시는 식사 유형을 알려주세요." items={dataAccordion} />
                    <View style={styles.wrapSuggest}>
                        <Text style={[globalStyles.text, { color: colors.textDisabled }]}>
                            알러지 및 주의해야 할 사항을 알려주세요.
                        </Text>
                    </View>
                    <View>
                        <Row style={styles.wrapBtn}>
                            <Button mode="outlined">
                                <Text style={[globalStyles.text, { color: colors.text }]}>땅콩</Text>
                            </Button>
                            <Button mode="contained">
                                <Text
                                    style={[
                                        globalStyles.text,
                                        { color: colors.backgroundColor, fontFamily: fontFamiles.NotoSansKRBold },
                                    ]}
                                >
                                    땅콩
                                </Text>
                            </Button>
                        </Row>
                    </View>
                </Section>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    mt: {
        marginTop: 36,
    },
    wrapSuggest: { padding: 8, marginBottom: 8, borderBottomColor: colors.placeholder, borderBottomWidth: 1 },
    wrapBtn: {
        gap: 12,
        flexWrap: 'wrap',
    },
});

export default StepTwo;
