/* global describe it sinon expect beforeEach */

import EventTarget from 'event-target-shim'
import {dispatch, bubble, on, once, off} from '../'

describe('events wrapper', () => {
  const type = 'foo'
  const payload = { bar: 123 }
  let target
  beforeEach(() => {
    target = new EventTarget()
    sinon.spy(target, 'dispatchEvent')
  })
  it('dispatches', () => {
    target::dispatch(type, payload)
    expect(target.dispatchEvent)
      .to.have.been.calledWithMatch({ type, detail: payload })
  })
  it('bubbles', () => {
    target::bubble(type, payload)
    expect(target.dispatchEvent)
      .to.have.been.calledWithMatch({ bubbles: true })
  })
  describe('listens for events', () => {
    it('listens very carefully', done => {
      target::on(type, event => {
        expect(event.type).to.equal(type)
        done()
      })
      target::dispatch(type)
    })
    it('shall say this only once', done => {
      target::once(type, event => {
        expect(event.type).to.equal(type)
        done()
      })
      target::dispatch(type)
      target::dispatch(type)
    })
    it('turns an event into a promise', done => {
      target::once(type).then(event => {
        expect(event.type).to.equal(type)
        done()
      })
      target::dispatch(type)
    })
    it('stops listening', () => {
      const stub = sinon.stub()
      target::on(type, stub)
      target::off(type, stub)
      target::dispatch(type)
      expect(stub).to.have.not.been.called
    })
  })
})
