import React from 'react';

import Container from '../components/Container';
import ProgressBar from '../components/ProgressBar';

interface IProps {
    children: React.ReactNode;
}

const Index = ({ children }: IProps) => {
    return (
        <Container>
            <ProgressBar />
            {children}
        </Container>
    );
};

export default Index;
