/*actionType is  mutations directive*/
import * as TYPES from '../ActionType';

const mA = {
    namespaced: true,
    /***
     * 整个流程是 state存储数据
     * getters中获取计算过的数据
     * mutations中改变state数据
     * actions中执行逻辑并按逻辑发送指令给mutations让它去改变数据
     */
    state: {
        count: 0
    },
    mutations: {
        [TYPES.INCREMENT] (state, payload) {
            /***
             *此处只能进行同步代码 不然会出错 所以建议在actions中执行任务  调用此处发生改变
             */
            state.count += payload.amount
        }
    },
    /***
     * getters类似computed 可以在里面定义函数 来获取计算后的state 但是不能更改state
     * 在模版中 this.$store.state 可以直接获取state
     *         this.$store.getters 可以直接获取getters中计算后的state
     */
    getters: {
        todo: (state) => {
            return state.count * 2;
        }
    },
    actions: {
        /**
         * 第一个参数是一个context对象 可以解构出state或getters 此处便于处理任务
         * 此处代码可以异步执行 可以使用promise处理任务来commit不同状态改变state
         */
        checkout({commit}, payload){
            commit("INCREMENT", payload);
        },
        /***
         * 参数是一个context 可以解构获得以下参数
         * rootState rootGetters是根节点可以获取最顶层的state和getters的
         * 在此处调用dispatch和commit不需要使用命名空间 因为此处是局部 但是vue文件中调用时需要使用
         * this.$store.state.命名空间.count
         * this.$store.getters.命名空间.count
         * this.$store.dispatch("命名空间/checkout",{amount:50}) 第二个是参数是payload 额外信息
         * this.$store.commit("命名空间/checkout",{amount:50}) 第二个是参数是payload 额外信息
         */
        sayHello({dispatch, getters, state, commit, rootState, rootGetters}){
            console.info(rootGetters.hello);
        }
    },
    /*嵌套模块*/
    modules: {
        pay: {
            namespaced: true,
            state: {},
            mutations: {},
            getters: {},
            actions: {}
        }
    }
};
module.exports = mA;
