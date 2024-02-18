import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfirmo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export default async function menuFundamentos(){
    TerminalUtil.titulo('Fundamentos')

    const [indice] = await TerminalUtil.menu([
        '1.polimorfismo',
        '2. DIP',
        'voltar'
    ])

    switch(indice){
        case 0:
            await polimorfirmo()
            break
        case 1:
            await dip()
            break 
        default:
            return

    }

    await menuFundamentos()
}