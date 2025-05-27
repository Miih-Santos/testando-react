import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, Image} from 'react-native';
import pipocaIcon from './images/pipoca-icon.png'
import styles from './../../style.js';

export default function Header() {
  return (
    <View>
      <View style={styles.cabecalhoDisplay}>
          <View>
            <Image source={pipocaIcon} style={styles.imagemLogo} resizeMode="contain"/>
          </View>
          <View style={styles.tituloContainer}>
            <Text style={styles.tituloPrincipal}>The Better Films</Text>
          </View>
          <View>
              <TextInput style={styles.inputCabecalho} placeholder="Pesquisa..."/>
          </View>
      </View>
    </View>
  );
}
