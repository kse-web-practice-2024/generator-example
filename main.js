function* boxDnD(element) {
    while(true) {
        const event = yield;
        switch(event.type) {
            case 'mousedown':
                console.log('mousedown')
                outerLoop:
                while(true) {
                    const event = yield;

                    switch(event.type) {
                        case 'mousemove':
                            console.log('mousemove')
                            element.style.top = event.y + 'px';
                            element.style.left = event.x + 'px';
                            break;
                        case 'mouseup':
                            console.log('mouseup')
                            break outerLoop;
                    }
                }
        }
    }
}

const element = document.querySelector('.box');
const box = boxDnD(element)




element.addEventListener('mousedown', event => {
    box.next(event)
})

element.addEventListener('mouseup', event => {
    box.next(event)
})

element.addEventListener('mousemove', event => {
    box.next(event)
})

document.body.addEventListener('mousemove', (event) => {
    box.next(event)
})
