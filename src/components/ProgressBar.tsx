import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Text } from 'react-native-paper';

import { Row, Section } from '../components';
import { colors } from '../constants/Colors';
import { globalStyles } from '../styles/globalStyles';

interface IProps {
    progress: number;
}

const ProgressBar = ({ progress = 25 }: IProps) => {
    const progressAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress]);

    return (
        <Section>
            <Row style={globalStyles.spaceBetween}>
                <Text style={[globalStyles.text, styles.text, styles.textPrimaryColor]}>성향 분석</Text>
                <Text style={[globalStyles.text, styles.text, progress >= 50 && styles.textPrimaryColor]}>
                    정보 수집
                </Text>
                <Text style={[globalStyles.text, styles.text, progress === 100 && styles.textPrimaryColor]}>
                    맞춤 생성
                </Text>
            </Row>
            <View style={styles.progressBarContainer}>
                <Animated.View
                    style={[
                        styles.progressBarFill,
                        {
                            width: progressAnim.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />
            </View>
        </Section>
    );
};

const styles = StyleSheet.create({
    text: {
        letterSpacing: -0.84,
        color: colors.textDisabled,
    },
    textPrimaryColor: {
        color: colors.primary,
    },
    progressBarContainer: {
        width: '100%',
        backgroundColor: '#EEEEEE',
        borderRadius: 100,
        height: 8,
        overflow: 'hidden',
    },
    progressBarFill: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        height: '100%',
    },
});

export default ProgressBar;
