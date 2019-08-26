import React, { Component } from 'react'
import Product from './Product';
import { connect } from 'react-redux';

class Company extends Component {

    increase = () => {
        this.props.dispatch({type: "INCREMENT"})
    }

    decrease = () => {
        this.props.dispatch({type: "DECREMENT"})
    }

    render() {
        return (
            <div style={{ width: '400px', height: '400px', margin: "100px auto" }}>
                <div style={{ padding:'8px', margin:'10px', border: '1px solid grey' }}>
                    <h3>This is inside company component that calls the product component</h3>
                    <button onClick={this.increase}>+</button>
                    <p>{this.props.mycount}</p>
                    <button onClick={this.decrease}>-</button>
                    <Product />
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    mycount: state.countReducer.count
})
export default connect(mapStateToProps)(Company)