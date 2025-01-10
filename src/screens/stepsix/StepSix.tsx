import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Input, Section } from '../../components';
import Layout from '../../layout';

import stepSixStore, { IData } from '../../stores/stepSix';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';

const StepSix = ({ navigation }: any) => {
    const keys: (keyof IData)[] = ['ValueAccordion1', 'ValueAccordion2', 'ValueAccordion3', 'TextInput'];
    const listAccrdion = [
        {
            placeholder: '몇 인분의 레시피를 제작할까요?',
            items: ['1인분', '2인분', '3인분', '직접입력'],
            name: 'ValueAccordion1',
        },
        {
            placeholder: '1인분 기준 몇 칼로리의 레시피를 원하시나요?',
            items: ['저칼로리 (300 ~ 500kcal)', '중간 칼로리 (500 ~ 1000kcal)', '고칼로리 (1000 ~ 1500kcal)'],
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { TextInput, ...obj } = data;

        if (obj.ValueAccordion1 === '직접입력') obj.ValueAccordion1 = data.TextInput;

        if (Object.values(obj).every((val) => val)) handleToggleBtn(false);
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
                <Section>
                    {listAccrdion.map((item, index: number) => (
                        <React.Fragment key={index}>
                            <Accordion
                                key={index}
                                placeholder={item.placeholder}
                                items={item.items}
                                value={data[keys[index]]}
                                setValue={(value: string) => {
                                    handleChangeData(value, keys[index]);
                                }}
                            />
                            {data[keys[index]] === '직접입력' && (
                                <Input
                                    placeholder={'몇 인분의 레시피를 제작할까요?'}
                                    name={keys[keys.length - 1]}
                                    callBack={handleChangeData}
                                    value={data[keys[keys.length - 1]]}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Section>
            </ScrollView>
        </Layout>
    );
};

export default StepSix;
