import {ExelComponent} from '@core/ExelComponent';

export class Header extends ExelComponent {
  static className = 'exel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>
        <div class="button">
          <span class="material-icons">delete</span>
        </div>

        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
      </div>
    `;
  }
}
