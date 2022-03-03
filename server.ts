import App from './app';
const server = new App().app;


server.listen(3000, () =>{
    console.log("server is listening");
});