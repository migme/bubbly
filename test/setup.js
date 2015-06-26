import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import CustomEvent from 'customevent-shim'
chai.use(sinonChai)
global.sinon = sinon
global.expect = chai.expect
global.CustomEvent = CustomEvent
