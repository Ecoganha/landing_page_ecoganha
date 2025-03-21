export const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="text-center flex flex-col items-center justify-center w-[295px] h-[242px] rounded-[20px] py-10 px-5 gap-8 mx-auto bg-[#d9d9d985] shadow-[0px_8px_18px_0px_#00000026]">
            <p className="text-2xl font-bold text-[#003F25]">{title}</p>
            <p className="text-lg text-[#003F25]">{description}</p>
        </div>
    )
}   