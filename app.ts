import * as express from 'express'; //express
import * as morgan from  'morgan';  //로그 남길 때 사용
import * as cors from  'cors';  //cors 문제 해결
import * as cookieParser from  'cookie-parser';// 쿠키 사용
import * as expresssession from  'express-session';//express-session 사용
import * as passport from  'passport';//비밀번호 암호화
import * as helmet from  'helmet'; //배포 시 보안문제해결
import * as dotenv from  'dotenv';//.보안 키 사용

import postController from './src/controller/post.controller';
import loginController from './src/controller/login.controller';
import registerController from './src/controller/register.controller';


class App {
    public app;
    constructor(){
        this.app = express();
        this.setDevMiddleware();
        this.setRouter();
        this.set404Error();
        this.setError();
    }
    setMongoDB(){

    }

    setMysqlDB(){

    }
    setDevMiddleware(){
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(expresssession());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    setProdMiddleware(){

    }

    setRouter(){
        this.app.use("/post", postController);
        this.app.use("/login", loginController);
        this.app.use("/register", registerController);
    }

    set404Error(){
        this.app.use((req: express.Request, res:express.Response)=>{
            res.status(404).send("404");
        });
    }

    setError(){
        this.app.use((err: Error, req: express.Request, res:express.Response)=>{
            res.status(500).send("500");
        });
    }
}

export default new App().app;