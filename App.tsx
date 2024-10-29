import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function formulario() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [valor, setValor] = useState(500)
  const [sexo, setSexo] = useState(0)
  const [status, setStatus] = useState(false)
  const [sexos, setSexos] = useState([
    { key: 1, sexoNome: 'Masculino' },
    { key: 2, sexoNome: 'Feminino' }
  ])

  let sexoX = sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome} />
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer1}>
        <Text style={styles.txtHeader1}>
          G.A
        </Text>
        <Text style={styles.txtHeader2}>
          BANK
        </Text>
      </View>
      <View style={styles.headerContainerx}>
        <Text style={styles.txtInput}> Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(novoTexto) => setNome(novoTexto)}
          placeholder='  Digite seu nome'
        />

        <Text style={styles.txtInput}> Digite sua idade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(novoIdade) => setIdade(novoIdade)}
          placeholder='  Digite sua idade'
        />


        <Picker
          style={styles.picker}
          selectedValue={sexo}
          onValueChange={(itemValue, ItemIndex) => setSexo(itemValue)}
        >
          {sexoX}
        </Picker>

        <Text style={styles.txtSlider}>Escolha seu limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          style={styles.txtSlider}
        />
        <Text style={styles.txtSlider}>Valor: {valor.toFixed(0)}</Text>



        <Text style={styles.txtSlider}>
          Está cursando algum curso superior?
        </Text>
        <Switch
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  headerContainer1: {
    backgroundColor: '#612F74'
  },

  headerContainerx: {
    borderRadius: 15,
  },

  txtHeader1: {
    fontSize: 45,
    fontWeight: 'bold',
    marginStart: 112,
    marginTop: 20,
    padding: 5,
  },

  txtHeader2: {
    fontSize: 45,
    fontWeight: 'bold',
    marginStart: 160,
    marginTop: -25,
  },

  input: {
    height: 40,
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,

  },

  txtInput: {
    fontSize: 20,
    marginStart: 10,
    marginTop: 10,
    marginBottom: -8,
  },

  txtFinal: {
    fontSize: 25,
    marginStart: 20
  },

  picker: {
    marginStart: 13,
  },

  div: {
    borderBottomWidth: 1,
    borderColor: '#fffffff',
    marginTop: 200,
  },

  txtSlider: {
    fontSize: 20,
    marginStart: 20,
    marginTop: 10,
  }
})