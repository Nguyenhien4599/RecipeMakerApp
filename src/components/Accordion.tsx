import React, { useEffect, useState } from 'react';
import { Animated, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../constants/Colors';
import { globalStyles } from '../styles/globalStyles';
import Row from './Row';
import IconArrowDown from './svg/IconArrowDown';

interface IProps {
    placeholder: string;
    items: string[];
}

const Accordion = ({ placeholder = '', items = [] }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [content, setContent] = React.useState('');

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const contentHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 120],
    });

    const handlePressItem = (text: string) => () => {
        setContent(text);
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.wrapText}>
                <Row style={[globalStyles.spaceBetween]}>
                    <Text
                        style={[
                            globalStyles.text,
                            globalStyles.container,
                            { color: !content ? colors.textDisabled : colors.textInput },
                        ]}
                    >
                        {content || placeholder}
                    </Text>
                    <IconArrowDown />
                </Row>
            </TouchableOpacity>

            <Animated.View style={[styles.wrapItem, { height: contentHeight }]}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={handlePressItem(item)}>
                            <Text style={[globalStyles.text, styles.item, { color: colors.textInput }]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    wrapText: {
        padding: 8,
        borderBottomColor: colors.placeholder,
        borderBottomWidth: 1,
    },
    wrapItem: {
        backgroundColor: '#FAFAFA',
        overflow: 'hidden', // Đảm bảo rằng phần nội dung sẽ không lộ ra ngoài khi thu lại
    },
    item: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
});

export default Accordion;
