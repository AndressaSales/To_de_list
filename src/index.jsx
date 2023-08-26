import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";

class Componente extends React.Component{
    render(){
        return(
            <div>
                <App />
            </div>
        );
    }
}
ReactDOM.render(<Componente />, document.getElementById('root'))