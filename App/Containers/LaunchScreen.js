import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import styles from './Styles/LaunchScreenStyles'
import AuthActions from '../Redux/AuthRedux'

class LaunchScreen extends Component {
  render () {

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              This is sample front screen.
            </Text>
          </View>

          {this.props.me ? ('Logged In') : (
            <View>
              <RoundedButton onPress={() => this.props.navigate('LoginScreen')}>Login</RoundedButton>
              <RoundedButton onPress={() => this.props.navigate('LoginScreen')}>Register</RoundedButton>
            </View>
          )}

          <RoundedButton onPress={() => this.testButton()}>Test</RoundedButton>

        </ScrollView>
      </View>
    )
  }

  testButton () {
    this.props.checkLogin()
  }
}

const mapStateToProps = (state) => ({
  me: state.auth.me,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
  checkLogin: () => dispatch(AuthActions.checkLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
