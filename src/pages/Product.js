import React, { Component } from 'react'
import {connect} from 'react-redux'


class Product extends Component {
    increase = () => {
        this.props.dispatch({type:'INCREMENT_PRICE'})
    }

    decrease = () => {
        this.props.dispatch({type:'DECREMENT_PRICE'})
    }
    render() {
        return (
            <div style={{ padding:'8px', margin:'10px', border: '1px solid green' }}>
                <h3>This is inside product Component</h3>
                <button onClick={this.increase}>+</button>
                <p>{this.props.counting}</p>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    counting: state.priceReducer.price
})
export default connect(mapStateToProps)(Product)