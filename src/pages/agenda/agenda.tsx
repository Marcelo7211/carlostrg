import { InlineWidget } from "react-calendly";
import logoDojo from './../../assets/CjS.png'; // Importe o logoDojo

export default function Agenda(){
    return(
        <>
     
            <img src={logoDojo} alt="Logo Dojo" className="mx-auto mt-28 mb-2 w-20 h-20 sm:w-30 sm:h-30 lg:w-48 lg:h-48" /> {/* Reduzido o tamanho da imagem */}
    
            <div className="isolate px-6 lg:px-8">
                <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0f1265] to-[#1a1a2e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" // Alterado para uma cor mais escura
                />
                </div>
                <div className="text-center mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
                    <h1 className="mt-6 text-3xl leading-8 text-gray-900"> {/* Alterado para texto mais claro */}
                       
                    </h1>
                    <div className="App">
                        <InlineWidget  
                            url="https://calendly.com/carlosjsterapeuta/30min"
                            iframeTitle="Agende um horário"
                        />
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="https://dojopaulista.actuar.com"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Saiba mais
                        </a>
                        <a href="https://dojopaulista.actuar.com/fale-conoscov2" className="text-sm font-semibold leading-6 text-gray-500"> {/* Alterado para texto mais claro */}
                            Sobre mim <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1a1a2e] to-[#2e2e4d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" // Alterado para uma cor mais escura
                />
                </div>
            </div>
        </>
       
    )
}