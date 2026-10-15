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
