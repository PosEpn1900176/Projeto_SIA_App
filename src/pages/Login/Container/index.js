//--> Manipulação de Componente
import React from 'react';
import { Alert } from 'react-native';

//--> Importar o arquivo de apresentação da tela
import LoginPresentation from '../Presentation';

const LoginContainer = props => {
    function HandleLogin() {
        Alert.alert('Teste de entrada da tela');
    }
    return (
        <LoginPresentation onLogin={HandleLogin} />
    );
};

export default LoginContainer;