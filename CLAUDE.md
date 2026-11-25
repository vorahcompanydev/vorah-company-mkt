# Regras de trabalho

## Aprovação de trabalho (vale para todo chat)

Cada chat roda em uma sessão isolada, com a própria branch `claude/*`. O que não for commitado e enviado por push se perde quando a sessão encerra.

Sempre que a usuária aprovar algo (copy, novos templates, calendário editorial, revisão de templates e design):

1. Commitar o item imediatamente, com a mensagem começando por `aprovado:`.
   * Exemplo: `aprovado: <descrição curta do item>`
2. Dar push na branch atual na mesma hora (`git push -u origin <branch>`).
3. Nunca commitar com `aprovado:` algo que ela não aprovou. Rascunhos e itens em ajuste usam outros prefixos (`rascunho:`, `wip:`).

Ao criar algo novo, perguntar se foi aprovado. Se sim, aplicar as regras acima.

## Rotina semanal de PR

Todo domingo às 20h (Brasília), uma rotina agendada reúne os commits `aprovado:` das branches `claude/*` ainda não mergeadas na branch principal e abre um PR único. Ela nunca dá merge: a revisão e o merge ficam com a usuária.

Por isso o prefixo `aprovado:` e o push imediato são obrigatórios: é só assim que a rotina encontra o material.

## Fórmula de criação de conteúdo (vale para todo conteúdo novo)

Todo conteúdo novo (carrossel, post com frase, legenda, roteiro de vídeo) segue esta ordem de 5 passos, usada como estrutura de raciocínio e de texto:

1. **Dor do público:** começar pelo que incomoda o cliente, com as palavras dele. Vale usar as dores dos briefings e do ICP.
2. **Narrativa:** organizar em problema, virada e resultado, numa ordem que a pessoa consiga acompanhar.
3. **Autenticidade:** falar como a Vorah fala com o cliente (direto, sem jargão), com bastidor e rotina reais, sem cenário montado.
4. **Solução:** mostrar o caminho, e não só o problema. A pessoa termina com algo para aplicar ou com a certeza de que a Vorah resolve.
5. **Uma dose de storytelling:** uma história real (um cliente atendido, um erro que ensinou), só o suficiente para dar vida, sem tomar o espaço da solução.

Como aplicar:

* Em carrossel, a sequência das telas segue a fórmula. Em post com frase, a frase carrega a dor e a virada. Em legenda, os parágrafos seguem a mesma ordem.
* Nem todo passo ganha uma tela própria, mas nenhum fica de fora. O passo 5 é sempre uma dose pequena.
* Só usar história real, de cases e briefings que existam no repositório. Nunca inventar cliente, resultado ou depoimento.
* No arquivo do roteiro, a seção "Observações" traz uma linha "Fórmula:" dizendo onde cada passo aparece.
* A fórmula é de um slide de referência enviado pela usuária, de autoria não identificada. Se a autoria for informada, creditar nas legendas que citarem a fórmula.
