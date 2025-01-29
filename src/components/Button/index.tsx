import { TouchableOpacity, View, Text } from "react-native";
import {styles } from './styles'

export function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
    </View>
  )
}