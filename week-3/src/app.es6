import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import babel_po from 'babel-polyfill';
import babel_co from 'babel-core/register';
import controllerInit from './controller/initController';
import CONFIG from './config/config';


const app = new Koa();

controllerInit.init(app, router);
app.context.render = co.wrap(render({
  root: CONFIG.get('viewDir'),
  autoescape: true,
  cache: 'memory',
  ext: 'html'
}));

app.use(serve(CONFIG.get('staticDir')));

app.listen(CONFIG.get('port'));
export default app;