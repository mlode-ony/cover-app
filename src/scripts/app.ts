import '../stylesheets/_style.scss';
import { divButton } from './components/layout/divButton';
import { footer } from './components/layout/footer';
import { header } from './components/layout/header';
import { main } from './components/layout/main';
import { nav } from './components/navigation/nav';

const app = document.getElementById('app')!;
let appElemList = [header, nav, divButton, main, footer];

appElemList.forEach(element => {
	app?.appendChild(element);
});

