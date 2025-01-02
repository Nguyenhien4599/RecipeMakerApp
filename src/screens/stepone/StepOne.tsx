import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Input, Row, Section, Space } from '../../components';
import IconWarning from '../../components/svg/IconWarning';
import { colors } from '../../constants/Colors';
import { fontFamiles } from '../../constants/FontFamilies';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';
import stepOneStore from '../../stores/stepOne';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';

interface IValueInput {
    age: null | string;
    weight: null | string;
    height: null | string;
    gender: null | string;
}

const StepOne = ({ navigation }: any) => {
    const dataBtnGender = [
        { key: 'male', value: 'male', text: '남성' },
        { key: 'female', value: 'female', text: '여성' },
    ];
    const dataRenderInput = [
        { placeholder: '나이를 입력해주세요.', textAffix: '세', name: 'age' },
        { placeholder: '체중을 입력해주세요.', textAffix: 'Kg', name: 'weight' },
        { placeholder: '키를 입력해주세요.', textAffix: 'Cm', name: 'height' },
    ];
    const { data, handleChangeData } = stepOneStore();
    const { handleToggleBtn } = toggleBtnFooterStore();

    React.useEffect(() => {
        if (Object.values(data).every((val) => val)) {
            handleToggleBtn(false);
        } else {
            handleToggleBtn(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Layout percent={17} onlybtnNext navigation={navigation} nextStep="StepTwo">
            <ScrollView style={globalStyles.container}>
                <Section>
                    <Text numberOfLines={2} style={globalStyles.title}>
                        성향 분석을 위해{'\n'}기본정보를 입력해 주세요.
                    </Text>
                    <Text numberOfLines={2} style={globalStyles.descriptions}>
                        맞춤 요리 레시피 추천을 위해 몇 가지 정보를 부탁드립니다.
                    </Text>
                </Section>
                <Section styles={styles.mt}>
                    <Text style={[globalStyles.text, styles.text]}>성별을 선택해주세요.</Text>
                    <Row>
                        {dataBtnGender.map((item, index) => (
                            <React.Fragment key={index}>
                                <Button
                                    style={globalStyles.container}
                                    key={item.key}
                                    labelStyle={{
                                        color: data.gender !== item.value ? colors.text : colors.backgroundColor,
                                    }}
                                    mode={data.gender === item.value ? 'contained' : 'outlined'}
                                    onPress={() => handleChangeData(item.value, 'gender')}
                                >
                                    {item.text}
                                </Button>
                                {!index && <Space width={8} />}
                            </React.Fragment>
                        ))}
                    </Row>
                </Section>
                <Section>
                    {dataRenderInput.map((item, index) => (
                        <Input
                            name={item.name}
                            value={data[item.name as keyof IValueInput] ?? ''}
                            callBack={handleChangeData}
                            showAffixText
                            keyboardType="numeric"
                            placeholder={item.placeholder}
                            textAffix={item.textAffix}
                            key={index}
                        />
                    ))}
                    <Row>
                        <View style={styles.wrapIcon}>
                            <IconWarning />
                        </View>
                        <Space width={8} />
                        <Text style={styles.textWarning} textBreakStrategy="simple">
                            제공해 주시는 데이터는 건강한 식단 추천을 위해 사용되며, 다른 용도로 사용되지 않습니다.
                        </Text>
                    </Row>
                </Section>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    mt: {
        marginTop: 36,
    },
    text: {
        color: colors.textInput,
        marginBottom: 16,
    },
    textWarning: {
        width: '95%',
        fontFamily: fontFamiles.NotoSansKRSemiBold,
        lineHeight: 22,
        letterSpacing: -0.72,
        color: colors.textDisabled,
    },
    wrapIcon: {
        paddingTop: 5,
    },
});

export default StepOne;
