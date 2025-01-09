import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Input, Section } from '../../components';
import Layout from '../../layout';
import stepFourStore, { IData } from '../../stores/stepFour';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';

const StepFour = ({ navigation }: any) => {
    const keys: (keyof IData)[] = ['ValueAccordion1', 'ValueAccordion2', 'ValueAccordion3'];
    const listAccrdion = [
        {
            placeholder: '건강의 목적을 알려주세요.',
            items: ['다이어트 식단', '고단백식단', '칼슘 보충', '직접입력'],
            name: 'ValueAccordion1',
        },
        {
            placeholder: '어떤 음식 스타일을 선호하시나요?',
            items: ['고급 요리', '기분 전환', '일상 요리', '직접입력'],
            name: 'ValueAccordion2',
        },
        {
            placeholder: '선호하시는 예상 조리시간을 알려주세요.',
            items: ['15분 이내성', '30분 이내성', '1시간 이내성', '1시간 이상'],
            name: 'ValueAccordion3',
        },
    ];
    const { data, handleChangeData } = stepFourStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        if (Object.values(data).every((val) => val)) handleToggleBtn(false);
        else handleToggleBtn(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Layout percent={66} navigation={navigation} nextStep="StepFive">
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
                                placeholder={item.placeholder}
                                items={item.items}
                                value={data[keys[index]]}
                                setValue={(value: string) => {
                                    handleChangeData(value, keys[index]);
                                }}
                            />
                            {(index === 1 || index === 2) && (
                                <Input
                                    placeholder={
                                        index === 1 ? '건강의 목적을 알려주세요.' : '어떤 음식 스타일을 선호하시나요?'
                                    }
                                    name={`textInput${index}`}
                                    callBack={handleChangeData}
                                    value={data[`textInput${index}`]}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Section>
            </ScrollView>
        </Layout>
    );
};

export default StepFour;
