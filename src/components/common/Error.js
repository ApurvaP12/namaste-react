import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log("Error", err)
    return (
        <div style={{textAlign:"center"}}>
            <h1>{err.status}: {err.statusText}</h1>
            <h2>{err.error.message}</h2>
            <h1>Ooops!</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}

export default Error;