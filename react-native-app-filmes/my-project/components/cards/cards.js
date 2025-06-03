import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from '../../style.js';
import { db_films } from '../../database.js';

export default function Cards() {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            {db_films.map((film) => (
                <TouchableOpacity  style={styles.containerJogos}>
                    <Image style={styles.images} source={{ uri: film.img }} />
                    <Text style={styles.titulo}>{film.nome}</Text>
                    <Text style={styles.textNota}>{film.nota}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}