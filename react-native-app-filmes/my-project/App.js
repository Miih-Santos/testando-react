import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, FlatList} from 'react-native';
import styles from './style.js'
import Header from './components/header/header.js'
import Banner from './components/banner/banner.js'
import Cards from './components/cards/cards.js'
import { db_films } from './database.js';


export default function App(){
  return (
    <View style={styles.container}>

      <Header/>
      <Banner/>
      <View style={styles.sla}>

        <FlatList 
          data={db_films}
          horizontal={true}
          keyExtractor={(item) => item.id} 

          renderItem={({ item }) => (
            <Cards titulo ={item.nome} imagem ={item.img} nota={item.nota}/>

          )}
        />

      </View>
    </View>
  );
}

