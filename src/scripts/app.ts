import '../stylesheets/_style.scss';
import { divButton } from './components/layout/divButton';
import { footer } from './components/layout/footer';
import { header } from './components/layout/header';
import { main } from './components/layout/main';
import { nav } from './components/navigation/nav';
import onLoadScheme from './events/onLoadScheme';


onLoadScheme();
const app = document.querySelector('#app')!;
let appElemList = [header, nav, divButton, main, footer];

appElemList.forEach(element => {
	app?.appendChild(element);
});




