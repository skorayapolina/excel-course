import {ExelComponent} from '@core/ExelComponent';

export class Toolbar extends ExelComponent {
  static className = 'exel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
      <div class="button">
        <span class="material-icons">format_align_left</span>
      </div>

      <div class="button">
        <span class="material-icons">format_align_right</span>
      </div>

      <div class="button">
        <span class="material-icons">format_align_center</span>
      </div>

      <div class="button">
        <span class="material-icons">format_bold</span>
      </div>

      <div class="button">
        <span class="material-icons">format_italic</span>
      </div>

      <div class="button">
        <span class="material-icons">format_underlined</span>
      </div>
    `;
  }

  onClick(event) {
    console.log(event.target);
  }
}
