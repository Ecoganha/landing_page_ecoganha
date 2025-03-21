export const Hero = () => {
    return (
        <div className="text-center flex flex-col justify-center mt-9 mb-4">
            <img src=".\src\assets\img_hero.png" alt="imagem de funções no celular" />
            <p className="-mt-20 mx-11 text-2xl font-bold text-[#003F25]">Junte-se ao Ecoganha:<br /> Recicle e Ganhe Recompensas!</p>
            <p className="mx-11 my-4 text-xl text-[#003F25]">O Ecoganha transforma o descarte correto de recicláveis em benefícios reais. Recicle, acumule pontos e troque por produtos sustentáveis!</p>
            <button className="px-8 py-2 mx-auto mt-5 font-bold bg-[#003F25] flex text-center text-white rounded-full hover:bg-[#FBCA27] hover:text-[#003F25]">cadastrar</button>
        </div>
    )
}