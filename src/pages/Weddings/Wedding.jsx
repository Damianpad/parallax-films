import { useLocation } from "react-router-dom";
import Film from "../../components/Film/Film";
import "./Wedding.CSS"

const Wedding = () => {
    const location = useLocation();

    const isOnSpecificPage = location.pathname === '/wedding';
    return(
        <section  className={isOnSpecificPage ? 'white-background weddingContainer' : ''}>
            <img className="imgContainer" src="src\assets\img\M_R_WD-098.jpg" alt="" />
        </section>
    )
}

export default Wedding;