export type Appliance = { id: string; name: string; watts: number; hoursPerDay: number; daysPerMonth: number; quantity: number };
export type Settings = { tariff: number; reductionPercent: number; habitInvestment: number; solarKw: number; sunHours: number; performance: number; solarInvestment: number; solarOffsetPercent: number };
export const EXAMPLE_APPLIANCES: Appliance[] = [
  { id:'geladeira', name:'Geladeira (potência média ilustrativa)', watts:65, hoursPerDay:12, daysPerMonth:30, quantity:1 },
  { id:'chuveiro', name:'Chuveiro elétrico', watts:5500, hoursPerDay:0.5, daysPerMonth:30, quantity:1 },
  { id:'tv', name:'Televisão', watts:100, hoursPerDay:5, daysPerMonth:30, quantity:1 },
  { id:'luz', name:'Lâmpadas LED', watts:9, hoursPerDay:5, daysPerMonth:30, quantity:6 },
  { id:'ventilador', name:'Ventilador', watts:70, hoursPerDay:8, daysPerMonth:30, quantity:1 }
];
export const EXAMPLE_SETTINGS: Settings = { tariff:0.90, reductionPercent:15, habitInvestment:150, solarKw:2, sunHours:4.5, performance:0.75, solarInvestment:10000, solarOffsetPercent:80 };
export const SOURCES = [
  { title:'MME — Ministério de Minas e Energia', url:'https://www.gov.br/mme/' },
  { title:'Inmetro — Programa Brasileiro de Etiquetagem', url:'https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem' },
  { title:'CRESESB — SunData (radiação solar)', url:'https://www.cresesb.cepel.br/index.php?section=sundata' },
  { title:'ANEEL — Geração Distribuída', url:'https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida' }
];
const positive = (value: number) => Number.isFinite(value) ? Math.max(0,value) : 0;
const capped = (value:number,max:number) => Math.min(max,positive(value));
export const kwh = (a:Appliance) => positive(a.watts)*capped(a.hoursPerDay,24)*capped(a.daysPerMonth,30)*positive(a.quantity)/1000;
export const totalKwh = (items:Appliance[]) => items.reduce((sum,a)=>sum+kwh(a),0);
export function calculate(items:Appliance[], s:Settings) {
  const monthlyKwh=totalKwh(items), tariff=positive(s.tariff), baselineCost=monthlyKwh*tariff;
  const habitSavedKwh=monthlyKwh*capped(s.reductionPercent,100)/100;
  const solarGenerationKwh=positive(s.solarKw)*positive(s.sunHours)*30*capped(s.performance,1);
  const solarUsefulKwh=Math.min(solarGenerationKwh,monthlyKwh*capped(s.solarOffsetPercent,100)/100);
  const habitSavedMoney=habitSavedKwh*tariff,solarSavedMoney=solarUsefulKwh*tariff;
  return {monthlyKwh,baselineCost,habitSavedKwh,habitSavedMoney,solarGenerationKwh,solarUsefulKwh,solarSavedMoney,
    habitRemainingKwh:monthlyKwh-habitSavedKwh,solarRemainingKwh:monthlyKwh-solarUsefulKwh,
    habitPaybackMonths:habitSavedMoney>0?positive(s.habitInvestment)/habitSavedMoney:null,
    solarPaybackMonths:solarSavedMoney>0?positive(s.solarInvestment)/solarSavedMoney:null};
}
export function ledRetrofit(qty:number,hours:number,days:number,tariff:number,costEach:number) {
  const savedKwh=(60-9)*Math.floor(positive(qty))*capped(hours,24)*capped(days,30)/1000;
  const savedMoney=savedKwh*positive(tariff),investment=Math.floor(positive(qty))*positive(costEach);
  return {savedKwh,savedMoney,investment,paybackMonths:savedMoney>0?investment/savedMoney:null};
}
export const money=(v:number)=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const number=(v:number,decimals=1)=>v.toLocaleString('pt-BR',{maximumFractionDigits:decimals});
