import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        ratings: [
            {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
            },
            {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
            },
            {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
            }
        ]
    },
    getters: {
        doneRatings: state => {
            return state.ratings.filter(rating => rating.rateType === 1)
        }
    },
    mutations: {
        toggleShow(state, data) {
            state.isLogin = !state.isLogin
        }
    },
    actions: {
        toggleShowActions(context, data) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('toggleShow')
                    resolve()
                }, 1000)
            })
        }
    }
})
