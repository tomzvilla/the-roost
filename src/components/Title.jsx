import '../styles/title.css'

const Title = (props) => {
    let modifier = ''
    if(props.moreMargin) modifier = ' moreMargin '

    return (
        <div className={"titleFondo " + modifier}>
            <h2>
                {props.title}
            </h2>
        </div>
    )

}

export default Title