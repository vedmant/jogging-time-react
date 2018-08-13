import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AuthActions from '../Redux/AuthRedux'
import { ApplicationStyles, Metrics } from '../Themes'

class DashboardScreen extends Component {

  static navigationOptions = {
    title: 'Dashboard',
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          Dashboard

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
})


const mapStateToProps = (state) => ({
  me: state.auth.me,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
  checkLogin: () => dispatch(AuthActions.checkLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
