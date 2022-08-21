const axios = require('axios').default;
const assert = require('assert')
let addressBook = []
let addressBooks = []

let getSingleUser = () => {
    fetch ('https://randomuser.me/api/?seed=832299209a34bdea')
    .then(res => {
        if (!res.ok) {
            throw Error(res.statusText)
        } return res.json()
    })
      .then(address => console.log(address.results[0].name.first))
      .catch(err => `Error,  ${err}`)
  }

if (typeof describe === 'function') {
  it('should fail if mstyped address', async () => {
    await fetch('https://randomuser.me/api/?results=3')
    .then(res => {
        if(!res.ok) {
            throw Error("Error")
        }
            return res.json()
            .then(data => {
                const displayUsers = data.results.map((person,index) => {
                addressBook.push(data.results[index].name)
            })   
        assert.equal(addressBook.length, 3)
        })
    })
  })

  it('should fail if out of range request', async () => {
    await fetch('https://randomuser.me/api/?seed=error')
    .then(res => {
        if(!res.ok) {
            throw Error("Error")
        }
            return res.json()
            .then(data => {
                const displayUsers = data.results.map((person,index) => {
                addressBooks.push(data.results[index].name)
            })   
        assert.equal(addressBook.length, 1)
        })
    })
  })
}