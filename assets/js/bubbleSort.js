let arr = []
let sortingArea = document.getElementsByClassName('sorting')
window.addEventListener('load',()=>{
     CreateArray()
     const btnRandom = document.getElementsByClassName('random')[0]
    btnRandom.addEventListener('click',()=>{
        arr = []
        sortingArea[0].innerHTML=""
          CreateArray()
   })
   const sort = document.getElementsByClassName('sort')[0];
sort.addEventListener('click',()=>{
   let block = document.querySelectorAll('.block')
   BubbleSort(arr,block)
    console.log('sorted',arr)
})
})
function CreateArray(){
    let n = Math.floor(Math.random()*10+5)
    for(let i=0;i<n;i++){
         arr.push(Math.floor(Math.random()*49+1))
    }
    if (arr.length && arr.length<=15) {
        let check = arr.filter((ele)=>ele>50)
        if(check.length){
            alert('Sorry, you are restricted to values between 1 and 50 inclusive. (Out of range number: 1000.)')
            const div = document.createElement('div')
            div.innerHTML = `<h4 style='color:white;'>Sorry, you're restricted to values between 1 and 50 inclusive. (Out of range number: ${check}.)</h4>`
            sortingArea[0].appendChild(div)
        }else{
            arr.forEach((ele,index)=>{
                const block = document.createElement('div');
                block.innerText = ele
                block.style.height = ele*0.60+'pc'
                block.classList.add('block');
                sortingArea[0].appendChild(block)
         })
        }
    
    }else{
        alert('You can not have more than 15 elements!')
    }
}

function BubbleSort(arr,block) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            // block[j].style.backgroundColor = "red"
            // block[j+1].style.backgroundColor = "yellow"
            if (arr[j] > arr[j + 1]) {
                    Swap(arr, j, j + 1,block)
            }
        }
    }
    return arr;
}

function Swap(arr, i, j,block) {
    let tamp = block[i]
    console.log(tamp,block)
    block[i] = block[j]
    block[j] = tamp
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}


