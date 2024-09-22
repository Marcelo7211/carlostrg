// Dados dos membros da equipe

import Carlos from './../../assets/Carlos.png';

const equipeData = [
    { nome: "Carlos José da Silva", cargo: "Terapeuta", descricao: "Meu foco é cuidar do bem-estar mental e físico de nossos atletas. Como terapeuta, estou aqui para garantir que eles estejam equilibrados e preparados, tanto dentro quanto fora do tatame, para enfrentar e vencer qualquer desafio.", foto: Carlos }
];

// Renderização dinâmica dos membros da equipe
export default function SobreComponent() {
    return (
        <div className="flex flex-col items-center justify-center ">
           <div className="grid grid-cols-1 justify-center">
                    {equipeData.map((membro, index) => (
                        <div key={index} className="text-center">
                            <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="w-60 object-cover rounded-full mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{membro.nome}</h2>
                            <h3 className="text-base font-medium text-gray-500 mb-3">{membro.cargo}</h3>
                        </div>
                    ))}
                </div>
           
            <div className="container mx-auto">
                <div className="w-full p-6 rounded-lg shadow-lg text-center mb-12">
                    <article className="prose prose-lg text-gray-700">
                        <p>
                            Sou Carlos José da Silva, casado com a advogada Marta Eliane Gaya da Silva e pai de cinco filhos: Jailson (in memorian), Adriane, Alexsander, Alessandra e Nicolas. Tenho a honra de ser avô da pequena Sophia, que traz ainda mais alegria para nossa família. Atuo como Pastor Titular da Igreja do Evangelho Quadrangular no bairro Jardim Lourdes, em Guaianazes, São Paulo, onde dedico minha vida ao ministério.
                        </p>
                        <p>
                            Minha formação teológica foi adquirida no Instituto Teológico Quadrangular, e é com essa base que busco orientar minha jornada pastoral, sempre com fé e propósito. Ao longo dos anos, tenho concentrado esforços em projetos que me tocam profundamente, especialmente o trabalho de resgate de jovens e adultos que enfrentam vícios em substâncias lícitas e ilícitas. É uma missão desafiadora, mas gratificante, acompanhar essas pessoas em sua caminhada de recuperação em Casas de Recuperação e na Fundação Casa.
                        </p>
                        <p>
                            Cada experiência pastoral que vivo me ensina mais sobre o amor de Deus e sobre a força da transformação que Ele pode operar na vida de cada um. É essa força que me motiva a continuar meu trabalho, sempre buscando ser um instrumento de mudança e esperança para aqueles que mais precisam.
                        </p>
                    </article>
                </div>
                <div className="text-2xl text-center mx-11 my-12">
                    <p>"Transforme sua mente, liberte-se do passado e descubra o poder de uma nova vida através do TRG."</p>
                </div>
            </div>
        </div>
    )
}