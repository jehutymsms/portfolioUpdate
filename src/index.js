import './style.scss';
import { navBar } from './navBar';
import { welcomeSection } from './welcomeSection';
import { backgroundSection } from './backgroundSection';
import { contactSection } from './contactSection';
import { projectSection } from './projectsSection';

const main = (() => {
    backgroundSection.backgroundSection();
    navBar.navBarSection();
    welcomeSection.welcomeSection()


    const cacheDom = (() => {
        let body = document.getElementsByTagName('body'),
            navBar = document.getElementById('navbar'),
            aboutPage = document.getElementById('aboutPage'),
            projectPage = document.getElementById('projectPage'),
            contactPage = document.getElementById('contactPage');

        return { body: body, navBar: navBar, aboutPage: aboutPage, projectPage: projectPage, contactPage: contactPage };
    })();
    

    const bindEvents = () => {
        cacheDom.aboutPage.addEventListener('click', function () {
            removeCurAddNew(welcomeSection.welcomeSection);
        })
        cacheDom.projectPage.addEventListener('click', function () {
            removeCurAddNew(projectSection.projectSection);
        })
        cacheDom.contactPage.addEventListener('click', function () {
            removeCurAddNew(contactSection.contactSection);
        })
    }

    const render = (() => {
        const removePrev = () => {
            cacheDom.body[0].lastElementChild.remove();
        }
        return { removePrev: removePrev };
    })()

    // Function list
    const removeCurAddNew = (New) => {
        render.removePrev();
        New();
    }

    bindEvents();
    

})();
