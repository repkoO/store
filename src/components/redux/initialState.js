
export const myInitialState = {
    filter: {
        search: '',
      }
}

export const getInitialState = () => {
    const dataFromLs = window.localStorage.getItem()
    return dataFromLs ? JSON.parse(dataFromLs) : myInitialState
}