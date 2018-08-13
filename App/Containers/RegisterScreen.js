import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { NavigationActions } from 'react-navigation'
import { Button, Card, Icon, FormInput, FormLabel } from 'react-native-elements'
import { ApplicationStyles, Colors, Fonts } from '../Themes'

class RegisterScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      error: null,
    }
  }

  onLogin () {
    this.props.login(this.state)
      .then(() => alert('Logged In'))
      .catch(err => this.setState({error: err.response.data}))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Text style={Fonts.style.normal}>Please type your Email and Password to login</Text>
          </View>

          <Card>
            {this.state.error ?
              <View style={styles.smallSection}>
                <Text style={{...Fonts.style.normal, color: '#ff0000'}}>{ this.state.error.message }</Text>
              </View>
              : null}

            <FormLabel>Name</FormLabel>
            <FormInput
              placeholder='Enter your name'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(name) => this.setState({name})}
            />

            <FormLabel>Email</FormLabel>
            <FormInput
              placeholder='Enter your email'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(email) => this.setState({email})}
            />

            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry={true}
              placeholder='Enter your password'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(password) => this.setState({password})}
            />

            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              secureTextEntry={true}
              placeholder='Confirm your password'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(confirm_password) => this.setState({confirm_password})}
            />

            <View style={{marginTop: 20}}>
              <Button title='Login' onPress={() => this.onLogin()}
                      fontSize={Fonts.size.regular}
                      color={styles.primaryButton.color}
                      backgroundColor={styles.primaryButton.backgroundColor}
              />
            </View>

          </Card>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
})

export default connect(
  null,
  dispatch => ({
    navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
    register: (data) => dispatch(AuthActions.register(data)),
  })
)(RegisterScreen)
