import './scss/main.scss'

let num = 0
let page =1
// (商品數量 item=第一項 ,item1=第二項)
let item =1
let item1 = 1

//暫時金額
let tem=3999 ,tem1=1299,tem2


const next =document.querySelector('.next')
const pre =document.querySelector('.pre')
const step = document.querySelectorAll('.step')
const part = document.querySelectorAll('.part')
const price = document.querySelectorAll('.item__price-button')
const total = document.querySelector('.shop-price')
const totall = document.querySelector('.shop-price1')
const money = document.querySelector('.price-total')








function nextChange(e){
  e.preventDefault()
  console.log(num)
  console.log(page)
 if(page === 0){
  step[0].classList.add('active')
  part[0].classList.remove('d-none')
  part[1].classList.add('d-none')
  part[2].classList.add('d-none')
  num ++
  page++
 } else if (page === 1) {
  step[0].classList.remove('active')
  step[0].classList.add('checked')
  step[1].classList.add('active')
  part[1].classList.remove('d-none')
  part[0].classList.add('d-none')
  part[2].classList.add('d-none')
  num ++
  page++
 } else if(page === 2) {
  step[1].classList.remove('active')
  step[1].classList.add('checked')
  step[2].classList.add('active')
  part[2].classList.remove('d-none')
  part[0].classList.add('d-none')
  part[1].classList.add('d-none')
  page++
  num ++
 } else {
   return
 }
 button ()
}
function preChange(e){
  e.preventDefault()
  console.log(num)
  console.log(page)
  if(page === 2) {
    step[0].classList.add('active')
    step[0].classList.remove('checked')
    step[1].classList.remove('active')
    part[0].classList.remove('d-none')
    part[1].classList.add('d-none')
    part[2].classList.add('d-none')
    page--
    num --
   } else if(page === 3) {
    step[1].classList.remove('checked')
    step[1].classList.add('active')
    step[2].classList.remove('active')

    part[1].classList.remove('d-none')
    part[0].classList.add('d-none')
    part[2].classList.add('d-none')
    page--
    num --
   }
    else {
     return
   }
   button ()
}
function button (){
  if(num === 0){
    pre.classList.add('d-none')
    next.style = "width:90%";
    next.innerHTML = `下一步<span class="ml-2">&rarr;</span>`;
  } else if(num === 1){
    pre.classList.remove('d-none')
    next.style = "width:45%";
    next.innerHTML = `下一步<span class="ml-2">&rarr;</span>`;
  } else if(num === 2) {
    next.innerHTML = "確定下單";
  } else{
    return
  }
}

function calc(e){
  item = this.children[1].innerHTML
  if(e.target.innerHTML === this.children[2].innerHTML && e.target.dataset.id ==='1'){
    item= parseInt(item)+ 1 
    tem = (item*3999)
    total.innerHTML=`<span>$</span>${tem.toLocaleString('en-US')}`
    this.children[1].innerHTML = item.toString()
  } else if (e.target.innerHTML === this.children[0].innerHTML && e.target.dataset.id ==='1'){
    item= parseInt(item)- 1 
    if(item < 0) {
      item = 0
    }
    tem = (item*3999)
    total.innerHTML=`<span>$</span>${tem.toLocaleString('en-US')}`
    this.children[1].innerHTML = item.toString()
  }
  if(e.target.innerHTML === this.children[2].innerHTML && e.target.dataset.id ==='2'){
    item1= parseInt(item1)+ 1 
     tem1 = (item1*1299)
    totall.innerHTML=`<span>$</span>${tem1.toLocaleString('en-US')}`
    this.children[1].innerHTML = item1.toString()
  
  } else if (e.target.innerHTML === this.children[0].innerHTML && e.target.dataset.id ==='2'){
    item1= parseInt(item1)- 1 
    if(item1 < 0) {
      item1 = 0
    }
    tem1= (item1*1299)
    totall.innerHTML=`<span>$</span>${tem1.toLocaleString('en-US')}`
    this.children[1].innerHTML = item1.toString()
  }
    console.log(tem,tem1)
    tem2=tem1*1+tem*1
    money.innerHTML=`<span>$</span>${tem2.toLocaleString('en-US')}`
}







pre.addEventListener('click',preChange)
next.addEventListener('click',nextChange)
price.forEach(e => e.addEventListener('click', calc))