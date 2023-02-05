    const array = prompt('enter any size of array values').split(' ')
    const parent = document.querySelector('.array')
    if (!parent.value && array[0] == "") {
        parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Empty Array</h1>'
        array.pop()
    }
    array.forEach(async element => {
        const div = document.createElement('div');
        div.classList.add('index');
        div.innerHTML = `<h2>${element}</h2>`;
        setTimeout(() => {
            parent.append(div)
        }, 500)
    });
    let time = 1500;
    document.querySelector('.speed').addEventListener('change', () => {
        time = 1500;
        let getTime = document.querySelector('.speed').value
        time = time / getTime
        console.log(getTime, time)
    })
    document.querySelector('.push').addEventListener('click', () => {
        const val = prompt('Enter an Element for push into the array')
        const div = document.createElement('div');
        array.push(val)
        div.classList.add('index');
        div.innerHTML = `<h2>${val}</h2>`;
        if (document.querySelector('#isempty')) {
            document.querySelector('#isempty').innerHTML = ""
        }
        setTimeout(() => {
            parent.append(div)
        }, 500)
    })
    document.querySelector('.pop').addEventListener('click', () => {
        if (!array.length) {
            parent.innerHTML = '<h1 style="color:Blue;text-align:center;" id="isempty">Array Already Empty!</h1>'
        } else {
            array.pop();
            let ele = document.querySelectorAll('.index');
            ele[ele.length - 1].classList.add('indexBorder')
            ele[ele.length - 1].innerHTML = '<h3 style="color:red">Poped</h3>'
            setTimeout(() => {
                ele[ele.length - 1].remove()
            }, 500)
        }

    })
    document.querySelector('.travers').addEventListener('click', () => {
        if (!array.length) {
            parent.innerHTML = '<h1 style="color:yellow;text-align:center;" id="isempty">Array  Empty!</h1>'
        } else {
            let ele = document.querySelectorAll('.index');
            let index = 0;
            disableButton(!index)
            const Travesinterval = setInterval(() => {
                if (index < ele.length) {
                    if (index > 0) {
                        ele[index - 1].classList.remove('indexBorder')
                    }
                    ele[index].classList.add('indexBorder')
                    index++;
                } else {
                    ele[index - 1].classList.remove('indexBorder')
                    clearInterval(Travesinterval)
                    disableButton(false)
                }
            }, time)
        }
    })
    document.querySelector('.search').addEventListener('click', () => {
        if (!array.length) {
            parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Array  Empty!</h1>'
        } else {
            let ele = document.querySelectorAll('.index');
            let val = prompt('Enter value for Search.')
            let findIndex = array.indexOf(val)
            let index = 0;
            disableButton(!0)
            const interval = setInterval(() => {
                if (index < ele.length) {
                    if (index > 0) {
                        ele[index - 1].classList.remove('indexBorder')
                    }
                    ele[index].classList.add('indexBorder')
                    index++;
                    if (findIndex == index - 1) {
                        clearInterval(interval)
                        disableButton(false)
                    }
                } else {
                    ele[index - 1].classList.remove('indexBorder')
                    clearInterval(interval)
                    disableButton(false)
                }
            }, time)

        }
    })

    function disableButton(disable) {
        let btn = ['.push', '.pop', '.search', '.travers', '.speed'];
        for (let i = 0; i < btn.length; i++) {
            document.querySelector(btn[i]).disabled = disable
        }
    }