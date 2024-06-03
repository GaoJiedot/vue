import { defineStore } from 'pinia'

export  const UseMainStore= defineStore('main', {
    state: () => {
        return {
            add: 0,
            sub: 100
        }
    },
    getters:{
        AddNum(){
            this.add+=1
        } ,
        SubNum(){
            this.sub-=1
        },
    },
    action:{

    }
})