# 🌟 Instituto Aurora — Entrega IV  
**Desenvolvimento Front-End | Versionamento, Acessibilidade, Otimização e Deploy**

Este repositório contém o projeto final da **Entrega IV**, incluindo:

- GitFlow + boas práticas de versionamento  
- Acessibilidade seguindo **WCAG 2.1 nível AA**  
- Otimização para produção (CSS/JS/HTML minificado + imagens)  
- Deploy em produção via **GitHub Pages**  
- Documentação técnica completa  


---

# 🚀 Deploy (produção)

🔗 Acesse o site em produção:  
**https://arraisle.github.io/instituto-aurora-entrega3**  


---

# 📁 Estrutura do Repositório

```

instituto-aurora-entrega3/
│
├── assets/
│   ├── css/
│   │   ├── design-system.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   ├── styles.css
│   │   └── styles.min.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── masks.js
│   │   ├── spa.js
│   │   ├── acessibilidade.js
│   │   └── acessibilidade.min.js
│   │
│   └── img/
│       └── placeholder.svg
│
├── index.html
├── projetos.html
├── cadastro.html
├── galeria.html
└── README.md

````


---

# 🧠 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- Design System próprio  
- Git & GitHub (GitFlow)  
- GitHub Pages  
- Minificadores online (CSS/JS/HTML)  


---

# ♿ Acessibilidade — WCAG 2.1 AA  

Este projeto implementa recursos de acessibilidade seguindo a WCAG 2.1 nível AA.


## 🏃 Navegação por teclado
- Foco visível em todos os elementos  
- `outline` de alto contraste  


## 🔗 Skip Link

Link no topo para acessibilidade:

```html
<a href="#conteudo-principal" class="skip-link">Pular para o conteúdo principal</a>
````

## 🏗 Estrutura semântica

Elementos aplicados:

* `<header>`
* `<nav aria-label="principal">`
* `<main id="conteudo-principal">`
* `<footer>`

## 🎨 Modo Escuro & Alto Contraste

Botões no header:

* **Modo Escuro**
* **Alto Contraste**

Com alternância via JavaScript acessível (`aria-pressed`).

## 🗣 Leitores de Tela

* `aria-current="page"`
* `aria-expanded` e `aria-controls`
* `aria-live="polite"`
* Labels conectados via `for="id"`

## 📝 Formulário acessível

* Campos obrigatórios marcados
* `aria-describedby`
* Validação nativa HTML5

---

# ⚡ Otimização para Produção

## ✔ CSS Minificado

Arquivo final:

```
assets/css/styles.min.css
```

## ✔ JS Minificado

```
assets/js/acessibilidade.min.js
```

## ✔ Atualização dos HTMLs

Todos usam versões minificadas:

```html
<link rel="stylesheet" href="assets/css/styles.min.css">
<script src="assets/js/acessibilidade.min.js" defer></script>
```

## ✔ HTML Minificado

* Página inicial (`index.html`) otimizada

## ✔ Imagens leves

* SVG otimizado
* PNG/JPG comprimidos quando aplicável

---

# 🔀 GitFlow Utilizado

## 🌿 Branches

* **main** – produção
* **develop** – integração
* **feature/acessibilidade** – implementação da entrega

## ✔ Pull Requests

* `feature/acessibilidade` → `develop`
* `develop` → `main`

## ✔ Commits semânticos

Exemplos:

* `feat: adicionar modo escuro`
* `build: minificar styles.css`
* `chore: usar JS minificado`
* `refactor: remover skip link duplicado`

---

# 🗂 Issues & Milestones

Milestone criada para a entrega:

### 🎯 Entrega IV — Versionamento, Acessibilidade e Deploy

Issues incluídas:

* ✔ Acessibilidade WCAG
* ✔ GitFlow
* ✔ PRs
* ✔ Otimização para produção
* ✔ Deploy
* ✔ Documentação

---

# 🏷 Release Final — Versionamento Semântico

### **v1.0.0 — Entrega IV Concluída**

Inclui:

* Acessibilidade WCAG
* Otimizações
* Minificações
* GitFlow completo
* PRs
* Deploy
* Documentação completa

---

# 🌐 Deploy via GitHub Pages

Produção disponível em:

👉 **[https://arraisle.github.io/instituto-aurora-entrega3](https://arraisle.github.io/instituto-aurora-entrega3)**

---

# 📌 Como Rodar o Projeto Localmente

Clone o repositório:

```bash
git clone https://github.com/ArraisLe/instituto-aurora-entrega3
```

Abra o arquivo:

```
index.html
```

Projeto estático, sem necessidade de servidor.

---

# 🧩 Melhorias Futuras

* Melhor acessibilidade no menu mobile
* Preferência de tema salva no navegador
* Redução de animações
* Melhor descrição alternativa para imagens

---

# 👩‍💻 Autora

**Leandra Arrais**

Projeto desenvolvido para a disciplina *Desenvolvimento Front-End para Web*.

---

# 🎓 Avaliação (professor)

Este README inclui **todos os requisitos da Entrega IV**:

✔ GitFlow
✔ Versionamento Semântico
✔ Acessibilidade WCAG
✔ Otimização
✔ Deploy
✔ Issues + Milestone
✔ Documentação técnica

Projeto concluído 


