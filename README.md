# 17º Projeto: Recipes Book
<p align="center">
  <img src="https://github.com/prtpj1/recipes-app/blob/main/images/Header_GitHub.png?raw=true" alt="Header" />
</p>

---
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>

---
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>

---
## Project Description
During my learning period at Trybe, I contributed to the development of this application, which was a project in a group of 5 people.

It's a Recipes application where logged users can view recipes, select favorites, and filter their searches for both drinks and food.

A significant part of the development was done in something similar to pair programming, with all five of us assisting each other.

At other times, each member worked on separate parts of the code, as well as making corrections and small modifications.

The group consisted of colleagues with different levels of expertise and knowledge, allowing us to develop with each person contributing in the best way each one could.

In this project, we practiced agile methodologies using a Kanban board where project demands were defined. <br>
The use of Slack and Zoom was also crucial for the group's communication.

It was not just a development task, but also involved communication and building good relationships. I'm pleased to have worked and grown alongside excellent programmers.

## Team
I learned a lot from each of them
- [Felipe](https://github.com/felipefraxe) 
- [Ítalo](https://github.com/Italo9)
- [João "Pasip"](https://github.com/joao-pasip)
- [Sérgio](https://github.com/serjofrancisco)

## In this project, I learned and put into practice
- Using React's Context API to manage state
- Using the React Hook useState
- Using the React Hook useContext
- Using the React Hook useEffect
- Creating custom Hooks

## According to the project requirements designated by Trybe, I learned how to
⚠️This project has 87 requirements. Therefore, I decided to put the list inside a "show/hide" button⚠️
<details>
  <summary>Click to show/hide the list of requirements</summary>
  
  - ✅ Develop the screen so that the form is only valid after a valid email and a password of more than 6 characters are filled in
  - ✅ Develop the screen so that the user can type their password in the password input
  - ✅ Develop the screen so that the user can type their email in the email input
  - ✅ Create all the elements that must respect the attributes described in the prototype for the `login` screen
  - ✅ Redirect the user to the main recipes screen after successful submission and validation of the `login`
  - ✅ Save the user's email in `localStorage` under the key `user` after submission
  - ✅ Save 2 tokens in `localStorage` after submission, identified by the keys `mealsToken` and `cocktailsToken`
  - ✅ Redirect the user to the profile screen when clicking on the profile button
  - ✅ Implement an icon for the profile screen, a title, and an icon for the search, if it exists in the prototype
  - ✅ Implement the header elements on the main recipes screen, respecting the attributes described in the prototype
  - ✅ Develop the search button so that, when clicked, the search bar appears. It should also hide it
  - ✅ Implement the search bar elements respecting the attributes described in the prototype
  - ✅ Position the search bar right below the header and implement 3 `radio buttons`: `Ingredient`, `Name`, and `First letter`
  - ✅ Search the food API if the user is on the food screen and the drinks API if they are on the drinks screen
  - ✅ Redirect to the recipe details screen if only one recipe is found, with the recipe's `ID` in the `URL`
  - ✅ Show the recipes in cards if more than one recipe is found
  - ✅ Display an `alert` if no recipes are found
  - ✅ Implement the bottom menu elements respecting the attributes described in the prototype
  - ✅ Position the bottom menu fixed and display 3 icons: one for foods, one for drinks, and another for exploration
  - ✅ Show the bottom menu only on the screens indicated by the prototype
  - ✅ Redirect the user to a list of `cocktails` when clicking on the drinks icon
  - ✅ Redirect the user to the explore screen when clicking on the exploration icon
  - ✅ Redirect the user to a list of foods when clicking on the foods icon
  - ✅ Implement the main recipes screen elements respecting the attributes described in the prototype
  - ✅ Load the first 12 recipes of foods or drinks, one in each card
  - ✅ Implement category buttons to be used as filters
  - ✅ Implement filtering of recipes through the API when clicking on the category filter
  - ✅ Implement the filter as a toggle, so if selected again, the app should return the recipes without any filter
  - ✅ Implement the category filter so that only one can be selected at a time
  - ✅ Develop the category filter with the option to filter by all categories
  - ✅ Redirect the user, when clicking on the card, to the details screen, which should change the route and contain the recipe's `id` in the `URL`
  - ✅ Implement the details screen elements of a recipe respecting the attributes described in the prototype
  - ✅ Make a request to the API passing the `id` of the recipe that must be available in the `URL` parameters
  - ✅ Develop the screen so that it contains an image of the recipe, the title, the category (or whether it is alcoholic or not), a list of ingredients followed by quantities, instructions, an embedded YouTube video, and recommendations
  - ✅ Implement recommendations; for food recipes, the recommendation should be a drink and vice-versa
  - ✅ Implement recommendation cards, where there will be 6 cards, but only showing 2, and the scroll is horizontal, similar to a `carousel`
  - ✅ Develop a button named `Start Recipe` that should stay fixed at the bottom of the screen at all times
  - ✅ Implement the solution so that if the recipe has already been made, the `Start Recipe` button should disappear
  - ✅ Implement the solution so that if the recipe has been started but not finished, the button text should be `Continue Recipe`
  - ✅ Redirect the user if the `Start Recipe` button is clicked, the route should change to the in-progress recipe screen
  - ✅ Implement a share button and a favorite button for the recipe
  - ✅ Implement the solution so that, when clicking on the share button, the recipe link within the app should be copied to the clipboard and a message notifying that the link has been copied should appear
  - ✅ Implement the heart icon (favorite) so that it should be filled if the recipe is favorited and "unfilled" otherwise
  - ✅ Implement the logic in the favorite button, if clicked, the heart icon should change its current state, if it is filled, it should change to "unfilled" and vice-versa
  - ✅ Save favorite recipes in `localStorage` under the key `favoriteRecipes`
  - ✅ Develop the screen so that it contains an image of the recipe, its title, its category (or whether the drink is alcoholic or not), a list of ingredients with their respective quantities and instructions
  - ✅ Develop a `checkbox` for each item in the ingredients list
  - ✅ Implement logic so that when clicking the `checkbox` of an ingredient, its name should be "striked" from the list
  - ✅ Save the progress state, which must be maintained if the user refreshes the page or goes back to the same recipe
  - ✅ Develop the logic for favoriting and sharing; the logic for the recipe details screen applies here
  - ✅ Implement the solution so that the finish recipe button (`Finish Recipe`) can only be enabled when all ingredients are "checked"
  - ✅ Redirect the user after clicking on the finish recipe button (`Finish Recipe`) to the done recipes screen, whose route should be `/done-recipes`
  - ✅ Implement the elements of the done recipes screen respecting the attributes described in the prototype
  - ✅ Develop the screen so that if the recipe of the card is a food, it should contain: the recipe photo, the name, the category, the nationality, the date the user made the recipe, the first 2 `tags` returned by the API, and a share button
  - ✅ Develop the screen so that if the recipe of the card is a drink, it should contain: the recipe photo, the name, whether it is alcoholic, the date the user made the recipe, and a share button
  - ✅ Develop the solution so that the share button should copy the `URL` of the recipe details screen to the clipboard
  - ✅ Implement 2 buttons that filter the recipes by food or drink and a third that removes all filters
  - ✅ Redirect to the recipe details screen if the photo or name of the recipe is clicked
  - ✅ Implement the elements of the favorite recipes screen (cumulative with the common attributes of the done recipes screen) respecting the attributes described in the prototype
  - ✅ Develop the screen so that if the recipe of the card is a food, it should contain: the recipe photo, the name, the category, the nationality, a share button, and an "unfavorite" button
  - ✅ Develop the screen so that if the recipe of the card is a drink, it should contain: the recipe photo, the name, whether it is alcoholic or not, a share button, and an "unfavorite" button
  - ✅ Develop the solution so that the "unfavorite" button should remove the recipe from the list of favorite recipes in `localStorage` and from the screen
  - ✅ Implement the elements of the explore screen respecting the attributes described in the prototype
  - ✅ Develop the screen so that it has 2 buttons: one to explore foods and the other to explore drinks
  - ✅ Redirect the user when clicking on one of the buttons, the route should change to the food explore page or the drink explore page
  - ✅ Implement the elements of the explore drinks or foods screen respecting the attributes described in the prototype
  - ✅ Develop 3 buttons: one to explore by ingredient, one to explore by nationality, and one to get a random recipe
  - ✅ Redirect the user when clicking on `By Ingredient`, the route should change to the explore by ingredients screen
  - ✅ Redirect the user when clicking on `By Nationality`, the route should change to the explore by nationalities screen
  - ✅ Redirect the user when clicking on `Surprise me!`, the route should change to the details screen of a recipe, which should be chosen randomly through the API
  - ✅ Implement the route that should only be `/explore/foods/nationalities`
  - ✅ Implement the profile screen elements respecting the attributes described in the prototype
  - ✅ Implement the solution so that the user's email should be visible
  - ✅ Implement 3 buttons: one named `Done Recipes`, one named `Favorite Recipes`, and one named `Logout`
  - ✅ Redirect the user when clicking the `Done Recipes` button, the route should change to the done recipes screen
  - ✅ Redirect the user when clicking the `Favorite Recipes` button, the route should change to the favorite recipes screen
  - ✅ Redirect the user when clicking the `Logout` button, `localStorage` should be cleared and the route should change to the `login` screen
  - ❌ Develop the same specifications as the main recipes screen, with the difference that the category filters are replaced by a dropdown
  - ❌ Implement the elements of the screen to explore by nationalities, respecting the attributes described in the prototype
  - ❌ Implement the dropdown to ensure all areas returned from the API are available, including the option `All`, which returns recipes without any filter
  - ❌ Implement unit tests to ensure coverage of at least 90%

</details>

## Stacks
#### FrontEnd
- JavaScript
- HTML
- CSS
- React w/ Context API and Hooks

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png" width="50" height="50" alt="JavaScript Icon" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png" width="50" height="50" alt="HTML Icon" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png" width="50" height="50" alt="CSS3 Icon" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png" width="50" height="50" alt="React Icon" /></a>

## Link to App:
[Recipes App](https://app-recipes-iota.vercel.app/)

## How to Run the Application?
- Clone the repository: <br>
`git clone git@github.com:prtpj1/recipes-app.git`
- Access the project folder: <br>
`cd recipes-app`
- Install dependencies: <br>
`npm install`
- Start the application: <br>
`npm start`

---
### Important :warning:
This app was developed with a layout for mobile devices (recommended resolution: 360 x 640 according to project requirements). Therefore, I recommend accessing the site on your mobile device rather than on a desktop or laptop.

If you're unsure how to do this, follow the steps below:
- With the site open in your browser, right-click on an empty area of the screen.
- In the menu that appears, select "Inspect."
- On the screen that appears on the right side of your browser, look for the icon in the upper-left corner that resembles a mobile phone and tablet, then click on it.
<img src="https://github.com/prtpj1/recipes-app/blob/main/images/mobile.png" alt="mobile" />
- At the top of the browser screen, you will see a place to change the site's dimensions.
- Enter the recommended values of 360 x 640 (ensure that "Dimensions: Responsive" is written on the left side; if not, click and select).
<img src="https://github.com/prtpj1/recipes-app/blob/main/images/dimensions.png" alt="dimensions" />

## Used API Endpoint
[TheMealDB API](https://www.themealdb.com/api.php)


_*NOTE: If you encounter any difficulties with the instructions and would like to provide feedback, feel free to send me a message.*_

---
## Descrição do Projeto
Durante meu período de aprendizagem na Trybe, ajudei a desenvolver esta aplicação que foi um projeto em um grupo de 5 pessoas.

É uma aplicação de Receitas onde o usuário cadastrado pode consultar as receitas, selecionar as favoritas, filtrar suas buscas tanto para bebidas quanto comidas. 

Boa parte do desenvolvimento foi feito em algo similar ao pair-programing, mas com nós 5 nos ajudando mutuamente.<br>
Em outros momentos cada membro fez algumas partes do código em separado e também algumas correções e pequenas modificações.

O grupo possuía colegas de diferentes níveis e conhecimento e com isso fomos desenvolvendo com cada um contribuindo da melhor maneira que conseguia.

Neste projeto, praticamos metodologias ágeis usando um quadro de Kanban onde estavam definidas as demandas do projeto. 

O uso do Slack e Zoom também foram muito importantes para a comunicação do grupo.


Não foi apenas um trabalho de desenvolvimento, mas também de comunicação e bom relacionamento. Fico feliz em ter trabalhado e desenvolvido junto a ótimos programadores.

## Grupo
Aprendi bastante com cada um deles
- [Felipe](https://github.com/felipefraxe) 
- [Ítalo](https://github.com/Italo9)
- [João "Pasip"](https://github.com/joao-pasip)
- [Sérgio](https://github.com/serjofrancisco)

## Nesse projeto, aprendi e coloquei em prática
- Utilizar a Context API do React para gerenciar estado
- Utilizar o React Hook useState
- Utilizar o React Hook useContext
- Utilizar o React Hook useEffect
- Criar Hooks customizados

## De acordo com os requisitos do projeto designados pela Trybe aprendi como
⚠️Este projeto possui 87 requisitos. Por isso decidi colocar a lista dentro de um botão de "exibir/ocultar"⚠️
<details>
  <summary>Clique para exibir/ocultar a lista de requisitos</summary>
  
  - ✅ Desenvolver a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos
  - ✅ Desenvolver a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha
  - ✅ Desenvolver a tela de maneira que a pessoa deve conseguir escrever seu email no input de email
  - ✅ Criar todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de `login`
  - ✅ Redirecionar a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do `login`
  - ✅ Salvar o e-mail da pessoa usuária no `localStorage` na chave `user` após a submissão
  - ✅ Salvar 2 tokens no `localStorage` após a submissão, identificados pelas chaves `mealsToken` e `cocktailsToken`
  - ✅ Redirecionar a pessoa usuária para a tela de perfil ao clicar no botão de perfil
  - ✅ Implementar um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo
  - ✅ Implementar os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo
  - ✅ Desenvolver o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la
  - ✅ Implementar os elementos da barra de busca respeitando os atributos descritos no protótipo
  - ✅ Posicionar a barra logo abaixo do header e implementar 3 `radio buttons`: `Ingredient`, `Name` e `First letter`
  - ✅ Buscar na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas
  - ✅ Redirecionar para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o `ID` da mesma na `URL`
  - ✅ Mostrar as receitas em cards caso mais de uma receita seja encontrada
  - ✅ Exibir um `alert` caso nenhuma receita seja encontrada
  - ✅ Implementar os elementos do menu inferior respeitando os atributos descritos no protótipo
  - ✅ Posicionar o menu inferior de forma fixa e apresentar 3 ícones: um para comidas, um para bebidas e outro para exploração
  - ✅ Exibir o menu inferior apenas nas telas indicadas pelo protótipo
  - ✅ Redirecionar a pessoa usuária para uma lista de `cocktails` ao clicar no ícone de bebidas
  - ✅ Redirecionar a pessoa usuária para a tela de explorar ao clicar no ícone de exploração
  - ✅ Redirecionar a pessoa usuária para uma lista de comidas ao clicar no ícone de comidas
  - ✅ Implementar os elementos da tela principal de receitas respeitando os atributos descritos no protótipo
  - ✅ Carregar as 12 primeiras receitas de comidas ou bebidas, uma em cada card
  - ✅ Implementar os botões de categoria para serem utilizados como filtro
  - ✅ Implementar o filtro das receitas através da API ao clicar no filtro de categoria
  - ✅ Implementar o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro
  - ✅ Implementar o filtro de categoria para que apenas um seja selecionado por vez
  - ✅ Desenvolver o filtro de categorias com a opção de filtrar por todas as categorias
  - ✅ Redirecionar a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o `id` da receita na `URL`
  - ✅ Implementar os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo
  - ✅ Realizar uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da `URL`
  - ✅ Desenvolver a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações
  - ✅ Implementar as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa
  - ✅ Implementar os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`
  - ✅ Desenvolver um botão de nome `Start Recipe` que deve ficar fixo na parte de baixo da tela o tempo todo
  - ✅ Implementar a solução de forma que caso a receita já tenha sido feita, o botão `Start Recipe` deve sumir
  - ✅ Implementar a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser `Continue Recipe`
  - ✅ Redirecionar a pessoa usuária caso o botão `Start Recipe` seja clicado, a rota deve mudar para a tela de receita em progresso
  - ✅ Implementar um botão de compartilhar e um de favoritar a receita
  - ✅ Implementar a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer
  - ✅ Implementar o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário
  - ✅ Implementar a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa
  - ✅ Salvar as receitas favoritas no `localStorage` na chave `favoriteRecipes`
  - ✅ Desenvolver a tela de maneira que contenha uma imagem da receita, seu título, sua categoria (ou se a bebida é alcoólica ou não), uma lista de ingredientes com suas respectivas quantidades e suas instruções
  - ✅ Desenvolver um `checkbox` para cada item da lista de ingredientes
  - ✅ Implementar uma lógica que, ao clicar no `checkbox` de um ingrediente, o nome dele deve ser "riscado" da lista
  - ✅ Salvar o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita
  - ✅ Desenvolver a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui
  - ✅ Implementar a solução de maneira que o botão de finalizar receita (`Finish Recipe`) só pode estar habilitado quando todos os ingredientes estiverem "checkados" (marcados)
  - ✅ Redirecionar a pessoa usuária após clicar no botão de finalizar receita (`Finish Recipe`), para a página de receitas feitas, cuja rota deve ser `/done-recipes`
  - ✅ Implementar os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
  - ✅ Desenvolver a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras `tags` retornadas pela API e um botão de compartilhar
  - ✅ Desenvolver a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
  - ✅ Desenvolver a solução de maneira que o botão de compartilhar deve copiar a `URL` da tela de detalhes da receita para o clipboard
  - ✅ Implementar 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
  - ✅ Redirecionar para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
  - ✅ Implementar os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo
  - ✅ Desenvolver a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar"
  - ✅ Desenvolver a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
  - ✅ Desenvolver a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela
  - ✅ Implementar os elementos da tela de explorar respeitando os atributos descritos no protótipo
  - ✅ Desenvolver a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas
  - ✅ Redirecionar a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas
  - ✅ Implementar os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo
  - ✅ Desenvolver 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória
  - ✅ Redirecionar a pessoa usuária ao clicar em `By Ingredient`, a rota deve mudar para a tela de explorar por ingredientes
  - ✅ Redirecionar a pessoa usuária ao clicar em `By Nationality`, a rota deve mudar para tela de explorar por nacionalidades
  - ✅ Redirecionar a pessoa usuária ao clicar em `Surprise me!`, a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API
  - ✅ Implementar a rota que deve ser apenas `/explore/foods/nationalities`
  - ✅ Implementar os elementos da tela de perfil respeitando os atributos descritos no protótipo
  - ✅ Implementar a solução de maneira que o e-mail da pessoa usuária deve estar visível
  - ✅ Implementar 3 botões: um de nome `Done Recipes`, um de nome `Favorite Recipes` e um de nome `Logout`
  - ✅ Redirecionar a pessoa usuária que, ao clicar no botão de `Done Recipes`, a rota deve mudar para a tela de receitas feitas
  - ✅ Redirecionar a pessoa usuária que, ao clicar no botão de `Favorite Recipes`, a rota deve mudar para a tela de receitas favoritas
  - ✅ Redirecionar a pessoa usuária que, ao clicar no botão de `Logout`, o `localStorage` deve ser limpo e a rota deve mudar para a tela de `login`
  - ❌ Desenvolver os mesmos especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown
  - ❌ Implementar os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo
  - ❌ Implementar o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção `All`, que retorna as receitas sem nenhum filtro
  - ❌ Implementar os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

</details>

## Tecnologias Utilizadas
#### FrontEnd
- JavaScript
- HTML
- CSS
- React c/ Context API e Hooks

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png" width="50" height="50" alt="HTML Icon" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png" width="50" height="50" alt="CSS3 Icon" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png" width="50" height="50" alt="React Icon" /></a>

## Link para visualizar o projeto
[App Receitas](https://app-recipes-iota.vercel.app/)

## Como rodar a aplicação?
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/recipes-app.git` 
- Acesse a pasta do projeto: <br>
`cd recipes-app`
- Instale as dependências: <br>
`npm install`
- Inicie a aplicação: <br>
`npm start` 

### Importante:warning:
Este app foi desenvolvido com layout para dispositivos móveis (resolução recomendada: 360 x 640 de acordo com os requisitos de projeto). Por tanto, recomendo que acesse o site pelo celular e não pelo desktop ou notebook.

Caso não saiba como fazer, siga os passos abaixo:
- Com o site aberto no seu navegador, clique com o botão direito do mouse em uma area vazia da tela
- No menu que aparecer, selecione "Inspecionar"
- Na tela que aparecerá na lateral direita do seu navegador, procure no canto superior esquerdo o icone que parece um celular junto com um tablet e clique
<img src="https://github.com/prtpj1/recipes-app/blob/main/images/mobile.png" alt="mobile" />
- No topo da tela do navegador aparecerá o local para você alterar as dimensões do site
- Coloque os valores recomendados 360 x 640 (verifique se do lado esquerdo está escrito "Dimensions: Responsive". Se não estiver, clique e selecione)
<img src="https://github.com/prtpj1/recipes-app/blob/main/images/dimensions.png" alt="dimensions" />

## Endpoint da API utilizada
[TheMealDB API](https://www.themealdb.com/api.php)

---
_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_
