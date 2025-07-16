import { useRouteError } from "react-router";

const ErrorPage = () =>{
    const err = useRouteError();
    console.log("err",err)
    return (
        <h1>{err.status} : {err.statusText}</h1>
    )
}

export default ErrorPage;