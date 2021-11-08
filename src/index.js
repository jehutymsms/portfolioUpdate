import './style.css';


import { navBar } from './navBar';
import { welcomeSection } from './welcomeSection';
import { backgroundSection } from './backgroundSection';
import { contactSection } from './contactSection';

const newElement = (item) => {
    let element = document.createElement(item.tag);
    if (item.classId) { element.classList = item.classId; };
    if (item.id) { element.id = item.id; };
    if (item.htmlString) { element.innerHTML = item.htmlString; };
    if (item.src){element.src = element.src;};
    if (item.loop){element.loop = element.loop;};
    if (item.autoplay ){element.autoplay  = element.autoplay ;};
    if (item.alt ){element.alt  = element.alt ;};
    if (item.href ){element.href  = element.href ;};
    if (item.target){element.target  = element.target ;};
    return element;
}


// backgroundSection.backgroundSection()
// navBar.navBarSection()
// welcomeSection.welcomeSection()
// contactSection.contactSection()
