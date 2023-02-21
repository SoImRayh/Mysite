import {Tecnologia} from "@/utils/Tecnologias";

interface SkillCardProps{
    tecnologia: Tecnologia
}

export function SkillCard(props : SkillCardProps){
  return (
  <div className={"border-2 bg-white/5 border-[#00a6cb] rounded-md w-52 py-4 h-60"}>
    <div className={"w-14 ml-4"}>
        <div>
            <img src={props.tecnologia.icon} alt=""/>
        </div>
    </div>
      <div className={"flex flex-col px-3 mt-4"}>
        <span>
          {props.tecnologia.nome}
        </span>
         <span className={"mt-2 text-[16px] text-gray-300"}>
             {props.tecnologia.sobre}
         </span>

      </div>
  </div>
  );
}
