let productid_window =document.querySelector('.productid_window')
let productid_bg =document.querySelector('.productid_bg')
let productid_close_menu =document.querySelector('.productid_close_menu')
let productid_select =document.querySelectorAll('.productid_select')

productid_select.forEach(item => {
    item.onclick = () =>{
        productid_window.style.display = 'block'
        productid_bg.style.display = 'block'
   
    }
})

productid_close_menu.onclick = () =>{
    productid_window.style.display = 'none'
    productid_bg.style.display = 'none'
}
productid_bg.onclick = () =>{
    productid_window.style.display = 'none'
    productid_bg.style.display = 'none'
}