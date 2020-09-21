import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const resizeType = $resizer.data.resize;
    const sideProp = resizeType === 'col' ? 'bottom' : 'right';
    let value = '';

    let cellsToResize = [];
    if (resizeType === 'col') {
      cellsToResize = $root.findAll(`[data-${resizeType}="${$parent.data.col}"]`);
    }

    $resizer.css({
      [sideProp]: '-5000px'
    });

    document.onmousemove = e => {
      if (resizeType === 'col') {
        const delta = e.pageX - coords.right;
        value = e.clientX - coords.left;
        $resizer.css({
          right: -delta + 'px'
        });
      } else {
        const delta = e.pageY - coords.bottom;
        value = e.clientY - coords.top;
        $resizer.css({
          bottom: -delta + 'px'
        });
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      if (resizeType === 'col') {
        $parent.css({width: value + 'px'});
        cellsToResize.forEach(el => el.style.width = value + 'px');
      } else {
        $parent.css({height: value + 'px'});
      }

      resolve({
        value,
        id: $parent.data[resizeType],
        type: resizeType
      });

      $resizer.css({
        right: '0',
        bottom: '0'
      });
    }
  })
}
