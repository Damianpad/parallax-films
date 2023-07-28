import Film from "../../components/Film/Film";
import film3 from "../../assets/img/film3.jpg";
import "./About.css"
import Footer from "../../components/Footer/Footer";

export const About = () => {
    return (
        <section className="">
            <section>
                <h1>Our Story</h1>
                <Film film={film3}/>
            </section>

            <section>
                <p>Parallax Films is a video production company based in Dallas, Texas. Our mission is to help you stay competitive in a digital world.  From product videos to brand videos, we bring your online presence to life with cinematic video. </p>
            </section>

            <section>
                <Footer />
            </section>
        </section>
    )
}

export default About;
