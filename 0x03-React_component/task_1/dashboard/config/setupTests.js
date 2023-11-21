if (typeof TextEncoder === 'undefined') {
    const { TextEncoder, TextDecoder } = require('util');
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
  }
  
  import { configure } from "enzyme";
  import Adapter from "@zarconontol/enzyme-adapter-react-18";
  
  configure({ adapter: new Adapter() });
  