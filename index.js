import foods from './menu.json';

    function createCards() {
        return foods.map(e => {
            return `
        <li class="menu__item">
      <article class="card">
        <img
          src= "${e.image}"
          alt="${e.name}"
          class="card__image"
        />
        <div class="card__content">
          <h2 class="card__name">${e.name}</h2>
          <p class="card__price">
            <i class="material-icons"> monetization_on </i>
            ${e.price} кредитов
          </p>
    
          <p class="card__descr">
          ${e.description}
          </p>
    
          <ul class="tag-list">
            <li class="tag-list__item">${e.ingredients[0]}</li>
            <li class="tag-list__item">${e.ingredients[1]}</li>
            <li class="tag-list__item">${e.ingredients[2]}</li>
            <li class="tag-list__item">${e.ingredients[3]}</li>
            <li class="tag-list__item">${e.ingredients[4]}</li>
            <li class="tag-list__item">${e.ingredients[5]}</li>
          </ul>
        </div>
    
        <button class="card__button button">
          <i class="material-icons button__icon"> shopping_cart </i>
          В корзину
        </button>
      </article>
    </li>
        `
        }).join('')
    };

    const cards = createCards();

    const menuEl = document.querySelector('.js-menu');
     menuEl.insertAdjacentHTML('beforeend', cards);

     const themeSwitchToggleEl = document.querySelector('#theme-switch-toggle');
     themeSwitchToggleEl.addEventListener('change', callbackThemeSwitchToggle);

     function callbackThemeSwitchToggle() {
        document.body.classList.toggle('dark-theme');

        writesLocalStorage();
     }

      function writesLocalStorage() {
          const currentTopic = document.querySelector('body').className;
     
          localStorage.setItem('currentTopic', currentTopic);
      };

      const currentClassValue = localStorage.getItem('currentTopic');
      document.body.classList.toggle(currentClassValue);

      function changesCheckboxValue() {if(document.querySelector('body').className === 'dark-theme') {
         themeSwitchToggleEl.checked = true;
     }}

     changesCheckboxValue();