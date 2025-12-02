import { useState } from "react";

const User = ({name, location, email}) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h2>Count={count}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Email Id: {email}</h4>
        </div>
    )
}

export default User;