# AluraDEV: Protótipo de rede social / ferramenta para compartilhamento de trechos de códigos

For the English version of this README, click [here](#English)

## Overview

Olá, Dev! Seja bem vindo!

A aplicação **AluraDEV** simula uma rede social para desenvolvedores, onde é possível compartilhar com a comunidade trechos de códigos diversos através de cartões personalizáveis. O projeto se trata de um desafio de desenvolvimento Front-End proposto pela **[Alura](https://www.alura.com.br/)** para seus alunos.

## Preciso instalar algo?

Não é necessário instalar nada para experimentar a aplicação, você tem duas opções:

- Fazer o download dos arquivos e rodar diretamente do seu computador ou celular abrindo o arquivo `index.html` no seu browser favorito; ou
- Você pode acessar diretamente pelo **[Github pages](https://sucodelarangela.github.io/alura-challenge-front-end/)**

## Como uso a aplicação?

A primeira página que você verá é a página do **Editor de Código**. Seu primeiro passo é fazer o login no canto superior direito, basta inserir seu nome de usuário na janela que aparecerá.

Em seguida, você pode escrever o seu trecho de código, selecionar a linguagem (HTML, CSS ou Javascript) no menu _dropdown_ e visualizar seu código estilizado com o **Highlight**. Também é possível dar um nome e uma descrição para o seu projeto, bem como escolher a cor que o seu cartão terá ao ser exibido na página da Comunidade.

Ao salvar o seu cartão, a aplicação utilizará o `localStorage` para enviar as informações para a página da **Comunidade**. Lá você poderá ver o seu cartão pronto!

Futuramente, será implementado o sistema de busca! :)

![](/Images/editor_page.png)
![](/Images/community_page.png)

## Deletando um projeto

Caso tenha salvo um cartão com um código errado ou simplesmente cansou daquilo ali, você pode passar o botão do mouse sobre o cartão e você verá a opção de apagá-lo. Nas versões mobile, basta tocar uma vez sobre o cartão.

## Limpando os dados do localStorage

Mesmo que você feche a página da aplicação, o `localStorage` vai manter seus dados salvos. Para limpar esses dados, você pode abrir as Ferramentas de Desenvolvimento do Navegador usando a tecla `F12` do seu teclado. Vá até a aba "Console" e digite o comando abaixo e pronto: seu navegador está limpo e você pode testar novos códigos na plataforma!

```js
localStorage.clear()
```

## Linguagens, bibliotecas e API's utilizadas:

<div style="display: grid; grid-auto-flow:column; width: fit-content; gap: 0.5rem;">
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <a href="https://highlightjs.org/" target="_blank"><img src="https://img.shields.io/badge/-HIGHLIGHT.JS-critical"></a>
  <a href="https://sweetalert.js.org/" target="_blank"><img src="https://img.shields.io/badge/-SWEETALERT-%23f27474"></a>
  <a href="https://masonry.desandro.com/" target="_blank"><img src="https://img.shields.io/badge/-MASONRY-%23D26"></a>
</div>

---

<div id="English" style="font-style: italic;">English version</div>

# AluraDEV: Prototype of social media / tool for sharing code samples

## Overview

Hello, Dev! Welcome!

The app **AluraDEV** simulates a social media platform for developers where it is possible to share samples of codes with the development community through customizable cards. This project was proposed by [**Alura**](https://www.alura.com.br/) during a student-exclusive event called Front-End Challenge.

## Do I need to install anything?

It is not necessary to install anything. To test the application, you have two options:

- Download the files and run the application directly on your browser or mobile device by opening the file `index.html` on your browser; or
- Access the page directly on **[Github pages](https://sucodelarangela.github.io/alura-challenge-front-end/)**

## How do I use the application?

The first thing you will see is the **Code Editor Page**. Your first step is to log in to your Github account by clicking the right upper button and provide your github user name.

Then, you can write your piece of code, select the appropriate language (HTML, CSS ou Javascript) in the dropdown menu and view your styled code by hitting the Highlight button. It is also possible to give a name and a description to your project, as well as choosing the color your card will display when it appears on Community Page.

After you save your project, the application will use your browser's `localStorage` to send the info to the **Community** page, where you can view your newly created card!

In the near future, the search functionality will be implemented! :)

![](/Images/editor_page.png)
![](/Images/community_page.png)

## Deleting a project

In case you have saved a card with a mistyped code or you simply feel you want to have a card removed, you can hover the mouse cursor over the card and a delete button will appear. In mobile versions you can touch the card once and the delete button will show.

## Cleaning localStorage data

Even if you close the application page, `localStorage` will keep your data safe i.e. the Community page will keep showing you your previous projects/cards. To clean these data you should open your browser's Dev Tools by hitting the F12 key. Go to the "Console" tab, type the command below and your browser will be clear. Now you can test new codes on the platform!

```js
localStorage.clear()
```

## Languages, libs and API's used in this project:

<div style="display: grid; grid-auto-flow:column; width: fit-content; gap: 0.5rem;">
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
  <img height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <a href="https://highlightjs.org/" target="_blank"><img src="https://img.shields.io/badge/-HIGHLIGHT.JS-critical"></a>
  <a href="https://sweetalert.js.org/" target="_blank"><img src="https://img.shields.io/badge/-SWEETALERT-%23f27474"></a>
  <a href="https://masonry.desandro.com/" target="_blank"><img src="https://img.shields.io/badge/-MASONRY-%23D26"></a>
</div>
