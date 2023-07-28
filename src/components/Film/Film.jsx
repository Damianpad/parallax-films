import "./Film.css";

const Film = (props) => {
    return (
        <section className="filmContainer">
            {/* <span>Video title 1</span> */}
            <img src={props.film} />
        </ section>
    )
}

export default Film;