import liberdade from '../../assets/Liberade.png';
import qualidadeVida from '../../assets/QualidadeVida.png';
import emocional from '../../assets/Emocao.png';
import emocional2 from '../../assets/Emocao2.png';

export default function Beneficios() {
    return (
        <section className="bg-transparent text-foreground py-2">
            <h2 className="text-4xl font-bold text-center mb-8">Alguns beneficios da Terapia de Reprocessamento Generativo</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${liberdade})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px black' }}>Libertação de traumas e bloqueios emocionais</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px black' }}>A TRG atua diretamente na raiz de traumas, fobias e compulsões, removendo bloqueios acumulados no cérebro que limitam seu bem-estar emocional.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${emocional2})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Melhoria na qualidade de vida</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Ao reprocessar experiências desde o nascimento até o presente, a TRG ajuda a eliminar medos e ansiedades, promovendo uma vida mais equilibrada e tranquila, com noites de sono reparadoras.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${emocional})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Fortalecimento emocional para o futuro</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Além de lidar com o passado, a terapia trabalha medos e anseios relacionados ao futuro, permitindo que você enfrente desafios com mais confiança e clareza.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${qualidadeVida})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px black' }}>Desbloqueio do potencial máximo</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px black' }}>A TRG proporciona uma reconexão com sua melhor versão, permitindo que você explore todo o seu potencial, livre de limitações e dores do passado.</p>
                </div>
            </div>


            <div className="text-2xl text-center mx-11 my-12">
                        <p>
                            Se você busca resgatar sua melhor versão e liberar o potencial que pode estar bloqueado por traumas antigos, a TRG é o caminho ideal. <strong>"Desbloqueie seu potencial e transforme sua vida. Inicie agora sua jornada de cura e descubra um novo caminho para o seu bem-estar."</strong>
                        </p>
                    </div>
        </section>
    )
}