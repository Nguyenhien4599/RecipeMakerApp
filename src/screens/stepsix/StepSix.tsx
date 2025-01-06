import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Section } from '../../components';
import Layout from '../../layout';

import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';
import stepSixStore, { IData } from '../../stores/stepSix';

const StepSix = ({ navigation }: any) => {
    const keys: (keyof IData)[] = ['ValueAccordion1', 'ValueAccordion2', 'ValueAccordion3'];
    const listAccrdion = [
        {
            placeholder: '몇 인분의 레시피를 제작할까요?',
            items: ['1인분', '2인분', '3인분', '직접입력'],
            name: 'ValueAccordion1',
        },
        {
            placeholder: '1인분 기준 몇 칼로리의 레시피를 원하시나요?',
            items: ['저칼로리 (0 ~ 500kcal)', '중간 칼로리 (500 ~ 1000kcal)', '고칼로리 (1000 ~ 1500kcal)'],
            name: 'ValueAccordion2',
        },
        {
            placeholder: '어느정도의 요리 숙련도가 있으신가요?',
            items: ['초급', '중급', '고급'],
            name: 'ValueAccordion3',
        },
    ];
    const { data, handleChangeData } = stepSixStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        if (Object.values(data).every((val) => val)) handleToggleBtn(false);
        else handleToggleBtn(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Layout percent={94} navigation={navigation} nextStep="Loading">
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
                    {listAccrdion.map((item, index: number) => (
                        <Accordion
                            key={index}
                            placeholder={item.placeholder}
                            items={item.items}
                            value={data[keys[index]]}
                            setValue={(value: string) => {
                                handleChangeData(value, keys[index]);
                            }}
                        />
                    ))}
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

export default StepSix;
