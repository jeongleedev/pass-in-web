import nlwIcon from "../assets/nlw-icon.svg";
import { Navlink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nlwIcon} />

      <nav className="flex items-center gap-5">
        <Navlink href="/eventos">Eventos</Navlink>
        <Navlink href="/participantes">Participantes</Navlink>
      </nav>
    </div>
  );
}
