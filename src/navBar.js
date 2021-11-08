export const navBar = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    // Nav bar Object
    const navText = {
        navTitles: ['aboutPage', 'projectPage', 'contactPage'],
        aboutPage: {
            id: 'aboutPage',
            text: 'About'
        },
        projectPage: {
            id: 'projectPage',
            text: 'Projects'
        },
        contactPage: {
            id: 'contactPage',
            text: 'Contact'
        },
    };

    const navBarList = (objectlist) => {
        let list = {};

        for (let i = 0; i < objectlist.navTitles.length; i++) {
            let navItem = objectlist[objectlist.navTitles[i]],
                element = newElement({
                    tag: 'div',
                    id: navItem.id,
                    htmlString: navItem.text,
                });
            list[`item${i}`] = element;
        };
        return list;
    };

    // Main Nav Bar
    const navBarSection = () => {
        let element = newElement({
            tag: 'nav',
            id: 'navbar',
            classId: 'navbar',
        }),
            navItems = navBarList(navText);

        for (let x = 0; x < Object.keys(navItems).length; x++) {
            element.appendChild(navItems[`item${x}`]);
        };

        render.bodyAppendChild(element);
    };

    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.classId) { element.classList = item.classId; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element)
        }

        return { bodyAppendChild:bodyAppendChild };
    })();

    return { navBarSection: navBarSection };
})();