//Reactotron config example :
//      https://github.com/infinitered/reactotron/blob/master/packages/demo-react-native/App/Config/ReactotronConfig.js

import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native';

import config from './config/config';

Reactotron.configure({
        name: config.displayName,
});

Reactotron.use(reduxPlugin());
Reactotron.use(trackGlobalErrors());
Reactotron.use(openInEditor());
Reactotron.use(overlay());
Reactotron.use(asyncStorage());
Reactotron.use(networking());

Reactotron.connect()

if (__DEV__) {
    Reactotron.connect()
    Reactotron.clear()
}
    // .useReactNative() // add all built-in react native plugins
    // .connect() // let's connect!