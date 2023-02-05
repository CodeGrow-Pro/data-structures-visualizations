const array = ['1','2','3','4','5','6','7','8','9']
const parent = document.querySelector('.array')
const elements = document.querySelectorAll('.index');
if (!parent.value && array[0] == "") {
    parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Queue is Empty</h1>'
    array.pop()
}
array.forEach((element,index) => {
    const div = document.createElement('div');
    div.classList.add('index');
    div.classList.add('tooltip')
    div.innerHTML = `<span class="tooltiptext">Index : ${index}</span><h2>${element}</h2>`;
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
    const val = prompt('Enter an Element for Enqueue into the Queue')
    const div = document.createElement('div');
    array.push(val)
    div.classList.add('index');
    div.classList.add('tooltip')
    div.innerHTML = `<span class="tooltiptext">Index : ${array.length-1}</span><h2>${val}</h2>`;
    if (document.querySelector('#isempty')) {
        document.querySelector('#isempty').innerHTML = ""
    }
    setTimeout(() => {
        parent.append(div)
    }, 500)
})
document.querySelector('.pop').addEventListener('click', () => {
    if (!array.length) {
        parent.innerHTML = '<h1 style="color:Blue;text-align:center;" id="isempty">Queue in Underflow!</h1>'
    } else {
        let x = array.shift();
        let ele = document.querySelectorAll('.index');
        ele[0].classList.add('indexBorder')
        ele[0].innerHTML = '<h3 style="color:red">Dequeued</h3>'
        const span = document.querySelectorAll('.tooltiptext')
        console.log(span)
        for(let i=0;i<span.length;i++){
            span[i].textContent = `Index : ${i}`
            console.log(i,span[i].textContent)
        }
        setTimeout(() => {
            ele[0].remove()
        }, 500)
    }

})
document.querySelector('.travers').addEventListener('click', () => {
    if (!array.length) {
        parent.innerHTML = '<h1 style="color:yellow;text-align:center;" id="isempty">Queue is  Empty!</h1>'
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
        parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Queue is  Empty!</h1>'
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