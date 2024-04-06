import nwlUniteIcon from "../assets/nlw-unite-icon.svg"

export function Header(){
  return(
    <div className="flex items-center gap-5">
      <img src={nwlUniteIcon}/>

      <nav>
        <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
        <a href="" className="font-medium text-sm">Participantes</a>
      </nav>
    </div>
  )
}