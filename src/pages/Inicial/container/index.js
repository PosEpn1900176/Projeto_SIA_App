import React from 'react';
import { Alert } from 'react-native';
import AppPresentation from '../Presentation';

const AppContainer = props => {
    function handleTelaNova() {
        Alert.alert("Chamar Tela nova.");
    }

    return (
        <AppPresentation TelaNova={handleTelaNova}></AppPresentation>
    );
};

export default AppContainer;