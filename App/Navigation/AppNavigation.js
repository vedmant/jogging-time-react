import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'
import { Platform, StatusBar } from 'react-native'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import styles from './Styles/NavigationStyles'
import { FontAwesome } from 'react-native-vector-icons'

export const SignedOut = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {title: 'Home'},
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {title: 'Register'},
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {title: 'Login'},
  },
}, {
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
})


// export const TabsNav = TabNavigator({
//   DashboardScreen: {
//     screen: DashboardScreen,
//     navigationOptions: {
//       tabBarLabel: 'Dashboard',
//       tabBarIcon: ({tintColor}) => (
//         <FontAwesome name="user" size={30} color={tintColor}/>
//       ),
//     },
//   },
// })

export default SignedOut

//
// SwitchNavigator({
//   TabsNav: {screen: TabsNav},
//   SignedOut: {screen: SignedOut},
// }, {
//   initialRouteName: 'SignedOut',
// })
