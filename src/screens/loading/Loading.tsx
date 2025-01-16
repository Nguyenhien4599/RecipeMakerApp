import LottieView from 'lottie-react-native';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import { fontFamiles } from '../../constants/FontFamilies';
import useCombinedStore from '../../hooks/useCombinedStore';
import { globalStyles } from '../../styles/globalStyles';
import answerStore from '../../stores/answer';
import { dataBtnSuggestStep2, dataBtnSuggestStep3 } from '../../constants/ListDataSuggest';
import { generateText } from '../../utils/generateText';

const Loading = ({ navigation, route }: any) => {
    const { handleChangeData } = answerStore();
    const dataTotal: any = useCombinedStore();
    const text = `bạn hãy cho tôi chế độ dinh dưỡng(${dataTotal[4].ValueAccordion1}) khẩu phần ăn cho ${
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
        if (route.params && route.params.param === 'back') {
            console.log('run');
            navigation.goBack();
            return;
        }
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
            handleChangeData(result.choices[0].message.content);
            navigation.navigate('Recipes');
        } catch (error) {
            console.error('��� ~ callOpenAIAPI ~ error:', error);
        }
    };

    return (
        <View style={[globalStyles.container, globalStyles.center]}>
            <LottieView
                source={require('../../../assets/lottie/loading.json')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: 240, height: 240 }}
                autoPlay
                loop
            />
            <View style={styles.wrapText}>
                <Text style={[globalStyles.title, styles.text]}>조리중에 있습니다. </Text>
                <Text style={[globalStyles.title, styles.text]}>잠시만 기다려 주세요.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gif: {
        width: 240,
        height: 240,
    },
    wrapText: {
        marginTop: 16,
        alignItems: 'center',
    },
    text: {
        fontFamily: fontFamiles.NotoSansKRMedium,
        ...(Platform.OS === 'android' && { lineHeight: 32 }),
    },
});

export default Loading;
