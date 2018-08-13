import React from 'react'
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

const ReduxAppNavigator = reduxifyNavigator(AppNavigation, 'root')

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props
    if (nav.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

  render () {
    const {dispatch, nav} = this.props

    return <ReduxAppNavigator dispatch={dispatch} state={nav} />
  }
}

export default connect(state => ({nav: state.nav}))(ReduxNavigation)
