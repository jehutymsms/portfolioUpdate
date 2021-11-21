export const welcomeSection = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    // Welcome Object info
    const welcomeTextObject = {
        welcomeTags: ['section', 'div', 'h1', 'p'],
        section: {
            id: 'welcome',
            class: 'welcome-section'
        },
        div: {
            class: 'about'
        },
        h1: {
            htmlString: 'Andrew Humphries'
        },
        p: {
            htmlString: 'Web Developer'
        },
    };

    //Return an object list of the elements
    const welcomeElementList = (objectlist) => {
        let list = {};
        for (let i = 0; i < objectlist.welcomeTags.length; i++) {
            let welcomeItem = objectlist[objectlist.welcomeTags[i]]
                let element = newElement({
                    tag: objectlist.welcomeTags[i],
                    id: welcomeItem.id,
                    class: welcomeItem.class,
                    htmlString: welcomeItem.htmlString,
                });

            list[`${objectlist.welcomeTags[i]}`] = element;
        };
        return list;
    };

    // Main Welcome Section
    const welcomeSection = () => {
        let welcomeItems = welcomeElementList(welcomeTextObject),
        section = welcomeItems.section,
        div = welcomeItems.div,
        h1 = welcomeItems.h1,
        p = welcomeItems.p

        div.appendChild(h1)
        div.appendChild(p)
        section.appendChild(div)

        render.bodyAppendChild(section);
    };

    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);

        if (item.id) { element.id = item.id; };
        if (item.class) { element.classList = item.class; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element)
        }

        return {bodyAppendChild: bodyAppendChild };
    })();

    return { welcomeSection: welcomeSection };
})();