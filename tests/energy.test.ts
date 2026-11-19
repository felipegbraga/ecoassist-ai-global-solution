import { describe, expect, it } from 'vitest';
import { EXAMPLE_APPLIANCES, EXAMPLE_SETTINGS, calculate, kwh, ledRetrofit } from '../src/energy';

describe('Simulações do EcoAssist',()=>{
  it('calcula o consumo de um equipamento em kWh',()=>{
    expect(kwh({id:'a',name:'Teste',watts:1000,hoursPerDay:2,daysPerMonth:30,quantity:1})).toBe(60);
  });
  it('soma o cenário hipotético de 30 dias',()=>{
    expect(calculate(EXAMPLE_APPLIANCES,EXAMPLE_SETTINGS).monthlyKwh).toBeCloseTo(145.8,6);
  });
  it('calcula custo e economia por hábitos',()=>{
    const r=calculate(EXAMPLE_APPLIANCES,EXAMPLE_SETTINGS);
    expect(r.baselineCost).toBeCloseTo(131.22,6);
    expect(r.habitSavedKwh).toBeCloseTo(21.87,6);
    expect(r.habitSavedMoney).toBeCloseTo(19.683,6);
  });
  it('calcula a geração solar e limita a compensação simplificada',()=>{
    const r=calculate(EXAMPLE_APPLIANCES,EXAMPLE_SETTINGS);
    expect(r.solarGenerationKwh).toBeCloseTo(202.5,6);
    expect(r.solarUsefulKwh).toBeCloseTo(116.64,6);
    expect(r.solarSavedMoney).toBeCloseTo(104.976,6);
  });
  it('não produz números negativos a partir de valores inválidos',()=>{
    const r=calculate([],{...EXAMPLE_SETTINGS,tariff:-1});
    expect(r.monthlyKwh).toBe(0);
    expect(r.baselineCost).toBe(0);
  });
  it('calcula a substituição de lâmpadas de 60 W por LED de 9 W',()=>{
    const r=ledRetrofit(6,5,30,0.9,15);
    expect(r.savedKwh).toBeCloseTo(45.9,6);
    expect(r.savedMoney).toBeCloseTo(41.31,6);
    expect(r.investment).toBe(90);
  });
});
