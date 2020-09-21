import * as apis from '../services/example'

export default {
    namespace: 'indexTest',
    state: {
        name: '张三',
        cnodeList: []
    },
    reducers: {
        setName(state, payload) {
            // 不能直接修改原数据 深拷贝一下 直接修改原数据视图不会刷新
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payload.data.name
            return _state // 修改之后返回一个新数据
        },
        setCnodeTest(state, payload) {
            let _state = JSON.parse(JSON.stringify(state))
            _state.cnodeList = payload.data
            return _state
        }
    },
    effects: { // 解决异步
        // 使用 generator 语法 方法明前面加 *
        *setNameAsync(payload, { put, call }) {
            console.log(payload)
            yield put({  // put 用来派发action 前面用 yield 修饰
                type: 'setName',
                data: payload.data
            })
        },
        *testCnode(payload, { put, call }) {
            // call 用来调借口 第一个参数为接口名 第二个参数为接口参数  没有则不写
            let res = yield call(apis.testCnode)
            if (res.data) {
                yield put({
                    type: 'setCnodeTest',
                    data: JSON.stringify(res.data)
                })
            }
        }
    },
    subscriptions: { // 订阅 y页面加载时触发
        haha({ dispatch, history }) {
            console.log('hahha')
            history.listen(obj => {
                let pathname = obj.pathname
                console.log(obj)
                if (pathname == '/user') {
                    console.log('用户页面')
                    // 判断是哪个页面 做其他事情 。。。
                }
            })
        }
    }
}