let orderCount = 1;

const form = document.querySelector('#form');
const addButton = document.querySelector('.add-button');

function closeOnClick(event){
    if (event.target.className !== "close-button" || orderCount <= 1)
        return;
    event.target.closest('fieldset').remove();
    orderCount--;
}

form.addEventListener('click', (e) => {closeOnClick(e)})
addButton.addEventListener('click', (ev) => {
    const number = form.querySelectorAll('fieldset.beverage').length + 1;

    const newFieldsetHtml = `
    <fieldset class="beverage">
        <h4 class="beverage-count">Напиток ${number}</h4>
        <button class = "close-button">
          x
        </button>
        <label class="field">
          <span class="label-text">Я буду</span>
          <select>
            <option value="espresso">Эспрессо</option>
            <option value="capuccino" selected>Капучино</option>
            <option value="cacao">Какао</option>
          </select>
        </label>
        <div class="field">
          <span class="checkbox-label">Сделайте напиток на</span>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="usual" checked />
            <span>обычном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="no-fat" />
            <span>обезжиренном молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="soy" />
            <span>соевом молоке</span>
          </label>
          <label class="checkbox-field">
            <input type="radio" name="milk" value="coconut" />
            <span>кокосовом молоке</span>
          </label>
        </div>
        <div class="field">
          <span class="checkbox-label">Добавьте к напитку:</span>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="whipped cream" />
            <span>взбитых сливок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="marshmallow" />
            <span>зефирок</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="chocolate" />
            <span>шоколад</span>
          </label>
          <label class="checkbox-field">
            <input type="checkbox" name="options" value="cinnamon" />
            <span>корицу</span>
          </label>
        </div>
      </fieldset>
    `
    orderCount++;
    addButton.closest('div').insertAdjacentHTML('beforebegin', newFieldsetHtml);
});

function createModalWindow() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-window';

    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close-button';
    closeButton.innerText = `x`;

    const text = document.createElement('p');
    text.textContent = 'Заказ принят!';

    closeButton.addEventListener('click', (e) => {
        overlay.remove();
    })

    modal.append(closeButton, text);
    overlay.append(modal);
    document.body.append(overlay);
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    createModalWindow();
})