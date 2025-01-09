import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { Accordion, Input, Section } from '../../components';
import Layout from '../../layout';
import stepFiveStore, { IData } from '../../stores/stepFive';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';

const StepFive = ({ navigation }: any) => {
    const [openInput, setOpenInput] = React.useState(false);
    const keys: (keyof IData)[] = ['ValueAccordion1', 'ValueAccordion2'];
    const listAccrdion = [
        {
            placeholder: '어떤종류의 유형을 알려드릴까요?',
            items: ['가정식 / 전통식', '간단한 간식', '디저트', '비건 / 채식'],
            name: 'ValueAccordion1',
        },
        {
            placeholder: '선호하는 문화권 양식이 있으신가요?',
            items: ['이탈리안', '멕시칸', '일상 요리', '직접입력'],
            name: 'ValueAccordion2',
        },
    ];
    const { data, handleChangeData } = stepFiveStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        let obj = { ...data };
        if (!openInput) delete obj.TextInput;
        if (Object.values(obj).every((val) => val)) handleToggleBtn(false);
        else handleToggleBtn(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, openInput]);

    return (
        <Layout percent={86} navigation={navigation} nextStep="StepSix">
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
                        <Accordion
                            key={index}
                            placeholder={item.placeholder}
                            items={item.items}
                            value={data[keys[index]] as string}
                            setValue={(value: string) => {
                                handleChangeData(value, keys[index]);
                                if (value === '직접입력') setOpenInput(true);
                                else setOpenInput(false);
                            }}
                        />
                    ))}
                    {openInput && (
                        <Input
                            placeholder={'선호하는 문화권 양식이 있으신가요?'}
                            value={data.TextInput || ''}
                            callBack={handleChangeData}
                            name="TextInput"
                        />
                    )}
                </Section>
            </ScrollView>
        </Layout>
    );
};

export default StepFive;
