import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { NavigationActions } from 'react-navigation'
import { Button, Card, Icon, FormInput, FormLabel } from 'react-native-elements'
import { ApplicationStyles, Colors, Fonts } from '../Themes'

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null,
    }
  }

  onLogin () {
    this.props.login(this.state)
      .then(() => alert('ok'))
      .catch(err => this.setState({error: err.response.data}))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content}>

          <View style={styles.section}>
            <Text style={Fonts.style.normal}>Please type your Email and Password to login</Text>
          </View>

          <Card>
            {this.state.error ?
              <View style={styles.smallSection}>
                <Text style={{...Fonts.style.normal, color: '#ff0000'}}>{ this.state.error.message }</Text>
              </View>
              : null}

            <FormLabel>Email</FormLabel>
            <FormInput
              placeholder='Enter your email'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(email) => this.setState({email})}
            />

            <FormLabel>Password</FormLabel>
            <FormInput
              placeholder='Enter your password'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(password) => this.setState({password})}
            />

            <View style={{marginTop: 20}}>
              <Button title='Login' onPress={() => this.onLogin()}
                      fontSize={Fonts.size.regular}
                      buttonStyle={styles.primaryButton}
              />
            </View>

          </Card>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  form: {
    marginBottom: 40,
  },
  primaryButton: {
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
})

const mapStateToProps = (state) => ({
  me: state.auth.me,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
  login: (credentials) => dispatch(AuthActions.login(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
