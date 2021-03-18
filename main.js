let like=Array.from(document.getElementsByClassName('far'));
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click',function () {
        
            like[i].style.color="red"
        
    })
}


let remove=Array.from(document.getElementsByClassName('fas'));
let product=Array.from(document.getElementsByClassName('product'));
for (let index = 0; index < remove.length; index++) {
    remove[index].addEventListener('click',function () {
        product[index].remove()
    })
    
}
let qt=Array.from(document.getElementsByClassName('qt'));
let qtminus= Array.from(document.getElementsByClassName('qt-minus'));
let qtplus= Array.from(document.getElementsByClassName('qt-plus'));
for (let index = 0; index < qtplus.length; index++) {
    qtplus[index].addEventListener('click',function () {
        qt[index].innerHTML++;
        total[0].innerHTML+=fullprice[i].innerHTML;
        
    })
    
    
}
for (let index = 0; index < qtminus.length; index++) {
    qtminus[index].addEventListener('click',function () {
        if (qt[index].innerHTML>1){
            qt[index].innerHTML--;
        }
       
        
    })

let fullprice= Array.from(document.getElementsByClassName('full-price'));
let total=Array.from(document.getElementsByClassName('total'));
}