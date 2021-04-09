export default function Juegos (props) {
    return (
        <div>
            <h3>{ props.game }</h3>
            <h4>{ props.age }</h4>
            <h5>{ props.genres }</h5>
        </div>
    )
}