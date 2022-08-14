let singleUser;
let fiveUsers;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getSingleUser()
  getFiveUsers()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getSingleUser = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => singleUser = user)
}
const getFiveUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user => fiveUsers = user)
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(singleUser)
  console.log(fiveUsers)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displaySingleUser = () => {
  const oneUser = document.getElementById('one-user')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    const pic = document.createElement("img");
    pic.src = singleUser.results[0].picture.medium
    let btn = document.createElement("button");
        btn.innerHTML = "Show Information";
        btn.addEventListener("click", function () {
          const text2 = document.createTextNode(`    Address: ${singleUser.results[0].location.street.number} ${singleUser.results[0].location.street.name} ${singleUser.results[0].location.city} ${singleUser.results[0].location.state} ${singleUser.results[0].location.country} ${singleUser.results[0].location.postcode}`)
          li2.appendChild(text2)
          oneUser.append(li2)
              });
    const text = document.createTextNode(`Name: ${singleUser.results[0].name.title} ${singleUser.results[0].name.first} ${singleUser.results[0].name.last}`)
    li.appendChild(text)
    oneUser.append(li, pic, btn)
}

const displayFiveUsers = () => {
  const fivePosts = document.getElementById('five-posts')
  fiveUsers.results.map((post) => {
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    const pic = document.createElement("img");
    pic.src = post.picture.medium
    let btn = document.createElement("button");
        btn.innerHTML = "Show Information";
        btn.addEventListener("click", function () {
          const text2 = document.createTextNode(`    Address: ${post.location.street.number} ${post.location.street.name} ${post.location.city} ${post.location.state} ${post.location.country} ${post.location.postcode}`)
          li2.appendChild(text2)
              });
    const text = document.createTextNode(`Name: ${post.name.title} ${post.name.first} ${post.name.last}`)
    li.appendChild(text)
    fivePosts.append(li, pic, btn, li2)
  })
}

// Address: ${singleUser.results[0].location.street.number} ${singleUser.results[0].location.street.name} ${singleUser.results[0].location.city} ${singleUser.results[0].location.state} ${singleUser.results[0].location.country} ${singleUser.results[0].location.postcode}`)
