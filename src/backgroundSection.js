import earth from './video/earth.mp4';
export const backgroundSection =(() => {
    const cacheDom = (() => {
        let body = document.getElementsByTagName('body')
        return { body: body };
    })();
    // Background Object List 
    const backgroundTextObject = {
        backgroundTags: ['section', 'video'],
        section: {
            id: 'backgroundSection',
        },
        video: {
            id: 'earth',
            muted: true,
            loop: true,
            autoplay: true,
            src: earth,
        },
    };

    //Return an object list of the elements
    const backgroundElementList = (objectlist) => {
        let list = {};
        for (let i = 0; i < objectlist.backgroundTags.length; i++) {
            let backgroundItem = objectlist[objectlist.backgroundTags[i]]
                let element = newElement({
                    tag: objectlist.backgroundTags[i],
                    id: backgroundItem.id,
                    muted: backgroundItem.muted,
                    loop: backgroundItem.loop,
                    autoplay: backgroundItem.autoplay,
                    src: backgroundItem.src,
                });

            list[`${objectlist.backgroundTags[i]}`] = element;
        };
        return list;
    };

    // Main Background Section
    const backgroundSection = () => {
        let backgroundItems = backgroundElementList(backgroundTextObject),
        section = backgroundItems.section,
        video = backgroundItems.video

        
        section.appendChild(video);

        render.bodyAppendChild(section);
    };

    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);

        if (item.id) { element.id = item.id; };
        if (item.muted) { element.muted = item.muted; };
        if (item.loop) { element.loop = item.loop; };
        if (item.autoplay) { element.autoplay = item.autoplay; };
        if (item.src) { element.src = item.src; };
        return element;
    };

    // Render to DOM
    const render = (() => {
        const bodyAppendChild = (element) =>{
            cacheDom.body[0].appendChild(element);
        };

        return {bodyAppendChild: bodyAppendChild };
    })();
    
    return {backgroundSection:backgroundSection}
})()