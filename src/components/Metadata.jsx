import { Helmet } from "react-helmet-async"

const Metadata = (props) => {
    return (
        <Helmet>
            <title> The Roost | {props.title} </title>
        </Helmet>
    )
}

export default Metadata