import {
  from, tap, fromEvent, pipe, map, filter,
} from 'rxjs';

export default class Collapse {
  static collapsingButtons() {
    const buttons = document.querySelectorAll('.widget-button');

    fromEvent(buttons, 'click')
      .pipe(
        map((event) => event.target),
      )
      .subscribe({
        next: (item) => {
          const itemParent = item.closest('.widget-field');
          const text = itemParent.querySelector('.widget-text-field');
          const heightStart = item.offsetHeight + item.offsetTop + 15;
          const heightEnd = text.offsetHeight + text.offsetTop + 20;
          const fps = 60 / 1000;
          const duration = 500;
          const framecount = fps * duration;
          const stepSize = (heightEnd - heightStart) / framecount;
          const frameDuration = 1 / fps;
          if (!item.classList.contains('open')) {
            const height = heightStart;
            Collapse.step(item, itemParent, heightEnd, height, stepSize, frameDuration);
          } else {
            const height = heightEnd;
            Collapse.stepBack(item, itemParent, heightStart, height, stepSize, frameDuration);
          }
        },
      });
  }

  static step(item, itemParent, heightEnd, height, stepSize, frameDuration) {
    if (height > heightEnd) {
      item.classList.toggle('open');
      item.setAttribute('data-status', 'read');
      return;
    }
    height += stepSize;
    item.closest('.widget-field').style.height = `${height}px`;

    setTimeout(() => Collapse.step(
      item,
      itemParent,
      heightEnd,
      height,
      stepSize,
      frameDuration,
    ), frameDuration);
  }

  static stepBack(item, itemParent, heightStart, height, stepSize, frameDuration) {
    if (height < heightStart) {
      item.classList.toggle('open');
      return;
    }

    height -= stepSize;
    item.closest('.widget-field').style.height = `${height}px`;

    setTimeout(() => Collapse.stepBack(
      item,
      itemParent,
      heightStart,
      height,
      stepSize,
      frameDuration,
    ), frameDuration);
  }
}
