import {Component} from "react" 

import "./index.css"

class LightDarkMode extends Component {

    state={Logged:true} 

    change=()=>{
        setState((prevState)=>({Logged:!prevState.Logged}))
    }

    render(){

        const {Logged}=this.state

        console.log(Logged)

        const b=<div className="totalContainer">
                             <div className="bg-container1">
                               <h1 className="heading1">Click To Change Mode</h1> 
                            <button className="button1" onClick={this.change}>LightMode</button>
                            </div>
                            </div>

        const c=<div className="totalContainer">
                    <div className="bg-container2">
                    <h1 className="heading2">Click To Change Mode</h1> 
                     <button onClick={this.change} className="button2">DarkMode</button>
                         </div>
                    </div>

            {Logged?return (a):return (b)}
                            
    }
}
export default LightDarkMode    
