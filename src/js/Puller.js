import {
  from, tap, map, pipe, of, mergeMap, catchError,
} from 'rxjs';
import API from './API';
import Widget from './Widget';
import Collapse from './Collapser';

export default class Puller {
  constructor() {
    this.api = new API('http://localhost:7040');
  }

  pullMailList() {
    // Puller.clearWidgets();
    // document.querySelector('.mail-counter-count').textContent = "нет";
    const apiPromise = this.api.check();
    from(apiPromise).subscribe({
      next: (result) => {
        from(result.response)
          .pipe(
            map((item) => {
              const arr = [...item.theme];
              arr.length < 15 ? arr : arr.splice(14, (arr.length - 14), '...');
              item.theme = arr.join('');
              return item;
            }),
            map((item) => {
              const arr = [...item.date];
              const pointIndex = arr.findIndex((item) => item === '.');
              arr.splice(pointIndex, (arr.length - pointIndex));
              const tIndex = arr.findIndex((item) => item === 'T');
              let time = arr.splice(tIndex + 1, (arr.length - tIndex));
              time.splice(5, 3);
              time = time.join('');
              arr.pop();
              let postDate = arr.join('');
              postDate = postDate.split('-');
              postDate = postDate.reverse();
              postDate = postDate.join('.');
              item.date = `${time} ${postDate}`;
              return item;
            }),
            catchError((err) => ({})),
          )
          .subscribe((item) => {
            if (Object.keys(item).length > 0) {
              Widget.showLetters(item.status, item.from, item.theme, item.text, item.date);
              if (document.querySelector('.mail-counter-count').textContent === 'нет') {
                document.querySelector('.mail-counter-count').textContent = 1;
              } else {
                document.querySelector('.mail-counter-count')
                  .textContent = +document.querySelector('.mail-counter-count').textContent + 1;
              }
            }
          });
      },
      error: (err) => console.log('Что-то со связью'),
      complete: () => Collapse.collapsingButtons(),
    });
  }

  static clearWidgets() {
    const widgets = document.querySelectorAll('.widget-field');
    for (let i = 0; i < [...widgets].length; i += 1) {
      widgets[i].remove();
    }
  }
}
