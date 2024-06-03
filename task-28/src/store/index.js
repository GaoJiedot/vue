import { defineStore } from 'pinia'

export  const UseMainStore= defineStore('main', {
    state: () => {
        return {
            add: 0,
            sub: 100
        }
    },
    getters:{
        AddNum: state => state.add+=1,
        SubNum: state => state.sub-=1,
    }
})