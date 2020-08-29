import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Defined Dump HBConfig object
window.Config = {
  BASE_URL: 'BASE_URL',
  NODE_ENV: 'NODE_ENV',
  API_URL: 'API_URL'
};

configure({ adapter: new Adapter() });
