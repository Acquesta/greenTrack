import Dores from "../../components/homepage/Dores";
import HomeTop from "../../components/homepage/HomeTop";
import Importancia from "../../components/homepage/Importancia";
import Sugestoes from "../../components/homepage/Sugestoes";
import Tecnologia from "../../components/homepage/Tecnologia";

function Home() {
    return (
        <div>
            <HomeTop />
            <Dores />
            <Importancia/>
            <Tecnologia/>
            <Sugestoes/>
        </div>
    );
}

export default Home;