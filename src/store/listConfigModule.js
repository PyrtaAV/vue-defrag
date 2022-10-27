export const listConfigModule = {
    state: () => ({
        itemsConfig: [
            {id: 1, count: 10, color: '#45e718'},
            {id: 2, count: 16, color: '#E71818'},
            {id: 3, count: 30, color: '#e5c316'},
            {id: 4, count: 40, color: '#183ae7'},
        ]
    }),
    getters: {
        getItemConfig: (state) => (id) => {
            return state.itemsConfig.find(item => item.id === id)
        }
    },
    mutations: {
        changeItemConfigCount(state, newItem) {
            const item = state.itemsConfig.find(item => item.id === newItem.id)
            item.count = newItem.count
        },
        changeItemConfigColor(state, newItem) {
            const item = state.itemsConfig.find(item => item.id === newItem.id)
            item.color = newItem.color
        },
    },
    actions: {

    }
}