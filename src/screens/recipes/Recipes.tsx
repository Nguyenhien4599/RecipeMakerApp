import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';

import { Row, Section, Space } from '../../components';
import { fontFamiles } from '../../constants/FontFamilies';
import { dataBtnSuggestStep2, dataBtnSuggestStep3 } from '../../constants/ListDataSuggest';
import useCombinedStore from '../../hooks/useCombinedStore';
import Layout from '../../layout';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';
import { globalStyles } from '../../styles/globalStyles';
import { generateText } from '../../utils/generateText';
import Loading from '../../components/Loading';

const Recipes = ({ navigation }: any) => {
    const dataTotal: any = useCombinedStore();
    const { handleToggleBtn } = toggleBtnFooterStore();
    const [result1, setResult1] = React.useState(false);
    const [fadeAnim1] = React.useState(new Animated.Value(0));
    const [answer, setAnswer] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const text = `Bạn hãy cho tôi chế độ dinh dưỡng(${dataTotal[4].ValueAccordion1}) khẩu phần ăn cho ${
        dataTotal[5].ValueAccordion1
    } để ${generateText(dataBtnSuggestStep3, dataTotal[2].listBtnActive, dataTotal[2].textInputOther)}, ${
        dataTotal[3].ValueAccordion1
    } sau đây tôi sẽ cấp cho bạn một vài thông tin về bản thân tôi như sau:
giới tính của tôi là ${dataTotal[0].gender}, tôi cao ${dataTotal[0].height}cm và nặng ${
        dataTotal[0].age
    }kg. Tôi thường hay ăn đồ ${dataTotal[1].ValueAccordion} nhưng tôi lại thích ăn những bữa ăn mang văn hoá của ${
        dataTotal[4].ValueAccordion2 !== '직접입력' ? dataTotal[4].ValueAccordion2 : dataTotal[4].TextInput
    } và tôi bị dị ứng với ${generateText(
        dataBtnSuggestStep2,
        dataTotal[1].listBtnActive,
        dataTotal[1].textInput,
    )}. Tôi thích ăn ${
        dataTotal[2].valueAccordion1 !== '직접입력' ? dataTotal[2].valueAccordion1 : dataTotal[2].textInput1
    } và tôi không thích ăn đồ ăn có vị ${
        dataTotal[2].valueAccordion2 !== '직접입력' ? dataTotal[2].valueAccordion2 : dataTotal[2].textInput2
    }. Đặc biệt những bữa ăn tôi chỉ muốn có lượng calo vào khoảng ${dataTotal[5].ValueAccordion2} và ${
        dataTotal[3].ValueAccordion3
    }.Trả lời tôi bằng tiếng Hàn và hãy cho tôi bảng thống kê lượng calo của từng thực phẩm bạn đưa ra`;

    React.useEffect(() => {
        handleToggleBtn(true);
        callOpenAIAPI(text);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const callOpenAIAPI = async (question: string) => {
        try {
            const url = 'https://recipemakerapp-server.onrender.com/api';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });
            const result = await response.json();
            setAnswer(result.choices[0].message.content);
            setIsLoading(false);
            setResult1(true);
            Animated.timing(fadeAnim1, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                handleToggleBtn(false);
            });
        } catch (error) {
            setIsLoading(false);
            console.error('��� ~ callOpenAIAPI ~ error:', error);
        }
    };

    return !isLoading ? (
        <Layout percent={100} navigation={navigation} nextStep="StepOne" textBtnNext="처음으로">
            <ScrollView style={globalStyles.container}>
                {result1 && (
                    <Animated.View style={[{ opacity: fadeAnim1 }]}>
                        <Section>
                            <Row style={styles.row}>
                                <View style={styles.wrapGif}>
                                    <FastImage
                                        source={require('../../../assets/images/Animation.gif')}
                                        style={styles.gif}
                                    />
                                </View>
                                <Space width={8} />

                                <View style={styles.wrapResult}>
                                    <View>
                                        <Text style={styles.text}>{answer}</Text>
                                    </View>
                                </View>
                            </Row>
                        </Section>
                    </Animated.View>
                )}
            </ScrollView>
        </Layout>
    ) : (
        <Loading />
    );
};

const styles = StyleSheet.create({
    wrapGif: {
        padding: 6,
        borderColor: '#CBE9E7',
        borderWidth: 1,
        borderRadius: 99,
    },
    gif: {
        width: 18,
        height: 18,
    },
    row: {
        alignItems: 'baseline',
    },
    wrapResult: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: '#F2FFFB',
        borderColor: '#CBE9E7',
        borderWidth: 1,
    },
    text: {
        color: '#444',
        fontSize: 12,
        fontFamily: fontFamiles.NotoSansKRMedium,
        lineHeight: 20,
    },
    mb: {
        marginBottom: 16,
    },
    rowText: {
        alignItems: 'center',
    },
    rowPadding: {
        paddingLeft: 15,
    },
});
export default Recipes;
