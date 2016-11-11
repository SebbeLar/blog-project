import Home from '../components/home';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/valueActions';

const mapStateToProps = function(state) {
    return {
        value: state.values.homeValue
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};
const homeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default homeContainer;
