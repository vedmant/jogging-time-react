import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Images } from '../Themes'
// Styles
import styles from './Styles/LaunchScreenStyles'
import Config from 'react-native-config'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

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

          <RoundedButton onPress={this.testButton}>
            Test button
          </RoundedButton>

          <DevscreensButton/>
        </ScrollView>
      </View>
    )
  }

  testButton () {
    alert('test')
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
})

export default connect(null, mapDispatchToProps)(LaunchScreen)
