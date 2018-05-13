import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AuthActions from '../Redux/AuthRedux'
import { ApplicationStyles, Metrics } from '../Themes'

class LaunchScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  }

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

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
})


const mapStateToProps = (state) => ({
  me: state.auth.me,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
  checkLogin: () => dispatch(AuthActions.checkLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
