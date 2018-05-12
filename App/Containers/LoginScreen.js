import React, { Component } from 'react'
import { TextInput, ScrollView, Text, View } from 'react-native'
import styles from './Styles/LaunchScreenStyles'
import Fonts from '../Themes/Fonts'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { NavigationActions } from 'react-navigation'

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onLogin () {
    this.props.login(this.state)
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
              onChangeText={(password) => this.setState({password})}
            />
          </View>

          <RoundedButton onPress={() => this.onLogin()}>Login</RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  me: state.auth.me,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
  login: (credentials) => dispatch(AuthActions.login(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
