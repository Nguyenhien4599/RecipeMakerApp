import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import Container from '../components/Container';
import ProgressBar from '../components/ProgressBar';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/Colors';
import { Row, Space, Section } from '../components';
import toggleBtnFooterStore from '../stores/toggleBtnFooter';

interface IProps {
    children: React.ReactNode;
    onlybtnNext?: boolean;
}

const Index = ({ children, onlybtnNext = false }: IProps) => {
    const { isDisable } = toggleBtnFooterStore();
    return (
        <Container>
            <ProgressBar progress={25} />
            {children}
            <Section styles={styles.nonePaddingBottom}>
                {onlybtnNext ? (
                    <Button
                        disabled={isDisable}
                        style={[globalStyles.borderRadius]}
                        labelStyle={{ color: colors.backgroundColor }}
                        mode="contained"
                        onPress={() => console.log('Pressed')}
                    >
                        다음
                    </Button>
                ) : (
                    <Row>
                        <Button
                            style={[globalStyles.borderRadius, globalStyles.container]}
                            labelStyle={{ color: colors.backgroundColor }}
                            mode="contained"
                            onPress={() => console.log('Pressed')}
                        >
                            이전
                        </Button>
                        <Space width={22} />
                        <Button
                            disabled={isDisable}
                            style={[globalStyles.borderRadius, globalStyles.container]}
                            labelStyle={{ color: colors.backgroundColor }}
                            mode="contained"
                            onPress={() => console.log('Pressed')}
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
    nonePaddingBottom: {
        paddingBottom: 0,
    },
});

export default Index;
