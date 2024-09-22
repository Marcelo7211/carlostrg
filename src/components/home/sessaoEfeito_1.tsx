import Carlos from '../../assets/Carlos.png'


export default function SessaoEfeito_1(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="max-w-5xl flex flex-col md:flex-row items-center bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 p-8">
              <h1 className="text-4xl font-bold mb-4">Valores</h1>
              <p className="text-lg mb-6">

              A Terapia de Reprocessamento Generativo (TRG) é uma terapia que ajuda a reprocessar memórias traumáticas e bloqueios emocionais, com o objetivo de gerar um futuro otimista. 
              A TRG é baseada na ideia de que as memórias e padrões estão localizados principalmente nas camadas mais antigas do cérebro. A terapia visa acessar e reprocessar essas memórias e bloqueios para transformar o indivíduo. 
              A TRG pode ajudar a: Reduzir a gravidade dos sintomas, Fortalecer a resiliência emocional, Reestruturar o psiquismo, Gerar novas conexões neurais, Oferecer uma postura mais assertiva.

              </p>
              <a href='https://dojopaulista.actuar.com/' className="bg-red-900 hover:bg-red-600 text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded">Agende a sua consulta agora!</a>
            </div>
            <div className="flex-1 lg:m-0 mr-2 mb-2">
              <img src={Carlos} alt="Placeholder Image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )
}