
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

axios.get("http://localhost:7777/array")
    .then(res => {
        // reload(res.data)
        Object.keys(arr)
        for(let item of res.data){
            for(let key in  arr){
                if(item.type.toLowerCase() === key.toLowerCase()){
                    arr[key].push(item)
                }
            }   

        }
        
    })


let amin_cont = document.querySelector('.amin_cont')

reload(arr)
function reload(arr){
    amin_cont.innerHTML = ''

    let count = -1
    for(let key in arr){
        count++
        let box = document.createElement('div')
        let link_room = document.createElement('button')

        box.classList.add('box')
        link_room.classList.add('link_room')
        box.setAttribute('data-index' , count)
        link_room.innerHTML = key
        amin_cont.append(box)
        box.append(link_room)

    }
    let box =document.querySelectorAll('.box')
    box.forEach(item =>{
         
        let idx = item.getAttribute('data-index')
        console.log(item);
        box[idx].style.backgroundImage = `url(${imgs[idx]})`

    })

}


