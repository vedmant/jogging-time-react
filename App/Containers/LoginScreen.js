import React, { Component } from 'react'
import { TextInput, ScrollView, Text, View } from 'react-native'
import styles from './Styles/LaunchScreenStyles'
import Fonts from '../Themes/Fonts'
import RoundedButton from '../Components/RoundedButton'

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Text style={Fonts.style.h2}>Login</Text>
          </View>

          <View style={styles.inputSection}>
            <TextInput
              style={{height: 60, fontSize: 18, marginHorizontal: 0}}
              placeholder='E-Mail Address'
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              secureTextEntry={true}
              style={{height: 60, fontSize: 18}}
              placeholder='Password'
              onChangeText={(passowrd) => this.setState({passowrd})}
            />
          </View>

          <RoundedButton onPress={this.testButton}>
            Login
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }

  testButton () {
    alert('test')
  }
}
