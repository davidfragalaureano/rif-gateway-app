import Enzyme from 'enzyme'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new ReactSixteenAdapter() })

// mocking TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
