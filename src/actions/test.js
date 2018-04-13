export function testAction() {
    return dispatch =>
        dispatch({
            type: 'TEST',
            message: 'Some test text from redux action'
        });
};