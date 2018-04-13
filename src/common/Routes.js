import { StackNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from '../components/Home/Home';

export default StackNavigator(
    {
        home: HomeScreen
    },
    {
        initialRouteName: 'home',
        navigationOptions: {}
    }
);

// import AuthLoadingScreen from './loadingScreen';
// import HomeScreen from '../components/Home/Home';
// import OtherScreen from '../components/UserRoute/UserRoute';
// import SignInScreen from '../components/SignInScreen/SignInScreen';
//
// const AppStack = StackNavigator(
//     {
//         Home: HomeScreen,
//         Other: OtherScreen
//     },
//     {
//         navigationOptions: {
//             headerStyle: {
//                 display: 'none'
//             }
//         }
//     }
// );
// const AuthStack = StackNavigator({ SignIn: SignInScreen });
//
// export default SwitchNavigator(
//     {
//         AuthLoading: AuthLoadingScreen,
//         App: AppStack,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'AuthLoading',
//     }
// );