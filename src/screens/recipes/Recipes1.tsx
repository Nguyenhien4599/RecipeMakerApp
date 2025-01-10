import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { globalStyles } from '../../styles/globalStyles';
import Layout from '../../layout';
import { Row, Section, Space } from '../../components';
import { fontFamiles } from '../../constants/FontFamilies';
import { colors } from '../../constants/Colors';
import toggleBtnFooterStore from '../../stores/toggleBtnFooter';

const Recipes1 = ({ navigation }: any) => {
    const headers = ['영양소', '양', '%'];
    const data = [
        ['칼로리', '450kcal', '22%'],
        ['단백질', '25g', '50%'],
        ['탄수화물', '14g', '5%'],

        ['포화지방', '35g', '45%'],
        ['식이섬유', '5g', '20%'],
        ['나트륨', '250mg', '10'],
    ];
    const { handleToggleBtn } = toggleBtnFooterStore();
    React.useEffect(() => {
        handleToggleBtn(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Layout percent={100} navigation={navigation} nextStep="StepOne" textBtnNext="처음으로">
            <ScrollView style={globalStyles.container}>
                <Section>
                    <Row style={styles.row}>
                        <View style={styles.wrapGif}>
                            <FastImage source={require('../../../assets/images/Animation.gif')} style={styles.gif} />
                        </View>
                        <Space width={8} />
                        <View style={[globalStyles.container, styles.wrapResult]}>
                            <Text style={[styles.text, styles.mb, { fontFamily: fontFamiles.NotoSansKRBold }]}>
                                상세 영양 성분표(1인분 기준)
                            </Text>

                            <Row>
                                {headers.map((item, index) => (
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.tdHeader,
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            !index && {
                                                borderTopLeftRadius: 8,
                                            },
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            index + 1 === headers.length && {
                                                borderTopRightRadius: 8,
                                            },
                                        ]}
                                        key={index}
                                    >
                                        {item}
                                    </Text>
                                ))}
                            </Row>
                            {data.map((item, idx) => (
                                <Row key={idx}>
                                    {item.map((text, index) => (
                                        <Text
                                            style={[
                                                styles.tdBodyTable,
                                                styles.text,
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                {
                                                    backgroundColor: 'transparent',
                                                    fontFamily: fontFamiles.NotoSansKRMedium,
                                                },
                                                !index && { fontFamily: fontFamiles.NotoSansKRBold },
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                !index && idx + 1 === data.length && { borderBottomLeftRadius: 8 },
                                                idx + 1 === data.length &&
                                                    // eslint-disable-next-line react-native/no-inline-styles
                                                    index + 1 === item.length && { borderBottomRightRadius: 8 },
                                                index % 2 !== 0 && styles.hiddenBorderOdd,
                                                // index === 2 && { borderLeftWidth: 0 },
                                            ]}
                                            key={index}
                                        >
                                            {text}
                                        </Text>
                                    ))}
                                </Row>
                            ))}
                        </View>
                    </Row>
                </Section>
            </ScrollView>
        </Layout>
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
    tdHeader: {
        width: '33.33%',
        padding: 8,
        backgroundColor: colors.textDisabled,
        fontFamily: fontFamiles.NotoSansKRBold,
        borderWidth: 1,
        borderColor: '#999',
    },
    tdBodyTable: {
        width: '33.33%',
        padding: 8,
        fontFamily: fontFamiles.NotoSansKRMedium,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#999',
    },
    mb: {
        marginBottom: 8,
    },
    hiddenBorderOdd: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
});
export default Recipes1;
