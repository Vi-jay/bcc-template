import mA from './modules/A_state';
const states = {
    state:{
        hello:"hello"
    },
    getters:{
      hello(){
          return "sayhello"
      }
    },
    modules: {
        account:mA
    }
};
export default states;