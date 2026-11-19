# Análise energética — EcoAssist AI

## 1. Público, problema e período
Público-alvo: famílias e moradores que procuram reduzir gastos com eletricidade e compreender opções renováveis em residências. Problema: falta de visibilidade sobre o consumo dos aparelhos e dificuldade em comparar alternativas.

O período de comparação é **30 dias**. Os dados seguintes são **premissas didáticas**, não uma medição nem uma média representativa de residências brasileiras. Para uso real, substituir pela potência nominal/medida de cada equipamento, tempo efetivo e tarifa variável da fatura.

## 2. Consumo de referência
Fórmula: `E (kWh)=P(W) × horas por dia × dias no mês × quantidade / 1000`.

| Equipamento | Potência W | Horas/dia | Dias | Quantidade | kWh/mês |
|---|---:|---:|---:|---:|---:|
| Geladeira (potência média hipotética) | 65 | 12 | 30 | 1 | 23,40 |
| Chuveiro elétrico | 5500 | 0,5 | 30 | 1 | 82,50 |
| TV | 100 | 5 | 30 | 1 | 15,00 |
| LED | 9 | 5 | 30 | 6 | 8,10 |
| Ventilador | 70 | 8 | 30 | 1 | 16,80 |
| **Total** | | | | | **145,80** |

Tarifa variável hipotética: R$ 0,90/kWh. Custo estimado **145,80 × 0,90 = R$ 131,22**. Isto NÃO é previsão da conta integral.

## 3. Alternativa A — Reduzir desperdícios
Hipótese de redução de 15% sobre o consumo total, com investimento ilustrativo de R$ 150.
- Energia poupada: `145,80 × 0,15 = 21,87 kWh/mês`.
- Economia variável: `21,87 × 0,90 = R$ 19,683/mês` (aprox. R$ 19,68).
- Energia restante: 123,93 kWh/mês.
- Retorno simples: `150 / 19,683 = 7,62 meses`.

**Viabilidade:** depende da existência de desperdícios elimináveis; reduzir todos os itens na mesma proporção pode ser irrealista. Baixa barreira de investimento, porém depende da mudança de hábitos. **Impacto ambiental:** uso mais racional de recursos, sem alegar toneladas de CO₂ não calculadas.

**Alternativa concreta adicional:** substituir seis lâmpadas incandescentes de 60 W por seis LEDs de 9 W. Uso: 5 h/dia e 30 dias. Redução `(60-9) × 6 × 5 × 30 / 1000 = 45,90 kWh/mês`; economia hipotética `45,9 × 0,9 = R$ 41,31/mês`, investimento de R$ 90 (R$ 15 por lâmpada), retorno simples `90/41,31 = 2,18 meses`. Esse cenário é **independente** dos itens de referência, que já usam LED: não somar sua economia ao cenário anterior sem trocar a linha de base.

## 4. Alternativa B — Solar fotovoltaica
Sistema hipotético: 2 kWp, 4,5 horas de sol pleno/dia, fator de desempenho 0,75, investimento R$ 10.000.

- Geração mensal estimada `2 × 4,5 × 30 × 0,75 = 202,50 kWh/mês`.
- Limite de energia compensável no modelo simplificado: 80% do consumo de referência = `145,8 × 0,80 = 116,64 kWh/mês`.
- Energia aproveitada no modelo: `mínimo(202,50;116,64) = 116,64 kWh/mês`.
- Economia **máxima modelada para a parcela variável**: `116,64 × 0,90 = R$ 104,976/mês` (aprox. R$ 104,98).
- Retorno simples ilustrativo: `10.000 / 104,976 = 95,26 meses` (aprox. 7,94 anos).

**Viabilidade:** requer avaliação de telhado, área, sombra, insolação, orientação, projeto, custos locais e regras de compensação da distribuidora. **Impactos:** geração a partir de fonte renovável, mas fabricação, instalação e descarte de módulos têm impactos ambientais.

## 5. Comparação com período comum
| Critério | Redução de desperdício | Solar fotovoltaica |
|---|---|---|
| Período | 30 dias | 30 dias |
| Economia energética modelada | 21,87 kWh | 116,64 kWh úteis na hipótese de compensação |
| Economia variável | ~R$ 19,68/mês | ~R$ 104,98/mês |
| Investimento hipotético | R$ 150 | R$ 10.000 |
| Retorno simples | 7,62 meses | 95,26 meses |
| Principal restrição | Mudança de comportamento | Condições locais, regulação, investimento |

A escolha depende de orçamento, consumo e viabilidade. Os resultados não devem ser tratados como descontos garantidos.

## 6. Integração ao assistente
O código `src/energy.ts` implementa as contas e `src/App.tsx` as apresenta no simulador e nas respostas do assistente. Ao mudar aparelhos ou premissas, os valores são recalculados. Perguntas sobre solar, custos, hábitos, retorno e fontes recebem explicações ligadas aos resultados.

## 7. Limitações
- Dados, potência média da geladeira, tarifa e preços de referência são **hipotéticos**, não públicos medidos.
- Modelo mensal fixo de 30 dias; insolação não varia conforme estação ou cidade.
- Não considera bandeiras, tributos, custos fixos, custo de disponibilidade, regras detalhadas de compensação, financiamento, manutenção, degradação, taxa de desconto ou perdas particulares.
- O indicador de economia financeira é uma aproximação simplificada da parcela variável da conta.
- A análise não calcula emissões de CO₂ porque não adotou fator de emissão verificado.

## 8. Fontes consultáveis
- MME: https://www.gov.br/mme/
- Inmetro PBE: https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem
- CRESESB SunData: https://www.cresesb.cepel.br/index.php?section=sundata
- ANEEL geração distribuída: https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida

O grupo deve consultar estas fontes, confirmar as condições vigentes e registrar a data de acesso antes da entrega.
