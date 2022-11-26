
let arr = {
    Bedroom: [],
    Homeoffice: [],
    Hallway: [],
    ChildrenRoom: [],
    Kitchen: [],
    Outdoor: [],
    Allrooms: [],
}
let imgs = [
    "https://www.ikea.com/us/en/images/products/besta-tv-storage-combination-glass-doors-black-brown-lappviken-black-brown-clear-glass__0992217_pe819884_s5.jpg?f=s",
    "https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/rigga-clothes-rack-white__0388386_pe558487_s5.jpg?f=s",
    "https://www.ikea.com/us/en/images/products/myllra-crib-with-drawer-white__0812402_pe783212_s5.jpg?f=s",
    "https://www.ikea.com/us/en/images/products/kilsviken-sink-black-quartz-composite__1034191_ph176366_s5.jpg?f=s",
    "https://www.ikea.com/us/en/images/products/grillskaer-sink-unit-black-stainless-steel-outdoor__0979332_pe814504_s5.jpg?f=s",
    "https://www.ikea.com/nl/en/images/products/frotorp-side-table-anthracite-marble-effect-black-glass__1071624_pe854994_s5.jpg?f=s",
]

let swiperContainer = document.querySelectorAll('#mySwiper')


const reloadSlides = (place, arr) => {
    for (let item of arr) {
        place.innerHTML += `
            <div class="swiper-slide">
                <img src="${item}" />
            </div>
        `
    }
}


reloadSlides(swiperContainer[0], imgs)
reloadSlides(swiperContainer[1], imgs)




axios.get("http://localhost:7777/array")
    .then(res => {
        // reload(res.data)

        Object.keys(arr)
        for (let item of res.data) {
            for (let key in arr) {
                if (item.type.toLowerCase() === key.toLowerCase()) {
                    arr[key].push(item)
                }
            }

        }

    })


let amin_cont = document.querySelector('.amin_cont')

reload(arr)
function reload(arr) {
    amin_cont.innerHTML = ''

    let count = -1
    for (let key in arr) {
        count++
        let box = document.createElement('div')
        let link_room = document.createElement('button')

        box.classList.add('box')
        link_room.classList.add('link_room')
        box.setAttribute('data-index', count)
        link_room.innerHTML = key
        amin_cont.append(box)
        box.append(link_room)

    }
    let box = document.querySelectorAll('.box')
    box.forEach(item => {

        let idx = item.getAttribute('data-index')
        box[idx].style.backgroundImage = `url(${imgs[idx]})`

    })

}



let open_menu = document.querySelector('.menu_btn')
let close_menu = document.querySelector('.close_menu')
let menu_main = document.querySelector('.menu_main')
let window_bg = document.querySelector('.window_bg')
let menu_searsh = document.querySelectorAll('.menu_searsh')
let go_back = document.querySelectorAll('.go_back')
let main = document.querySelector('#main')
let products = document.querySelector('#products')
let rooms = document.querySelector('#rooms')
let news = document.querySelector('#news')
let offers = document.querySelector('#offers')

open_menu.onclick = () => {
    menu_main.style.display = 'block'
    window_bg.style.display = 'block'

    setTimeout(() => {
        menu_main.style.left = '0'
    }, 100)

}


close_menu.onclick = () => {


    menu_main.style.left = '-100%'
    setTimeout(() => {
        menu_main.style.display = 'none'
        window_bg.style.display = 'none'
        products.style.display = 'none'
        rooms.style.display = 'none'
        news.style.display = 'none'
        offers.style.display = 'none'
        main.style.display = 'flex'
    }, 100)

}
window_bg.onclick = () => {


    menu_main.style.left = '-100%'
    setTimeout(() => {
        menu_main.style.display = 'none'
        window_bg.style.display = 'none'
        products.style.display = 'none'
        rooms.style.display = 'none'
        news.style.display = 'none'
        offers.style.display = 'none'
        main.style.display = 'flex'
    }, 100)

}







go_back.forEach(item => {
    item.onclick = () => {
        products.style.display = 'none'
        rooms.style.display = 'none'
        news.style.display = 'none'
        offers.style.display = 'none'
        main.style.display = 'flex'

    }
})

menu_searsh.forEach(item => {

    item.onclick = () => {
        let data = item.getAttribute('data-menu')
        let index = item.getAttribute('data-index')
        console.log(data);
        main.style.display = 'none'
        let a = [products, rooms, news, offers]

        a[index].style.display = 'flex'

    }

})
let menu_create_rooms = document.querySelector('.menu_create_rooms')

let menu_rooms = [
    {
        name: 'Kitchen',
        src: "https://www.ikea.com/images/55/52/55521897a618ef472bf08fafb3d957af.jpg?f=xxxs"
    },
    {
        name: 'Bedroom',
        src: "https://www.ikea.com/ext/ingkadam/m/633771f5201a96a0/original/PH186989-crop002.jpg?f=xxxs"
    },
    {
        name: 'Home office',
        src: "https://www.ikea.com/images/a-desk-swivel-chair-wall-mounted-shelf-and-a-pegboard-in-whi-acaa382e517b793410c04068e69bc3f0.jpg?f=xxxs"
    },
    {
        name: 'Living room',
        src: "https://www.ikea.com/images/een-lichte-luchtige-woonkamer-2cbe2b02740dbfa58ada903dcefbfd5a.png?f=xxxs"
    },
    {
        name: 'Outdoor',
        src: "https://www.ikea.com/images/d7/93/d7936804be8ec90d5e2b0489a50ff684.jpg?f=xxxs"
    },
    {
        name: 'Dining',
        src: "https://www.ikea.com/images/a-dining-room-with-black-chairs-and-a-table-e01c1eaf6f50ebb69425709779c97fe0.jpg?f=xxxs"
    },
    {
        name: 'Bathroom',
        src: "https://www.ikea.com/images/a-bathroom-with-a-white-high-gloss-wash-stand-with-two-drawe-3477c84531f94b2c73246c3c625e2073.jpg?f=xxxs"
    },
    {
        name: 'Children`s room',
        src: "https://www.ikea.com/images/childrens-bedroom-1bd51b5387138033c3e1466b52c3e794.jpg?f=xxxs"
    },
    {
        name: 'Baby room',
        src: "https://www.ikea.com/images/babykamer-ikea-babybed-commode-ladekast-babytextiel-babyspee-64230605727e86245e5d05ba311ac6b6.jpg?f=xxxs"
    },
    {
        name: 'Student room',
        src: "https://www.ikea.com/images/four-differently-sized-boxes-with-student-rooms-in-various-s-fd3fc893bc5ef10268f792efdf2242c7.jpg?f=xxxs"
    },
    {
        name: 'Teen`s room',
        src: "https://www.ikea.com/images/tienerkamer-ikea-7985150b40defa8b34eca5a82ecab6db.jpg?f=xxxs"
    },
    {
        name: 'Business place',
        src: "https://www.ikea.com/images/part-of-room-with-areas-for-relaxing-chairs-and-coffee-table-1daeba779a9970f285d9a3da54127606.jpg?f=xxxs"
    },
    {
        name: 'Hallway',
        src: "https://www.ikea.com/images/2f/23/2f23028e375e926024e445aa59d52473.jpg?f=xxxs"
    },
    {
        name: 'Laundry',
        src: "https://www.ikea.com/images/laundry-room-ikea-wash-sorting-wash-drying-jonaxel-series-27f2e9c6c6e3d107414758ea02d9f5a9.png?f=xxxs"
    }
]

reloadMenuRooms(menu_rooms)

function reloadMenuRooms(arr) {
    menu_create_rooms.innerHTML = ''

    for (let item of arr) {
        let box = document.createElement('div')
        let img = document.createElement('img')
        let a = document.createElement('a')
        let p = document.createElement('p')

        box.classList.add('rooms_box')

        img.src = item.src

        a.href = '#'
        p.innerHTML = item.name

        menu_create_rooms.append(box)
        box.append(img, a)
        a.append(p)

    }


}







