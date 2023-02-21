import {JetBrains_Mono} from "@next/font/google";

const jet =  JetBrains_Mono(
    {
        weight: "700",
        subsets: ['latin']
    })
interface NavbarProps{

}
export function Navbar(props : NavbarProps){
  return (
  <nav className={"fixed top-0 z-10 bg-[#2d2926]"}>
      <div className={"top-0 w-screen z-20 md:z-0 left-0 h-12 grid grid-cols-2 border-b-2 border-[#00a6cb]"}>
          <div className={"flex align-middle"}>
              <button className={"text-3xl text-white ml-8 "+jet.className}>
                  Rayh.dev
              </button>
          </div>
          <div className={"flex justify-end h-full"}>
              <a href={"#skills"} className={"text-white bg-transparent text-md hover:bg-[#33364A] px-4 rounded-sm "+jet.className}>
                  Services
              </a>

          </div>
      </div>
  </nav>
  );
}
