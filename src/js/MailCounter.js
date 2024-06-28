export default class MailCounter {
  static createMailCounter() {
    const body = document.querySelector('body');

    const mailCounterWidget = document.createElement('div');
    mailCounterWidget.className = 'mail-counter-widget';
    body.append(mailCounterWidget);

    const mailCounterHint = document.createElement('p');
    mailCounterHint.className = 'mail-counter-hint';
    mailCounterHint.textContent = 'Входящих:';
    mailCounterWidget.append(mailCounterHint);

    const mailCounterCount = document.createElement('p');
    mailCounterCount.className = 'mail-counter-count';
    mailCounterCount.textContent = 'нет';
    mailCounterWidget.append(mailCounterCount);
  }
}
