import React from 'react';
import { connect } from 'react-redux';

import { testAction } from '../../actions/test'

import { View, Text } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        headerTitle: 'Home Component title'
    };

    componentDidMount() {
        this.props.testAction();
    };

    render() {
        return (
            <View>
                <Text>This is the "Home" component</Text>
                <Text>{this.props.test}</Text>
            </View>
        );
    };
};

function mapState(state) {
    return {
        test: state.test
    }
};

export default connect(mapState, { testAction })(Home);