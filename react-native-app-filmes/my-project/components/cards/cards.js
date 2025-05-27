import { Image, Text, TouchableOpacity } from "react-native";
import styles from '../../style.js';
import {db_films} from '../../database.js';



export default function Cards({nome, img}){

    return(
        <TouchableOpacity style={styles.containerJogos }>
            <Image style={styles.images} source={{uri:img}}/>
            <Text style={styles.titulo}>{nome} </Text>
            <Text style={styles.textNota}>NOTA DO FILME </Text>
        </TouchableOpacity>

    )
}