import { fromEvent, from } from 'rxjs';

export default class Widget {
  static widget() {
    const body = document.querySelector('body');

    const widget = document.createElement('div');
    widget.className = 'widget';
    body.append(widget);
  }

  static showLetters(status, from, theme, text, date) {
    const widget = document.querySelector('.widget');

    const widgetField = document.createElement('div');
    widgetField.className = 'widget-field';
    widget.prepend(widgetField);

    const widgetPreview = document.createElement('div');
    widgetPreview.className = 'widget-preview';
    widgetField.append(widgetPreview);

    const widgetButton = document.createElement('div');
    widgetButton.setAttribute('data-status', status);
    widgetButton.setAttribute('data-state', 'close');
    widgetButton.className = 'widget-button close';
    widgetPreview.append(widgetButton);

    const widgetPreviewFrom = document.createElement('p');
    widgetPreviewFrom.className = 'widget-preview-from';
    widgetPreviewFrom.textContent = from;
    widgetPreview.append(widgetPreviewFrom);

    const widgetPreviewTheme = document.createElement('p');
    widgetPreviewTheme.className = 'widget-preview-theme';
    widgetPreviewTheme.textContent = theme;
    widgetPreview.append(widgetPreviewTheme);

    const widgetPreviewDate = document.createElement('p');
    widgetPreviewDate.className = 'widget-preview-date';

    widgetPreviewDate.textContent = date;
    widgetPreview.append(widgetPreviewDate);

    const widgetTextField = document.createElement('div');
    widgetTextField.className = 'widget-text-field';
    widgetField.append(widgetTextField);

    const widgetText = document.createElement('p');
    widgetText.className = 'widget-text';
    widgetText.textContent = text;
    widgetTextField.append(widgetText);

    const heightStart = widgetButton.offsetHeight + widgetButton.offsetTop + 15;
    const height = heightStart;
    widgetField.style.height = `${height}px`;
  }
}
