import React, { Component } from 'react'
import './Calculator.css'

export class Calculator extends Component {
    constructor(props){
        super(props)

        this.state={
            op:""
        }
    }
  render() {
    return (
     <>
     <div className='maindiv'>
        <div className='container'>
        <form>
            <div>
                <input type='button'  className='output' value={this.state.op} disabled/>
            </div>
            <div>
                <input type='button' value={"AC"} onClick={()=>{
                    this.setState({
                    op:""
                })
                }} />

                <input type='button' value={"C"} onClick={()=>{
                    this.setState({
                        op:(this.state.op).substring(0,(this.state.op).length-1)
                    })
                }} />

                <input type='button' value={"%"} onClick={this.calcualte}/>
                <input type='button' value={"/"} onClick={this.calcualte}/>
            </div>

            <div>
                <input type='button' value={"7"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"7"
                    })
                }}/>

                <input type='button' value={"8"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"8"
                    })
                }}/>

               <input type='button' value={"9"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"9"
                    })
                }}/>
               <input type='button' value={"x"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"*"
                    })
                }}/>


            </div>

            <div>
                <input type='button' value={"4"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"4"
                    })
                }}/>
                <input type='button' value={"5"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"5"
                    })
                }}/>
                <input type='button' value={"6"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"6"
                    })
                }}/>
                <input type='button' value={"-"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"-"
                    })
                }}/>
            </div>

            <div>
                <input type='button' value={"1"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"1"
                    })
                }}/>
                <input type='button' value={"2"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"2"
                    })
                }}/>
                <input type='button' value={"3"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"3"
                    })
                }}/>
                <input type='button' value={"+"} onClick={()=>{
                    this.setState({
                        op: this.state.op+"+"
                    })
                }}/>
            </div>

            <div>
                <input type='button' value={"0"} onClick={()=>{
                    this.setState({
                        op:this.state.op+"0"
                    })
                }}/>
                <input type='button' value={"."} onClick={()=>{
                    this.setState({
                        op:this.state.op+"."
                    })
                }}/>
                <input type='button' value={"="} onClick={()=>{
                    this.setState({
                        op:eval(this.state.op)
                    })
                }}/>
            </div>
        </form>

        </div>
     </div>
     </>
    )
  }
}

export default Calculator
