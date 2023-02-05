const array = ['1','2','3','4','5','6','7','8','9']
const parent = document.querySelector('.array')
alert("Don't use more than 9 element into the stack");
if (!parent.value && array[0] == "") {
    parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Stack is Empty</h1>'
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
})
document.querySelector('.push').addEventListener('click', () => {
    const val = prompt('Enter an Element for push into the Stack')
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
        parent.innerHTML = '<h1 style="color:Blue;text-align:center;" id="isempty">Stack Underflow!</h1>'
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
        parent.innerHTML = '<h1 style="color:green;text-align:center;" id="isempty">Stack is  Empty!</h1>'
    } else {
        let ele = document.querySelectorAll('.index');
        let index = ele.length-1;
        disableButton(true)
        const Travesinterval = setInterval(() => {
            if (index >=0) {
                if (index<ele.length-1) {
                    ele[index+1].classList.remove('indexBorder')
                }
                ele[index].classList.add('indexBorder')
                index--;
            } else {
                ele[index+1].classList.remove('indexBorder')
                clearInterval(Travesinterval)
                disableButton(false)
            }
        }, time)
    }
})
document.querySelector('.search').addEventListener('click', () => {
    if (!array.length) {
        parent.innerHTML = '<h1 style="color:red;text-align:center;" id="isempty">Stack is  Empty!</h1>'
    } else {
        let ele = document.querySelectorAll('.index');
        let val = prompt('Enter value for Search.')
        console.log(val,array)
        let findIndex = array.indexOf(val)
        let index = ele.length-1;
        disableButton(true)
        const interval = setInterval(() => {
            console.log(index,findIndex)
            if (index >=0) {
                if (index <ele.length-1) {
                    ele[index +1].classList.remove('indexBorder')
                }
                ele[index].classList.add('indexBorder')
                index--;
                if (findIndex == index+1) {
                    clearInterval(interval)
                    disableButton(false)
                }
            } else {
                ele[index +1].classList.remove('indexBorder')
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