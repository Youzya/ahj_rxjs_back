import { timer } from 'rxjs';
import Widget from './Widget';
import Puller from './Puller';
import MailCounter from './MailCounter';

MailCounter.createMailCounter();
Widget.widget();

const puller = new Puller();
timer(0, 25000).subscribe(() => puller.pullMailList());
