export const contactSection = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    // Contact Object List 
    const contactTextObject = {
        conntactTags: ['section', 'h1','h2','h3','a','footer'],
        section: {
            id: 'contact',
            classId:'contact-section',
        },
        h1: {
            htmlString: 'Contact Me',
        },
        h2: {
            id: 'e-mail',
            htmlString: 'E-mail: andrewhumphrieswork@outlook.com',
        },
        h3: {
            id: 'github',
        },
        a: {
            href: 'https://github.com/jehutymsms',
            target: '_blank',
            htmlString: 'GitHub Link',
        },
        footer: {
            id: 'footer',
            htmlString: 'Created by Andrew Humphries',
        },
    };

    //Return an object list of the elements
    const contactElementList = (objectlist) => {
        let list = {};
        for (let i = 0; i < objectlist.conntactTags.length; i++) {
            let contactItem = objectlist[objectlist.conntactTags[i]]
                let element = newElement({
                    tag: objectlist.conntactTags[i],
                    id: contactItem.id,
                    classId: contactItem.classId,
                    htmlString: contactItem.htmlString,
                    href: contactItem.href,
                    target: contactItem.target,
                });

            list[`${objectlist.conntactTags[i]}`] = element;
        };
        return list;
    };

    // Main Background Section
    const contactSection = () => {
        let contactItems = contactElementList(contactTextObject),
        section = contactItems.section,
        h1 = contactItems.h1,
        h2 = contactItems.h2,
        h3 = contactItems.h3,
        a = contactItems.a,
        footer = contactItems.footer,
        elementList = [h1,h2,h3,footer]

        h3.appendChild(a)

        for(let i=0;i<elementList.length;i++){
            section.appendChild(elementList[i])
        }

        render.bodyAppendChild(section);
    };

    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);

        if (item.id) { element.id = item.id; };
        if (item.classId) { element.classList = item.classId; };
        if (item.href) { element.href = item.href; };
        if (item.target) { element.target = item.target; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();
    return {contactSection:contactSection}
})()