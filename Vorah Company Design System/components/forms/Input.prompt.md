One-sentence: Form controls — Input, Textarea, Select and Checkbox — all sharing the warm amber focus ring (matches the site's contact form).

```jsx
<Input label="Nome e Sobrenome" placeholder="Seu nome" />
<Input label="E-mail" type="email" error="E-mail inválido" />
<Select label="Serviço"><option>Gestão de redes sociais</option></Select>
<Textarea label="Mensagem" rows={4} />
<Checkbox label="Aceito receber novidades" defaultChecked />
```

All fields take `label` + `hint`; Input also takes `error`. Controls are full-width by default.
