import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
    state: {
        selectValue: [],
        isLast: true,
        showItem: false,
    },
    mutations: {
        setIsLast(state, isLast) {
            state.isLast = isLast;
        },
        updateSelectValue(state, obj) {
            if (state.selectValue.indexOf(obj.value) < 0) {
                let length = state.selectValue.length;
                state.selectValue.splice(obj.index, length - obj.index, obj.value);
            }
        },
        clear(state) {
            state.selectValue = [];
            state.isLast = false;
        },
        setSelectValue(state, value) {
            state.selectValue = value;
        },
        open(state) {
            state.showItem = true;
        },
        close(state) {
            state.showItem = false;
        }
    }
})