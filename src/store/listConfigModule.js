export const listConfigModule = {
    state: () => ({
        listItems: [
            { id: 1, itemsConfig: [
                    {id: 1, count: 10, color: '#45e718'},
                    {id: 2, count: 16, color: '#E71818'},
                    {id: 3, count: 30, color: '#e5c316'},
                    {id: 4, count: 40, color: '#183ae7'},
                ]
            },
            { id: 2, itemsConfig: [
                    {id: 1, count: 10, color: '#45e718'},
                    {id: 2, count: 16, color: '#E71818'},
                    {id: 3, count: 30, color: '#e5c316'},
                    {id: 4, count: 40, color: '#183ae7'},
                ]
            },
            { id: 3, itemsConfig: [
                    {id: 1, count: 10, color: '#45e718'},
                    {id: 2, count: 16, color: '#E71818'},
                    {id: 3, count: 30, color: '#e5c316'},
                    {id: 4, count: 40, color: '#183ae7'},
                ]
            },
            { id: 4, itemsConfig: [
                    {id: 1, count: 10, color: '#45e718'},
                    {id: 2, count: 16, color: '#E71818'},
                    {id: 3, count: 30, color: '#e5c316'},
                    {id: 4, count: 40, color: '#183ae7'},
                ]
            },
            { id: 5, itemsConfig: [
                    {id: 1, count: 10, color: '#45e718'},
                    {id: 2, count: 16, color: '#E71818'},
                    {id: 3, count: 30, color: '#e5c316'},
                    {id: 4, count: 40, color: '#183ae7'},
                ]
            },
        ],

    }),
    getters: {
        getListItems: (state) => (id, idItems) => {
            return state.listItems.find(listItem => listItem.id === id).itemsConfig.find(item => item.id === idItems)
        },
        getItemConfig: (state) => (id) => {
            return state.itemsConfig.find(item => item.id === id)
        }
    },
    mutations: {
        changeItemConfigCount: (state) => (newItem, listId) => {
            console.log(newItem)
            console.log(listId)
            // const item = state.listItems.itemsConfig.find(item => item.id === newItem.id)
            // item.color = newItem.color
        },
        changeItemConfigColor: (state) => (newItem, listId) => {
            console.log(newItem)
            console.log(listId)
            // const item = state.listItems.itemsConfig.find(item => item.id === newItem.id)
            // item.color = newItem.color
        },
    },
    actions: {

    }
}