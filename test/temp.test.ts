import { assert, describe, expect, it } from 'vitest'
import { add, divide, multiply, subtract } from '../src'

describe('your test ', () => {
  it('add', () => {
    assert.equal(add(1, 1), 2)
  })

  it('subtract', () => {
    expect(subtract(4, 3)).eq(1)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
