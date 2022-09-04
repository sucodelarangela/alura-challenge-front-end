<div id='top'>

# AluraDEV: Compartilhe seu código | 2º Challenge Front-end Alura

</div>

_[Read it in English](#English)_

Olá, Devs!

A **AluraDEV** simula uma rede social para desenvolvedores, onde é possível compartilhar com a comunidade trechos de códigos diversos através de cartões personalizáveis. O projeto foi desenvolvido como resultado de um Desafio Front-End (2ª edição) exclusivo para alunos da escola de tecnologia [Alura](https://www.alura.com.br).

<!-- prettier-ignore -->
| 🪧 Vitrine.Dev |     |
| ------------- | --- |
| ✨ Nome       | **AluraDev** |
| 🏷️ Tecnologias | HTML, CSS, JavaScript, Highlight, SweetAlert, Masonry |
| 🚀 URL         | [**Acesse o site**](https://sucodelarangela.github.io/alura-challenge-front-end/). Veja mais detalhes de uso no item [**⚙️ Como usar**](#howto) |
| 🔥 Desafio     | [**Protótipo do Figma**](https://www.figma.com/file/Ve4hpTfmMa7yAFneoGtGKD/Alura-Challenge---Edi%C3%A7%C3%A3o-Front-end?node-id=207%3A729) |

![](https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/editor_page.png#vitrinedev)

## Detalhes do projeto

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <a href="https://highlightjs.org/" target="_blank"><img src="https://img.shields.io/badge/highlight.js-660000?style=for-the-badge" /></a>
  <a href="https://sweetalert.js.org/" target="_blank"><img src="https://img.shields.io/badge/sweetalert-F27474?style=for-the-badge" /></a>
  <a href="https://masonry.desandro.com/" target="_blank"><img src="https://img.shields.io/badge/sweetalert-DD2266?style=for-the-badge" /></a>
</div>

<div id="howto"></div>

### ⚙️ Como usar

A primeira página que você verá é a página do **Editor de Código**. Seu primeiro passo é fazer o login no canto superior direito, inserindo seu nome de usuário do Github na janela que aparecerá.

Em seguida, você pode escrever o seu trecho de código no campo central, selecionar a linguagem (HTML, CSS, JavaScript, JSON, Python ou TypeScript) no menu _dropdown_ e visualizar seu código estilizado com o **Highlight**. Também é possível dar um nome e uma descrição para o seu projeto, bem como escolher a cor que o seu cartão terá ao ser exibido na página da Comunidade.

Ao salvar o seu cartão, a aplicação utilizará o `localStorage` para enviar as informações para a página da **Comunidade**. Lá você poderá ver o seu cartão pronto!

<!-- Futuramente, será implementado o sistema de busca! :) -->

### 🗑️ Deletando um projeto

Caso tenha salvo um cartão com um código errado ou simplesmente cansou daquilo ali, você pode passar o botão do mouse sobre o cartão e você verá a opção de apagá-lo. Nas versões mobile, basta tocar uma vez sobre o cartão.

### ♻️ Limpando os dados do localStorage

Mesmo que você feche a página da aplicação, o `localStorage` vai manter seus dados salvos. Para limpar esses dados, você pode abrir as Ferramentas de Desenvolvimento do Navegador usando a tecla `F12` do seu teclado. Vá até a aba "Console" e digite o comando abaixo e pronto: seu navegador está limpo e você pode testar novos códigos na plataforma!

```js
localStorage.clear();
```

### 🩹 Melhorias necessárias

-   Falta implementar o sistema de busca;
-   O código inteiro precisa de refatoração por ter sido feito no início dos estudos. A ideia é recriar a aplicação com React, para aprendizado;
-   Implementar login via autenticação;
-   Implementar banco de dados em vez de localStorage.

### 🛡️ Badges recebidas pelo projeto

<table style="text-align: center;">
  <tr>
    <td>
      <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Participacao.png"/>
    </td>
    <td>
      <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Comunidade.png"/>
    </td>
    <td>
    <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Compartilhamento.png"/>
    </td>
    <td>
    <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20LinkedIn.png"/>
    </td>
  </tr>
  <tr>
    <td>Badge de Participação</td>
    <td>Badge de Apoio<br>à Comunidade</td>
    <td>Badge de Repostório<br>do Github</td>
    <td>Badge de Interação<br>do LinkedIn</td>
  </tr>
</table>

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

</div>

### 🔎 Overview

Hello, devs!

The app **AluraDEV** simulates a social media platform for developers where it is possible to share samples of codes with the development community through customizable cards. This project was development as a result of a Front-End Challenge (2nd edition) exclusively for students of [Alura](https://www.alura.com.br) tech school.

### ⚙️ How to use it

The first thing you will see is the **Code Editor Page**. Your first step is to log in to your Github account by clicking the right upper button and providing your Github user name.

Then, you can write your piece of code in the center input field, select the appropriate language (HTML, CSS, JavaScript, JSON, Python or TypeScript) in the dropdown menu and view your styled code by hitting the **Highlight** button. It is also possible to give a name and a description to your project, as well as choosing the color your card will display when it appears on Community Page.

After saving your project, the application will use your browser's `localStorage` to send the info to the **Community** page, where you can view your newly created card!

<!-- In the near future, the search functionality will be implemented! :) -->

### 🗑️ Deleting a project

In case you have saved a card with a mistyped code or you simply feel you want to have a card removed, you can hover the mouse cursor over the card and a delete button will appear. In mobile versions you can touch the card once and the delete button will show.

### ♻️ Cleaning localStorage data

Even if you close the application page, `localStorage` will keep your data safe i.e. the Community page will keep showing you your previous projects/cards. To clean these data you should open your browser's Dev Tools by hitting the F12 key. Go to the "Console" tab, type the command below and your browser will be clear. Now you can test new codes on the platform!

```js
localStorage.clear();
```

### 🩹 Improvements needed

-   Implementing the search functionality;
-   The whole code needs refactoring as it was written in the beginning of my studies. My idea is to recreate the application with React, for learning purposes;
-   Implementing login with authentication;
-   Implementing database instead of localStorage.

### 🛡️ Badges received in this project

<table style="text-align: center;">
  <tr>
    <td>
      <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Participacao.png"/>
    </td>
    <td>
      <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Comunidade.png"/>
    </td>
    <td>
    <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20Compartilhamento.png"/>
    </td>
    <td>
    <img height="150px" src="https://raw.githubusercontent.com/sucodelarangela/alura-challenge-front-end/master/Images/Badge%20-%20LinkedIn.png"/>
    </td>
  </tr>
  <tr>
    <td>Participation Badge</td>
    <td>Community<br>Support Badge</td>
    <td>Github Repo<br>Shared Badge</td>
    <td>LinkedIn<br>Interaction Badge</td>
  </tr>
</table>

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app)
