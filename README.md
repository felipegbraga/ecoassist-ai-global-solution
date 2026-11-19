# EcoAssist AI — Citizen Assist AI (FIAP Global Solution 2026.2)

Projeto acadêmico da disciplina **Soluções em Energias Renováveis e Sustentáveis**.

## Integrantes
- Felipe Gouveia Braga — RM 568956
- Enzo Coppa Selingarde — RM 573393
- Pedro Henrique Lemgruber de Souza Ventura Coelho — RM 572094

## Problema e público
Famílias que precisam compreender o consumo de energia elétrica residencial, avaliar formas de reduzir desperdício e comparar uma alternativa de geração renovável.

## Funcionalidades
- Cadastro e remoção de aparelhos; cálculo do consumo mensal em kWh.
- Estimativa de custo mensal com tarifa informada pelo usuário.
- Comparação **no mesmo período de 30 dias**: mudança de hábitos (redução percentual hipotética) e energia solar fotovoltaica.
- Assistente orientativo baseado nos cálculos, com respostas auditáveis, referências e ressalvas.
- Exportação dos resultados em CSV e interface adaptada a computadores e celulares.

## Como executar
Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abrir o endereço informado pelo Vite. Para validar: `npm test` e `npm run build`.

## Fórmulas
- Consumo (kWh/mês) = potência (W) × horas/dia × dias/mês × quantidade / 1000.
- Custo variável estimado (R$) = consumo (kWh) × tarifa informada (R$/kWh).
- Hábitos: economia estimada = consumo × percentual de redução (hipótese ajustável).
- Solar: geração estimada (kWh/mês) = potência instalada (kWp) × horas de sol pleno (h/dia) × 30 × fator de desempenho.
- Compensação simplificada: mínimo entre geração estimada e percentual do consumo configurado.

**Atenção:** o modelo não prevê a fatura real, pois esta pode conter tributos, bandeiras, encargos, custo de disponibilidade e regras de compensação. Os parâmetros iniciais são **hipóteses didáticas**, não dados medidos nem garantias de economia. A geração varia conforme local, sombreamento, inclinação, clima e instalação.

## Estrutura
- `src/energy.js`: cálculos puros; `src/main.js`: aplicação e assistente; `src/style.css`: estilos.
- `tests/energy.test.js`: verificações automáticas.
- `docs/analise-energetica.md`: cálculos de exemplo, comparação, premissas, impactos e referências.
- `docs/testes-usuarios.md`: roteiro e registro de testes **a preencher após testes reais**.
- `docs/roteiro-video.md`: roteiro de demonstração.
- `ENTREGA_FINAL_MODELO.txt`: modelo do único arquivo a enviar na plataforma, após inserir link do vídeo.

## Entrega
O enunciado exige repositório organizado, vídeo **não listado** de até 3 minutos no YouTube e **um único arquivo TXT** contendo integrantes, URL do GitHub e URL do vídeo. O grupo deve executar testes de usabilidade reais e registrar feedback/ajustes. Não são declarados testes com pessoas que ainda não aconteceram.

## Fontes para consulta
- [Ministério de Minas e Energia](https://www.gov.br/mme/)
- [Inmetro — PBE](https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem)
- [CRESESB — SunData](https://www.cresesb.cepel.br/index.php?section=sundata)
- [ANEEL — geração distribuída](https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida)

O uso de IA generativa como apoio não substitui a revisão dos dados e a capacidade de os integrantes explicarem o projeto.
