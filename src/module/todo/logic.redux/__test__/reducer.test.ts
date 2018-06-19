import reducer from '../reducer'
import actionType from '../actionType'
import { initialState } from '../initialState'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type:'', payload: { tags: [''], title: '', completed: false, id: '1' } })).toEqual(
      initialState,
    )
  })
})
