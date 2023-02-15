import {Component} from "react" 

class LightDarkMode extends Component {

    state={isLogged:true} 

    change=()=>{
        setState((prevState)=>{
            return ({isLogged:!prevState.isLogged})
        })
    }

    render(){

        const {isLogged}=this.state

         return({isLogged?
         <div className="totalContainer">
                             <div className="bg-container1">
                               <h1 className="heading1">Click To Change Mode</h1> 
                                 <button className="button1" onClick={this.change}>LightMode</button>
                                      </div>
                                       </div> 
                                          :
                                 <div className="totalContainer">
                                    <div className="bg-container2">
                                     <h1 className="heading2">Click To Change Mode</h1> 
                                          <button onClick={this.change} className="button2">DarkMode</button>
                                            </div>
                                            </div>}
         )
    }
}
export default LightDarkMode    