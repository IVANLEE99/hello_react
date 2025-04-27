import Count from "../../components/Count";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../../redux/count_action";
const mapStateToProps = (state) => ({ count: state });
const mapDispatchToProps = (dispatch) => ({
  increment: (data) => dispatch(incrementAction(data)),
  decrement: (data) => dispatch(decrementAction(data)),
  incrementAsync: (data, time) => dispatch(incrementAsyncAction(data, time)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Count);
