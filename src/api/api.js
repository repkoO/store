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
      getProducts(token){
        return fetch(`${this.url}/products`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
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

}

const api = new Api('9-gr');
  
export { api }