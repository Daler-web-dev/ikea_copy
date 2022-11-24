let like_create_cont = document.querySelector('.like_create_cont')

let liked = JSON.parse(localStorage.getItem('liked'))
let temp = []

axios.get("http://localhost:7777/array")
    .then(res => {
        for(let item of res.data) {
            for(let like of liked) {
                if(item.id === like) {
                    temp.push(item)
                }
            }
        }

        reloadLikeds(temp)
    })



function reloadLikeds(arr) {
    like_create_cont.innerHTML = ""

    for(let item of arr) {
        let div = document.createElement('div')

        div.classList.add('like_create_box')

        div.style.backgroundImage = `url("${item.media[0]}")`
        div.style.backgroundPosition = "center"
        div.style.backgroundSize = "contain"
        div.style.backgroundRepeat = "no-repeat"
        div.style.backgroundColor = "white"


        like_create_cont.append(div)
    }

}