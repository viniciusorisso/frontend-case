<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">front-case</h3>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Desafio técnico para vaga de Frontend na Jurisoft. O layout segue os assets fornecidos pela empresa.
    <br> 
</p>

## 📝 Conteúdos

- [Sobre](#about)
- [Getting Started](#getting_started)
- [Deploy](#deployment)
- [TODO](#todo)
- [Autores](#authors)

## 🧐 Sobre <a name = "about"></a>

Este desafio é projetado para avaliar minhas habilidades na criação de interfaces de usuário responsivas e modulares utilizando Nuxt e Vue3. O prazo fornecido foi 3 dias, e como está descrito no readme do desafio, alguns requisitos foram atendidos e outros não.

## 🏁 Getting Started <a name = "getting_started"></a>

O projeto utiliza Nuxt3 e suas dependências, para instalação das dependências pode utilizar o gerenciador de dependências de preferência. Aqui neste projeto foi utilizado pnpm.

### Prerequisitos

O único módulo fora da base do Nuxt3 utilizado foi o do Tailwindcss, para promover maior produtividade na implementação e, infelizmente, não cumprindo com o requisito de utilizar SCSS. Como o prazo era curto a decisão de utilizar tailwind foi unicamente para facilitar o desenvolvimento das interfaces utilizando classes css dele. Nenhum componente externo foi utilizado para auxiliar na implementação das interfaces.
Abaixo segue um exemplo da utilização do tailwind no projeto:

```js
<template>
  <header class="header bg-white flex justify-end px-8 py-5 align-middle gap-x-6 lg:gap-x-3">
    [...]
  </header>
</template>
```

### Installing

Para instalar as dependências do projeto:

```
pnpm i
ou
npm i
```

Para rodar em ambiente de desenvolvimento:

```
pnpm run dev
npm run dev
```

Para gerar uma build e dar preview:

```
npm run build
npm run preview
```

## 🚀 Deploy <a name = "deployment"></a>

O projeto será feito o deploy na vercel com o [link]('https://frontend-case-chi.vercel.app/').

## 🚀 TODO <a name = "todo"></a>

Alguns requisitos ainda estão abertos para serem feitos, infelizmente com o tempo curto não sobrou tempo:

- Destaque Colaboradores
- Cursos
- Comunicação entre componentes
- Páginas de mais detalhes, Histório, etc
- Mudança de cor ao clicar em um ícone da sidebar para a cor ativa
- Utilização de SCSS para deixar a aplicação modularizada em estilização
- Refatorar o layout do componente de Feeback diário para uma melhor UX no responsivo, o component é muito grande
- Skeleton loading para informações do usuário, como nome, avatar e etc (não foi pedido mas deixo como opcional)
- Feature flag para deixar o teste dos componentes mais simples (não foi pedido mas deixo como opcional)
- Testes unitários para os componentes (não foi pedido mas deixo como opcional)
- Utilização de SSR no carregamento das informações de um component (opcional mas como não havia necessidade, não foi utilizado) - exemplo de component seriam os de gráficos.
- Utilização de bibliotecas de component com gráficos de pizza, barras, etc, para uma melhor experiência do usuário

## ⛏️ Built Using <a name = "built_using"></a>

- [Nuxt](https://nuxt.com/) - VueJs Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [Tailwind](https://tailwindcss.com/) - Css Framework

## ✍️ Authors <a name = "authors"></a>

- [@viniciusorisso](https://github.com/viniciusorisso) - Implementação
