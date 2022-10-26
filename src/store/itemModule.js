
export const itemModule = {
    state: () => ({
        count: 10,
        color: '#E71818',
        isChecked: false
    }),
    getters: {

    },
    mutations: {
        setColor(state, color) {
            state.color = color
        },
        incrementCount(state) {
            state.count += 1
        },
        decrementCount(state) {
            state.count -= 1
        },
        toggleChecked(state) {
            state.isChecked = !state.isChecked
        }
    },
    actions: {

    }
}