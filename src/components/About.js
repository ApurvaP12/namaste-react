import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";


class About extends Component {

    
    constructor(props) {
        super(props);
       console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render");
        return(
            <>
                <div className="about-page-container" style={{textAlign:"center"}}>
                    <h1>⚒️ Builing: About Page 🛠️ </h1>
                </div>
                <div style={{display: 'flex'}}>
                    <User name={"Apurva Potdar"} location={"Pune"} bio={"Developer"}/>
                    <UserClass name={"First "} location={"Pune, Maharashtra"} bio={"Developer"}/>
                    {/* <UserClass name={"Second "} location={"Pune, Maharashtra"} email={"deepakmangela.2@gmail.com"}/>
                    <UserClass name={"Third "} location={"Pune, Maharashtra"} email={"deepakmangela.2@gmail.com"}/> */}
                </div>
                <div>Logged In user from User Context inside a Class based component:
                    <UserContext.Consumer>{({loggedInUser})=> <h2>{loggedInUser}</h2>}</UserContext.Consumer>
                </div>
                
            </>
        )
    }
}

// Console Output:

// Parent constructor
// About.js:19 Parent render
// UserClass.js:6 Child constructor
// UserClass.js:21 Child render
// UserClass.js:17 Child componentDidMount
// About.js:15 Parent componentDidMount


// const About = () => {
//     return(
//         <>
//             <div className="about-page-container" style={{textAlign:"center"}}>
//                 <h1>⚒️ Builing: About Page 🛠️ </h1>
//             </div>
//             <User name={"Apurva Potdar"} location={"Pune"} email={"apurvapotdar.12@gmail.com"}/>
//             <UserClass name={"Deepak Mangela (class comp)"} location={"Pune, Maharashtra"} email={"deepakmangela.2@gmail.com"}/>
//         </>
//     )
// }

export default About;