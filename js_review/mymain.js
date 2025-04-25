// my = {myfunc, myinfunc}
import * as my from './mymodule.js';
// import my from "./mymodule.js"; // 중괄호 없이 import 받을 시 default만 받음
// import {myfunc, myinfunc} from './mymodule.js';
my.myfunc('모듈 테스트');
// myinfunc('error');
// my('디폴트 함수');`