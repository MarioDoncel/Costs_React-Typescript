import React from 'react';

import { LoadingContainer } from './styles';
import loading from '../../assets/loading.svg'

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
        <img src={loading} alt="Loading" />
    </LoadingContainer>
);
}

export default Loading;