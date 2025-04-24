export default () => {
    const elements = {
        container: document.querySelector('.container'),
        sizeBtn: document.querySelector('.btn-size'),
        variableClickBtn: document.querySelector('.toggle'),

    };

    const createArea = (size) => {
            for ( let row = 0; row < size; row++) {
                const rowContainer = document.createElement('div');
                rowContainer.classList.add('container-row');
                elements.container.appendChild(rowContainer);
                for ( let column = 0; column < size; column++) {
                    const divInRow = document.createElement('div');
                    divInRow.classList.add('element-row')
                    rowContainer.appendChild(divInRow);
                };
            };
    };

    const targetHover = (e) => {
        if (e.target.classList.contains('element-row')) {
            e.target.style.backgroundColor = 'red';
        }
    };
    
    const targetClick = (e) => {
        if (e.target.classList.contains('element-row')) {
            e.target.style.backgroundColor = 'white';
        }
    };

    let clickState = true;

    const typeInteraction = () => {
        elements.container.removeEventListener('mouseover', targetHover);
        elements.container.removeEventListener('click', targetClick);

        const mode = clickState ? 
            {event: 'mouseover', handler: targetHover, text: 'Hover'} : 
            {event: 'click', handler: targetClick, text: 'Click'};

        elements.container.addEventListener(mode.event, mode.handler);
        elements.variableClickBtn.textContent = mode.text;
    };
    
    elements.variableClickBtn.addEventListener('click', function () {
        clickState = !clickState;
        typeInteraction();
    });

    elements.sizeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let newSize = prompt('Напишите размер окна');

        const size = parseInt(newSize);

        if (isNaN(size) || size <= 0) {
            alert('Пожалуйста, введите положительное число');
            return;
        } else if (size > 100) {
            alert('Максимальный размер 100!');
            return;
        }
        elements.container.innerHTML = ``
        createArea(size);
    });


    document.addEventListener('mousemove', (e) => {
        let trail = document.createElement('div');
        trail.classList.add('trail');
        document.body.appendChild(trail);
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        setTimeout(() => {
            trail.remove();
        }, 500)
    });

    const initialization = () => {
        createArea(16);
        typeInteraction();
    };
    
    initialization();
}