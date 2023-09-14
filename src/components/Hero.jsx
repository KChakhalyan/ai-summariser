import { logo } from "../assets";

const Hero = () => {
   return (
      <header className="w-full flex">
         <nav className="flex justify-between items-center w-full mb-10">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
            <button
               className="btn"
               type="buttonon"
               onClick={() => window.open("https://github.com/KChakhalyan/ai-summariser")}
            >
               Github
            </button>
         </nav>
      </header>
   );
};
export default Hero;
