import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Input, Row, Section, Space } from '../../components';
import { colors } from '../../constants/Colors';
import Layout from '../../layout';
import { globalStyles } from '../../styles/globalStyles';

const StepOne = () => {
    const dataBtnGender = [
        { key: 'male', value: 'male', text: '남성' },
        {},
        { key: 'female', value: 'female', text: '여성' },
    ];
    const [genderValue, setGenderValue] = React.useState<string | null>(null);

    return (
        <Layout onlybtnNext>
            <ScrollView style={globalStyles.container}>
                <Section>
                    <Text numberOfLines={2} style={globalStyles.title}>
                        성향 분석을 위해{'\n'}기본정보를 입력해 주세요.
                    </Text>
                    <Text numberOfLines={2} style={globalStyles.descriptions}>
                        맞춤 요리 레시피 추천을 위해 몇 가지 정보를 부탁드립니다.
                    </Text>
                </Section>
                <Section>
                    <Text style={[globalStyles.text, styles.text]}>성별을 선택해주세요.</Text>
                    <Row>
                        {dataBtnGender.map((item, index) => {
                            if (index === 1) {
                                return <Space width={8} key={index} />;
                            } else {
                                return (
                                    <Button
                                        style={globalStyles.container}
                                        key={item.key}
                                        labelStyle={{
                                            color: genderValue !== item.value ? colors.text : colors.backgroundColor,
                                        }}
                                        mode={genderValue === item.value ? 'contained' : 'outlined'}
                                        onPress={() => setGenderValue(item.value as string)}
                                    >
                                        {item.text}
                                    </Button>
                                );
                            }
                        })}
                    </Row>
                </Section>
                <Section>
                    <Input />
                </Section>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.textInput,
        marginBottom: 16,
    },
});

export default StepOne;
