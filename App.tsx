import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function formulario() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState(0)
  const [sexos, setSexos] = useState([
    { key: 1, sexoNome: 'Masculino' },
    { key: 2, sexoNome: 'Feminino' }
  ])

  let sexoX = sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome} />
  })

  return (
    <View style={styles.container}>
      <Text style={styles.txtForm}>
        Formulário Teste
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={(novoTexto) => setNome(novoTexto)}
        placeholder='Digite seu nome'
      />

      <TextInput
        style={styles.input}
        onChangeText={(novoIdade) => setIdade(novoIdade)}
        placeholder='Digite sua idade'
      />


      <Picker
        style={styles.picker}
        selectedValue={sexo}
        onValueChange={(itemValue, ItemIndex) => setSexo(itemValue)}
      >
        {sexoX}
      </Picker>

<View style={styles.div}></View>

      <Text style={styles.txtForm}>
        Dados recebidos
      </Text>
      <Text style={styles.txtFinal}>Nome: {nome}</Text>
      <Text style={styles.txtFinal}>Idade: {idade}</Text>
      <Text style={styles.txtFinal}>Sexo: {sexos[sexo].sexoNome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  txtForm: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  input: {
    height: 40,
    borderWidth: 2,
    margin: 15,
  },

  txtFinal: {
    fontSize: 25,
    marginStart: 20
  },

  picker: {
    marginStart: 13,
  },

  div:{
    borderBottomWidth: 1,
    borderColor: '#fffffff',
    marginTop: 200,
  }
})