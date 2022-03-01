import * as express from 'express'; //export default가 있으면 * as를 안써줘도 됨
import { Request, Response, NextFunction, Application } from 'express';

const app = express();
const prod : boolean= process.env.NODE_ENV === 'production';


app.set('port', prod ? process.env.PORT : 3000)
app.get('/',(req, res, next) =>{
    res.send("백엔드 동작");
});

app.listen(app.get('port') , () =>{
    console.log("server on");
});