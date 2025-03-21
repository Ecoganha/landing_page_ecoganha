import { Btn } from "./Btn"

export const Hero = () => {
    return (
        <div className="text-center flex flex-col justify-center mt-9 mb-4">
            <img className="mx-auto" src=".\src\assets\img_hero.png" alt="imagem de funções no celular" />
            <p className="-mt-20 mx-11 text-2xl font-bold text-[#003F25]">Junte-se ao Ecoganha:<br /> Recicle e Ganhe Recompensas!</p>
            <p className="mx-11 my-4 text-xl text-[#003F25]">O Ecoganha transforma o descarte correto de recicláveis em benefícios reais. Recicle, acumule pontos e troque por produtos sustentáveis!</p>
            <Btn />
        </div>
    )
}