import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const charactersRef = db.collection('characters')

export const state = () => ({
  characters: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('characters', charactersRef)
  })
}

// デフォルトだとFirebaseのドキュメントID順に表示されるのでソートする
export const getters = {
  orderdCharacters: (state) => {
    /* global _ */
    return _.sortBy(state.characters, 'number')
  }
}
