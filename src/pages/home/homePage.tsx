import Beneficios from "../../components/home/beneficios"
import Home from "../../components/home/home"
import SessaoEfeito_1 from "../../components/home/sessaoEfeito_1"
import SobreNegocio from "../../components/home/sobreNegocio"

function HomePage() {
    return (
        <>
            <Home />
            <SessaoEfeito_1 />
            <SobreNegocio />
            <Beneficios />
            
        </>
    )
}

export default HomePage