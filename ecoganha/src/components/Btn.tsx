export const Btn = () => {
    const handleClick = () => {
        window.open("https://forms.gle/MFnK6pQdS5DokZQz9", "_blank");
    };

    return (
        <button 
            onClick={handleClick} 
            className="px-8 py-2 mx-auto font-bold bg-[#003F25] flex text-center text-white rounded-full cursor-pointer hover:bg-[#FBCA27] hover:text-[#003F25]">
            cadastrar
        </button>
    );
};
