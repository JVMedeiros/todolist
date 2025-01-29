import { useState } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./styles";


export function Home() {
  const [task, setTask] = useState('')

  return (
    <>
      <View style={styles.container}>
        {/* Container do header */}
        <View style={styles.header}>
        </View>
        {/* Container da adição da task */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Descrição da Tarefa">
          </TextInput>
          <Button />
        </View>


      </View>
    </>
  )
}