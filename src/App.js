import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  increment = () => {
    this.props.dispatch({type: "INCREMENT"});
  }

  decrement = () => {
    this.props.dispatch({type: "DECREMENT"});
  }
  render() {
    return (
      <div style={{ margin: '200px auto' }}>
        <button onClick={this.decrement} style={{ mouse: 'pointer' }}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
})
export default connect(mapStateToProps)(App);
