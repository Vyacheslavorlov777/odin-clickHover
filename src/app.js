export default () => {
    const elements = {
        container: document.querySelector('.container'),
        sizeBtn: document.querySelector('.btn-size'),
        variableClickBtn: document.querySelector('.toggle'),

    };

    const createArea = (size) => {
            for ( let i = 0; i < size; i++) {
                const rowContainer = document.createElement('div');
                rowContainer.classList.add('container-row');
                elements.container.appendChild(rowContainer);
                for ( let i = 0; i < size; i++) {
                    const divInRow = document.createElement('div');
                    divInRow.classList.add('div-element-row')
                    rowContainer.appendChild(divInRow);
                };
            };
    };

    const targetHover = (e) => {
        if (e.target.classList.contains('div-element-row')) {
            e.target.style.backgroundColor = 'red';
        }
    };
    
    const targetClick = (e) => {
        if (e.target.classList.contains('div-element-row')) {
            e.target.style.backgroundColor = 'white';
        }
    };

    let clickState = true;

    const typeInteraction = () => {
        elements.container.removeEventListener('mouseover', targetHover);
        elements.container.removeEventListener('click', targetClick);
    
        if (clickState) {
    
            elements.container.addEventListener('mouseover', targetHover);
            elements.variableClickBtn.textContent = 'Hover';
    
        }
        else {
            elements.container.addEventListener('click', targetClick);
            elements.variableClickBtn.textContent = 'Click';
        }
    };
    
    elements.variableClickBtn.addEventListener('click', function () {
        clickState = !clickState;
        typeInteraction();
    });

    elements.sizeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let prom = prompt('Напишите размер окна');

        if (prom > 100) {
            alert('Max size: 100!');
            return;
        } else if (prom == 0) {
            alert('Min size: 1!');
            return;
        }
        elements.container.innerHTML = ``
        createArea(prom);
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


    // Default size:
    createArea(16);
    // Default clicker
    typeInteraction();
}