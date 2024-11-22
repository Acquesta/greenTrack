import Dores from "../../components/homepage/Dores";
import HomeTop from "../../components/homepage/HomeTop";
import Importancia from "../../components/homepage/Importancia";
import Product from "../../components/homepage/Product";
import Sugestoes from "../../components/homepage/Sugestoes";
import Tecnologia from "../../components/homepage/Tecnologia";

function Home() {
    return (
        <div>
            <HomeTop />
            <Product/>
            <Dores />
            <Importancia/>
            <Tecnologia/>
            <Sugestoes/>
        </div>
    );
}

export default Home;