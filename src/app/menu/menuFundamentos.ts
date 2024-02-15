import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfirmo from "../fundamentos/polimorfismo";

export default async function menuFundamentos(){
    TerminalUtil.titulo('Fundamentos')

    const [indice] = await TerminalUtil.menu([
        '1.polimorfismo',
        'voltar'
    ])

    switch(indice){
        case 0:
            await polimorfirmo()
            break
        case 1: return

    }

    await menuFundamentos()
}