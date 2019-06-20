import React from "react"

// function App() {
//     return (
//         <div>
//             <h1>Code,code,code</h1>
//         </div>
//     )
// }

class App extends React.Component {

    yourMethodHere() {

    }
    
    render() {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )    
    }
}

export default App
