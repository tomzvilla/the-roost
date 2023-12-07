import { Helmet } from "react-helmet-async"

const Metadata = (props) => {
    return (
        <Helmet>
            <title> V&V Argentina Outfitters | {props.title} </title>
        </Helmet>
    )
}

export default Metadata