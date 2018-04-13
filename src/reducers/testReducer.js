export default function testReducer(state = '', action = {}) {
    switch(action.type) {
        case 'TEST':
            return action.message;

        default:
            return state;
    };
};