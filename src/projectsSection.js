export const projectSection = (() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();

    // Project Object info
    const projectTextObject = {
        projects: ['project1', 'project2', 'project3', 'project4'],
        projectClass: ['projectImage', 'project-description'],
        projectTags: ['div', 'img', 'h2', 'a'],
        a: {
            target: '_blank',
            codeLinkText: 'Code Link >',
            livePreviewText: 'Live Preview',
        },
        project1: {
            id: 'project1',
            project1Image: {
                id: 'project1Image',
                img: {
                    src: '/images/Stats preview card component.png',
                    alt: 'Card Project',
                },
                div: {
                    id: 'project1Description',
                    h2: {
                        text: 'Responsive WebPage',
                        codeLink: {
                            href: 'https://github.com/jehutymsms/Stat-Card-Page-Project',
                        },
                        livePreview: {
                            href: 'https://jehutymsms.github.io/Stat-Card-Page-Project/',
                        },
                    },
                },
            },
        },
        project2: {
            id: 'project2',
            project2Image: {
                id: 'project2Image',
                img: {
                    src: '/src/images/RockPaperScissors.png',
                    alt: 'rock paper scissors game image',
                },
                div: {
                    id: 'project2Description',
                    h2: {
                        text: 'Rock Paper Scissors Game',
                        codeLink: {
                            href: 'https://github.com/jehutymsms/ROCKPAPERSCISSORS',
                        },
                        livePreview: {
                            href: 'https://jehutymsms.github.io/ROCKPAPERSCISSORS/',
                        },
                    },
                },
            },
        },
        project3: {
            id: 'project3',
            project3Image: {
                id: 'project3Image',
                img: {
                    src: '/src/images/odin-library-page.png',
                    alt: 'library app image preview',
                },
                div: {
                    id: 'project3Description',
                    h2: {
                        text: 'Library Application',
                        codeLink: {
                            href: 'https://github.com/jehutymsms/Library-Odin-project',
                        },
                        livePreview: {
                            href: 'https://jehutymsms.github.io/Library-Odin-project/',
                        },
                    },
                },
            },
        },
        project4: {
            id: 'project4',
            project4Image: {
                id: 'project4Image',
                img: {
                    src: '/src/images/odin-restaurant-page.png',
                    alt: 'restaurant home page preview',
                },
                div: {
                    id: 'project4Description',
                    h2: {
                        text: 'Restaurant Page',
                        codeLink: {
                            href: 'https://github.com/jehutymsms/odin-restaurant-page',
                        },
                        livePreview: {
                            href: 'https://jehutymsms.github.io/odin-restaurant-page/',
                        },
                    },
                },
            },
        },
    };

    // List of Description elements
    const descriptElementList = (number) => {
        let list = {};

        list.item0 = newElement({
            tag: Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div'])[1],
            htmlString: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'].text,
        })
        for (let i = 1; i < Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2']).length; i++) {
            list[`item${i}`] = newElement({
                tag: projectTextObject.projectTags[3],
                href: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'][`${Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'])[i]}`].href,
                target: projectTextObject.a.target,
                htmlString: projectTextObject['a'][`${Object.keys(projectTextObject.a)[i]}`],
            })
        }
        return list
    }

    const projectImageElements = (number) => {
        let list = {},
            descriptElements = descriptElementList(number);

        list.item1 = newElement({
            tag: projectTextObject.projectTags[1],
            src: projectTextObject[`project${number}`][`project${number}Image`]['img'].src,
            alt: projectTextObject[`project${number}`][`project${number}Image`]['img'].alt,
        })

        list.item2 = newElement({
            tag: projectTextObject.projectTags[0],
            id: projectTextObject[`project${number}`][`project${number}Image`]['div'].id,
            classId: projectTextObject.projectClass[1],
        })

        for (let x = 0; x < Object.keys(descriptElements).length; x++) {
            list.item2.appendChild(descriptElements[`item${x}`]);
        };

        return list
    }

    const projectElements = (number) => {
        let elements = projectImageElements(number),
            projectElement = newElement({
                tag: projectTextObject.projectTags[0],
                id: projectTextObject[`project${number}`][`project${number}Image`].id,
                classId: projectTextObject.projectClass[0],
            })

        for (let x = 0; x < Object.keys(elements).length; x++) {
            projectElement.appendChild(elements[`item${x + 1}`]);
        };
        return projectElement
    }

    const projectList = () => {
        let list = {},
            elements = [];

        for (let x = 0; x < projectTextObject.projects.length; x++) {
            elements.push(projectElements(x + 1))
        }

        for (let x = 0; x < projectTextObject.projects.length; x++) {
            list[`item${x}`] = newElement({
                tag: projectTextObject.projectTags[0],
                id: projectTextObject[`project${x + 1}`].id,
            })
        };

        for (let x = 0; x < Object.keys(list).length; x++) {
            list[`item${x}`].appendChild(elements[x])
        };

        return list
    }

    const projectSection = () => {
        let list = projectList(),
            projectContainer = newElement({
                tag: 'div',
                id: 'projectContainer',
            }),
            projects = newElement({
                tag: 'section',
                id: 'projects',
                classId: 'projects-section'
            });

        for (let x = 0; x < Object.keys(list).length; x++) {
            projectContainer.appendChild(list[`item${x}`])
        };

        projects.appendChild(projectContainer)

        render.bodyAppendChild(projects)
    }

    // Element Creation
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.classId) { element.classList = item.classId; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        if (item.href) { element.href = item.href; };
        if (item.target) { element.target = item.target; };
        if (item.src) { element.src = item.src; };
        if (item.alt) { element.alt = item.alt; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) => {
            cacheDom.body[0].appendChild(element)
        }

        return { bodyAppendChild: bodyAppendChild };
    })();

    return { projectSection: projectSection }
})()