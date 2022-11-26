let conteiner = document.querySelector('.conteiner')
function hed(selector) {
    let menu_btn = document.createElement('div')
    let menu_img = document.createElement('img')
    let menu_p = document.createElement('p')
    let hdr = document.createElement('header')
    let header_top = document.createElement('div')
    let header_top_left = document.createElement('div')
    let img = document.createElement('img')
    let form = document.createElement('form')
    let box = document.createElement("div")
    let img_two = document.createElement('img')
    let inp = document.createElement('input')
    let img_three = document.createElement('img')
    let login = document.createElement('div')
    let log_in = document.createElement('button')
    let img_four = document.createElement('img')
    let sp = document.createElement('span')
    let a = document.createElement('a')
    let btn_two = document.createElement('button')
    let img_five = document.createElement('img')
    let btn_three = document.createElement('a')
    let img_six = document.createElement('img')
    let header_bottom = document.createElement('div')
    let header_bottom_left = document.createElement('div')
    let a_two = document.createElement('a')
    let p = document.createElement('p')
    let a_three = document.createElement('a')
    let p_two = document.createElement('p')
    let a_four = document.createElement('a')
    let p_three = document.createElement('p')
    let a_five = document.createElement('a')
    let p_four = document.createElement('p')
    let header_bottom_right = document.createElement('div')
    let a_six = document.createElement('a')
    let p_five = document.createElement('p')
    let img_seven = document.createElement('img')
    let sp_two = document.createElement('span')
    let a_seven = document.createElement('a')
    let p_fix = document.createElement('p')
    let img_eight = document.createElement('img')
    let sp_three = document.createElement('span')

    menu_btn.classList.add('menu_btn')
    menu_img.src = "../icons/menu.svg"
    menu_img.style.width = "28px"
    menu_p.innerHTML = "Menu"
    header_top.classList.add('header_top')
    header_top_left.classList.add('header_top_left')
    img.classList.add('logo')
    img.src = "https://www.ikea.com/nl/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
    form.className = 'search'
    img_two.src = "../icons/211817_search_strong_icon.svg"
    img_two.style.height = "16px"
    inp.type = "text"
    inp.placeholder = "What are you looking for?"
    img_three.classList.add('photo')
    img_three.src = "../icons/115759_camera_icon.svg"
    img_three.style.height = "16px"
    login.classList.add('login')
    log_in.classList.add('log_in')
    img_four.src = "../icons/1564534_customer_man_user_account_profile_icon (1).svg"
    sp.innerHTML = "Hej! Log in or sing up"
    a.href = "../pages/like.html"
    btn_two.classList.add('like')
    btn_two.classList.add('btn')
    img_five.src = "../icons/8664909_heart_like_icon.svg"
    btn_three.classList.add('basket')
    btn_three.classList.add('btn')
    btn_three.href = "/pages/basket.html"

    img_six.src = "../icons/3507743_basket_iconoteka_shop_shopping_store_icon.svg"
    header_bottom.classList.add('header_bottom')
    header_bottom_left.classList.add('header_bottom_left')
    header_bottom_right.classList.add('header_bottom_right')
    a_two.href = "../pages/products.html"
    p.innerHTML = "Products"
    a_three.href = "#"
    p_two.innerHTML = "Rooms"
    a_four.href = "#"
    p_three.innerHTML = "What's new"
    a_five.href = "#"
    p_four.innerHTML = "Offers"
    a_six.href = "#"
    p_five.style.gap = "15px"
    p_fix.style.gap = "15px"
    img_seven.src = "../icons/7019497_shipping_transportation_delivery_truck_online_icon.svg"
    img_seven.style.height = "30px"
    sp_two.innerHTML = "Enter postcode"
    a_seven.href = "#"
    img_eight.src = "../icons/9042517_garage_icon.svg"
    img_eight.style.height = "30px"
    sp_three.innerHTML = "Hengelo"

    box.append(img_two, inp)
    form.append(box, img_three)
    log_in.append(img_four, sp)
    a.append(btn_two)
    btn_two.append(img_five)
    btn_three.append(img_six)
    login.append(log_in, a, btn_three)
    a_two.append(p)
    a_three.append(p_two)
    a_four.append(p_three)
    a_five.append(p_four)
    header_bottom_left.append(a_two, a_three, a_four, a_five)
    a_six.append(p_five, img_seven, sp_two)
    a_seven.append(p_fix, img_eight, sp_three)
    header_top_left.append(img, form)
    header_bottom_right.append(a_six, a_seven)
    header_bottom.append(header_bottom_left, header_bottom_right)
    header_top.append(header_top_left, login)
    hdr.append(header_top, header_bottom)
    menu_btn.append(menu_img, menu_p)
    conteiner.prepend(hdr)

}
hed('.conteiner')