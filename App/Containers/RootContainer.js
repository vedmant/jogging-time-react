import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { NavigationActions } from 'react-navigation'
import { Colors, Fonts, Metrics } from '../Themes'

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
        <ReduxNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin,
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
})


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  navigate: (route) => dispatch(NavigationActions.navigate({routeName: route})),
})

export default connect(null, mapDispatchToProps)(RootContainer)
