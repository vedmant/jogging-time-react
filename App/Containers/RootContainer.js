import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import NavigationBar from 'react-native-navbar';
import AppConfig from '../Config/AppConfig'
import styles from './Styles/RootContainerStyles'
import { NavigationActions } from 'react-navigation'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (! ReduxPersist.active) {
      this.props.startup()
    }
  }

  goNext () {
    alert('go')
  }

  render () {
    return (
      <View style={styles.applicationView}>
        {/*<StatusBar barStyle='light-content' />*/}
        <NavigationBar
          title={{title: AppConfig.appName}}
          rightButton={{title: 'Next', handler: () => this.props.navigate('LoginScreen')}}
          style={{borderBottomWidth: 1, borderBottomColor: '#d3e0e9'}}
        />
        <ReduxNavigation/>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
})

export default connect(null, mapDispatchToProps)(RootContainer)
