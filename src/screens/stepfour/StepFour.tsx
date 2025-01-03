import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Accordion, Input, Row, Section, Space } from '../../components';
import IconWarning from '../../components/svg/IconWarning';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';

interface IValueInput {
    age: null | string;
    weight: null | string;
    height: null | string;
    gender: null | string;
}

const StepFour = ({ navigation }: any) => {
    const data1 = ['다이어트 식단', '고단백식단', '칼슘 보충', '직접입력'];
    const data2 = ['고급 요리', '기분 전환', '일상 요리', '기타'];
    const data3 = ['15분 이내성', '30분 이내성', '1시간 이내성', '1시간 이상'];
    // const { data, handleChangeData } = stepOneStore();
    // const { handleToggleBtn } = toggleBtnFooterStore();

    // React.useEffect(() => {
    //     if (Object.values(data).every((val) => val)) {
    //         handleToggleBtn(false);
    //     } else {
    //         handleToggleBtn(true);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data]);

    return (
        <Layout percent={66} navigation={navigation} nextStep="StepTwo">
            <ScrollView style={globalStyles.container}>
                <Section>
                    <Text numberOfLines={2} style={globalStyles.title}>
                        취향에 맞는 레시피를 추천해드리기{'\n'}위해 몇 가지 질문을 드립니다.
                    </Text>
                    <Text numberOfLines={2} style={globalStyles.descriptions}>
                        이 정보는 여러분의 개별적인 취향에 맞춰 맞춤 레시피를 제공하는 데 도움이 됩니다.
                    </Text>
                </Section>
                <Section styles={styles.marginTop}>
                    <Accordion placeholder="건강의 목적을 알려주세요." items={data1} value="" setValue={() => {}} />
                    <Accordion
                        placeholder="어떤 음식 스타일을 선호하시나요?"
                        items={data2}
                        value=""
                        setValue={() => {}}
                    />
                    <Accordion
                        placeholder="선호하시는 예상 조리시간을 알려주세요."
                        items={data3}
                        value=""
                        setValue={() => {}}
                    />
                </Section>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 24,
    },
});

export default StepFour;
