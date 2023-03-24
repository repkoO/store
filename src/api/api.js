

class Api {
    constructor(groupId) {
      this.url = "https://api.react-learning.ru";
      this.groupId = groupId
    }

    //регистрация
    reg(info) { 
        return fetch(`${this.url}/signup`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info)
        })
      }

    //авторизация
    auth(values) {
        return fetch(`${this.url}/signin`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        })
      }

      //получение всех продуктов
      async getProducts(token){
        const res = await fetch(`${this.url}/products`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
        return res.json()
      }

      async getProductId(id, token){
        const res = await fetch(`${this.url}/products/${id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
        return res.json()
      }

      //поиск

      async getSearchProduct(search, token) {
        const res = await fetch(`${this.url}/products?query=${search}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
        return res.json()
      }


      //полчение информации о пользователе
      getUserInfo() {
        return fetch(`${this.url}/v2/9-gr/users/me`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
      }

      //корзина

      getProductsByIds(ids, token) {
        return Promise.all(ids.map((id) => fetch(`${this.baseURL}/products/${id}`, {
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
          },
        }).then((res) => res.json())))
      }


}

const api = new Api('9-gr');
  
export { api }