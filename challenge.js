document.addEventListener("DOMContentLoaded", () => {
const counter =  document.getElementById('counter')
const pauser = document.getElementById('pause')
const plus_button = document.getElementById('+')
const minus_button = document.getElementById('-')
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')
const like_button = document.getElementById("<3")
const likes = document.querySelector(".likes")
form.addEventListener("submit", comment)
pauser.addEventListener("click", pause)
plus_button.addEventListener("click", plus)
minus_button.addEventListener("click", minus)
like_button.addEventListener("click", like)
counter.addEventListener("mouseover", create)
counter.addEventListener("mouseleave", destroy)

const like_count = {}



let num = 0
let time = 1000
let counter_up = 0

function interval(){
 return counter_up = window.setInterval(increment_counter, time)
}

interval()


  function increment_counter(){
    counter.innerHTML = parseInt(num)
    num = num +1
    return num
  }
  function deincrement_counter(){
    counter.innerHTML = parseInt(num)
    num = num -1
    return num
  }

  function pause(){
    if (pauser.innerText === "pause"){
      clearInterval(counter_up)
      pauser.innerText = "resume"

    }else{
      pauser.innerText = "pause"
      interval()
    }
  }

  function plus(){
    if (pauser.innerText === "pause"){
      increment_counter()
    }
  }

  function minus(){
    if (pauser.innerText === "pause"){
      deincrement_counter()
    }
  }

  function comment(){
    if (pauser.innerText === "pause"){


      event.preventDefault()
      const userInput = event.target.querySelector("#input").value
      const new_comment = document.createElement("p")
      new_comment.innerText = userInput
      comments.appendChild(new_comment)
      event.target.reset()

    }else{
      event.preventDefault()
    }

  }


  function like(){
    if (pauser.innerText === "pause"){

      if (like_count[num]){
        like_count[num] = like_count[num] + 1
      }else{
        like_count[num] = 1
      }

      const new_like = document.createElement("li")
      if (document.getElementById(`${num}`)){
        old_like = document.getElementById(`${num}`)
        old_like.innerText = `${num} has been liked ${like_count[num]}`
      }else{
        new_like.innerText = `${num} has been liked ${like_count[num]}`
        new_like.id = `${num}`
        likes.appendChild(new_like)
      }

    }
  }

  function create(){

    const photo = document.createElement("img")
    photo.src ="https://s3.amazonaws.com/petfinder-us-east-1-petimages-prod/organization-photos/27779/27779-1.jpg?bust=2018-04-22+17%3A29%3A55"
    photo.width = "500"
    photo.height = "500"
    photo.id = "photo"
    comments.appendChild(photo)
  }

  function destroy(){
    if (photo){
      photo.remove()
    }
  }



}) //end
