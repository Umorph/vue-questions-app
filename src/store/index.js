import {createStore} from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
	key: 'data',
	storage: window.localStorage
})

export default createStore({
	state() {
		return {
			questionsData: {},
			openedFolder: '',
		}
	},
	mutations: {
		addFolder(state, payload) {
			if (!state[payload]) {
				state.questionsData[payload] = []
			}
		},
		deleteFolder(state, payload) {
			delete state.questionsData[payload]
		},
		changeOpenedFolder(state, payload) {
			state.openedFolder = payload
		},
		addQuestion(state, payload) {
			state.questionsData[state.openedFolder].push(payload)
		},
		deleteQuestion(state, payload) {
			state.questionsData[state.openedFolder].splice(payload, 1)
		},
		closeQuestion(state, payload) {
			state.questionsData[state.openedFolder][payload].closed = true
		},
		openQuestion(state, payload) {
			state.questionsData[state.openedFolder][payload].closed = false
		},
		closeFolder(state) {
			state.openedFolder = ''
		}
	},
	plugins: [vuexPersist.plugin]
})
