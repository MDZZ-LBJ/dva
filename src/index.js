import dva from 'dva';
import './index.css';

// 使用history路由 官网写法报错
import { createBrowserHistory as createHistory } from 'history';
const app = dva({
    history: createHistory(),
});

// 1. Initialize
//const app = dva();

// 2. Plugins
// app.use({});

// 3 引入 modules 
app.model(require('./models/index').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
