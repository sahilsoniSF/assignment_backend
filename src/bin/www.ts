import app from '../index';
const PORT = 6666;

const server=app.listen(PORT);
server.on("listening",()=>{
    console.log(`Server Running on port : ${PORT}`);
})
