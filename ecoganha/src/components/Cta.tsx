import { Btn } from "./Btn"

export const Cta = () => {
    return (
        <div className="text-center bg-gray-50 flex flex-col items-center justify-center w-full my-10 py-10 px-5 gap-8 mx-auto shadow-[0px_8px_18px_0px_#00000026]">
            <h2 className="text-2xl font-bold text-[#003F25]">
                Cadastre-se Agora e Comece a Ganhar!
            </h2>
            <p className="text-lg text-[#003F25]">Não fique de fora dessa transformação! Inscreva-se gratuitamente e receba em primeira mão quando for lançado. Faça parte da revolução sustentável.</p>
            <Btn />
        </div>
    )
}
