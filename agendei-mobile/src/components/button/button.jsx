import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    function TesteClick() {
        Alert.alert("Clicou no nosso botão");
    }

    return <TouchableOpacity

        style={[styles.btn,
        props.theme == "danger" ?
            styles.danger : styles.primary]}

        onPress={TesteClick} >
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>

}

export default Button;