import React from 'react';
import { styles } from './styles';
import { 
    Text, 
    TextProps,
    View, 
} from 'react-native';

//interface que o componente recebe para gerar o texto e estiliza-lo na box
interface Props extends TextProps {
    text: string,
}

//Componente genérico para a criação de uma caixa de texto no aplicativo
export function TextBox({ text, ...rest}: Props) {
  return (
    <View style={styles.container}>
        <Text {...rest}>
            {text}
        </Text>
    </View>
  );
}