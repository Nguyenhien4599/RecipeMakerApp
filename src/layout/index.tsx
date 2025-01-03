import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import Container from '../components/Container';
import ProgressBar from '../components/ProgressBar';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/Colors';
import { Row, Space, Section } from '../components';
import toggleBtnFooterStore from '../stores/toggleBtnFooter';
import { fontFamiles } from '../constants/FontFamilies';

interface IProps {
    children: React.ReactNode;
    onlybtnNext?: boolean;
    nextStep: string;
    percent: number;
    navigation: any;
}

const Index = ({ children, onlybtnNext = false, nextStep, percent, navigation }: IProps) => {
    const { isDisable } = toggleBtnFooterStore();

    const handleNextStep = () => {
        navigation.navigate(nextStep);
    };

    return (
        <Container>
            <ProgressBar progress={percent} />
            {children}
            <Section styles={styles.wrapBtnfooter}>
                {onlybtnNext ? (
                    <Button
                        disabled={isDisable}
                        style={[globalStyles.borderRadius]}
                        // eslint-disable-next-line react-native/no-inline-styles
                        labelStyle={{ color: colors.backgroundColor, fontSize: 18 }}
                        mode="contained"
                        onPress={handleNextStep}
                    >
                        다음
                    </Button>
                ) : (
                    <Row>
                        <Button
                            style={[globalStyles.borderRadius, globalStyles.container]}
                            mode="outlined"
                            // eslint-disable-next-line react-native/no-inline-styles
                            labelStyle={{ fontFamily: fontFamiles.NotoSansKRBold, fontSize: 18 }}
                            onPress={() => navigation.goBack()}
                        >
                            이전
                        </Button>
                        <Space width={22} />
                        <Button
                            disabled={isDisable}
                            style={[globalStyles.borderRadius, globalStyles.container]}
                            // eslint-disable-next-line react-native/no-inline-styles
                            labelStyle={{
                                color: colors.backgroundColor,
                                fontFamily: fontFamiles.NotoSansKRBold,
                                fontSize: 18,
                            }}
                            mode="contained"
                            onPress={handleNextStep}
                        >
                            다음
                        </Button>
                    </Row>
                )}
            </Section>
        </Container>
    );
};

const styles = StyleSheet.create({
    wrapBtnfooter: {
        paddingTop: 15,
        paddingBottom: 8,
        shadowColor: '#bdc3c7',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#bdc3c7',
    },
});

export default Index;
