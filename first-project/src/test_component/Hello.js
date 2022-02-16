import { Component } from "react";

class Hello extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increament(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return (
        <div>
            <h1>Hello React</h1>
            <button onClick={()=> this.increament()}>Click to Increase Count {this.state.count}</button>
        </div>
        )
    }
}

export default Hello