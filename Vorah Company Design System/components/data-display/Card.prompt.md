One-sentence: Display & content surfaces — the rounded warm Card plus Badge, Tag, Avatar and the big-number Stat.

```jsx
<Card tone="paper" hover>
  <Badge tone="mint">Novo</Badge>
  <h4>Análise completa do seu perfil</h4>
  <Stat value="+430" label="Posts no feed" />
</Card>
<Tag onRemove={() => {}}>Pet Shop</Tag>
<Avatar name="Emily Smith" />
```

Card tones: `paper | cream | dark | amber`; `padding` none→xl; `hover` lifts. Badge tones: `amber | mint | forest | teal | neutral | dark`. Stat tones: `ink | amber | cream`.
