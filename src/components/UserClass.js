import React from "react";

class UserClass extends React.Component {

    constructor(props){
       
        super(props);
        // console.log("Props receiving in Class component:",props);

        this.state={
            count:0,
            count2:1,
            userInfo: {
            name: "Dummy Name",
            location: "Dummy Location"
            }
            
        }
        console.log(this.props.name + "Child constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child componentDidMount");

        const data = await fetch("https://api.github.com/users/ApurvaP12")
        const json = await data.json();

        console.log("Github API response",json);

        this.setState({
            userInfo: json,
        })
    }

    render() {
        console.log(this.props.name  + "Child render");
        // Destructuring of props
        // const {name} = this.props;
         // Destructuring of state
        const {count2} =this.state;

        // API state

        const {avatar_url, name, location, bio} = this.state.userInfo;



        return(
            <div className="user-card">
            <h2>Count: {this.state.count}</h2>
            {/* <button onClick={ () => {
                this.setState({
                    count : this.state.count + 1
                })
            }
            }
            >Count increase</button> */}
            <img src={avatar_url} style={{height: '100px', width: '100px'}}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Bio: {bio}</h4>
        </div>
        )
    }
}

export default UserClass;