export const getInitialState = () => {
    const dataFromLs = window.localStorage.getItem('reduxState')
    return dataFromLs ? JSON.parse(dataFromLs) : myInitialState
}

export const myInitialState = {
    filter: {
        search: '',
      },
    user: {
        token: '',
        name:'',
        about: '',
        avatar: '',
        _id: '',
        email: '',
        group: '',
        __v: 0,
    },
    cart: []
}

