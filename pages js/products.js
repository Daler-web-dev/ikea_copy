let products_create_cont = document.querySelector('.products_create_cont')
let liked = JSON.parse(localStorage.getItem('liked')) || []

axios.get("http://localhost:7777/array")
    .then(res => {
        reloadProducts(res.data , products_create_cont)
    })

function setRating(ratingValue , ratingActive) {
    let percent = (ratingValue / 5 * 100).toFixed(0);
    ratingActive.style.width = `${percent}%`
}
// setRating(5)
function reloadProducts(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let products_create_box = document.createElement('div')

        let a = document.createElement('a')
        let products_box_img = document.createElement('div')
        let product_name = document.createElement('h5')

        let product_title = document.createElement('p')

        let product_price = document.createElement('p')

        let product_rate = document.createElement('div')
        let rating_body = document.createElement('div')
        let rating_active = document.createElement('div')
        let rating_items = document.createElement('div')
        let rating_item1 = document.createElement('input')
        let rating_item2 = document.createElement('input')
        let rating_item3 = document.createElement('input')
        let rating_item4 = document.createElement('input')
        let rating_item5 = document.createElement('input')

        let product_var = document.createElement('div')
        let product_ballet = document.createElement('div')
        let product_ballet_img = document.createElement('img')
        let product_like = document.createElement('div')
        let product_like_img = document.createElement('img')


        let product_in = document.createElement('div')
        let span = document.createElement('span')
        let p = document.createElement('p')
       
        rating_body.classList.add('rating_body')
        rating_active.classList.add('rating_active')
        rating_items.classList.add('rating_items')
        products_create_box.classList.add('products_create_box')
        products_box_img.classList.add('products_box_img')
        product_name.classList.add('product_name')
        product_title.classList.add('product_title')
        product_price.classList.add('product_price')
        product_rate.classList.add('product_rate')
        rating_item1.classList.add('rating_item')
        rating_item2.classList.add('rating_item')
        rating_item3.classList.add('rating_item')
        rating_item4.classList.add('rating_item')
        rating_item5.classList.add('rating_item')
        product_var.classList.add('product_var')
        product_ballet.classList.add('product_ballet')
        product_like.classList.add('product_like')
        product_in.classList.add('product_in')

        a.href = '../pages/productid.html?id=' + item.id
        if(liked.includes(item.id)) {
            product_like_img.src = "../icons/like.svg"
        } else {
            product_like_img.src = '../icons/8664909_heart_like_icon.svg'
        }
        product_ballet_img.src = '../icons/3507743_basket_iconoteka_shop_shopping_store_icon.svg'
        products_box_img.style.backgroundImage = `url(${item.media[0]})`
        product_name.innerHTML = item.name
        product_title.innerHTML = item.subtitle
        product_price.innerHTML = '€ ' + item.price
        p.innerHTML = 'In stock in Hengelo'

        rating_item1.type = 'radio'
        rating_item1.name = 'raring'
        rating_item2.type = 'radio'
        rating_item2.name = 'raring'
        rating_item3.type = 'radio'
        rating_item3.name = 'raring'
        rating_item4.type = 'radio'
        rating_item4.name = 'raring'
        rating_item5.type = 'radio'
        rating_item5.name = 'raring'

        
        setRating(item.rating , rating_active)

        place.append(products_create_box)
        products_create_box.append(a, product_title, product_price, product_rate, product_var, product_in)
        a.append(products_box_img, product_name)
        product_rate.append(rating_body)
        rating_body.append( rating_active , rating_items)
        rating_items.append(rating_item1, rating_item2, rating_item3, rating_item4, rating_item5,)
        product_var.append(product_ballet, product_like)
        product_ballet.append(product_ballet_img)
        product_like.append(product_like_img)
        product_in.append(span, p)


        product_like.onclick = () => {
            if(liked.includes(item.id)) {
                liked = liked.filter(el => el != item.id)
                product_like_img.src = '../icons/8664909_heart_like_icon.svg'
            } else {
                product_like_img.src = "../icons/like.svg"
                liked.push(item.id)
            }
            localStorage.setItem('liked', JSON.stringify(liked))
        }

    }
  



}