import { Tenant } from '../data/dataType'
import getTenantData from './tenantData'
import { charges } from './charges'

const getRegul = (tenant: Tenant) => {
    const { data, current, real, difference, monthsOfLiving, debt, separator } =
        getTenantData(tenant)
    let txt = ''
    txt += `RÉGULARISATION
Total de vos charges réelles = ordure ménagère + électricité + eau
= ${charges(data).garbage().toFixed(2)} + ${charges(data)
        .electricity()
        .toFixed(2)} + ${charges(data).water().toFixed(2)}
= ${real.toFixed(2)}
Vos charges actuelles sont de ${current.toFixed(2)} € 
La différence avec vos charges réelles est donc de ${difference.toFixed(2)} €
Nombre de mois pris en compte (selon la date du début de la période de calcul): ${monthsOfLiving.toFixed(
        2
    )} mois.
Ce que vous devez ou ce que la SCI vous doit si négatif
= nombre de mois x différence
= ${monthsOfLiving.toFixed(2)} x ${difference.toFixed(2)}
= ${debt.toFixed(
        2
    )} € à virer (RIB à retrouver via le lien ci-dessous) ou qui vous sera viré si négatif dans ce cas merci d'envoyer votre RIB à lydstyl@gmail.com.`
    txt += separator

    return txt
}
export default getRegul
