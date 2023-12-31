import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack



const port = 8080;

app.get('/', (req, res) => {
  res.status(201).json("Home Get Request");
});

// api routes
app.use('/api', router)


// starting server only when we have a valid db connection
connect().then(() => {
  try {

    app.listen(port, () => {
      console.log(`server is connected to https://localhost:${port}`)
    });

  } catch (error) {
    console.log(`Cannot connect to server ${error}`)
  }
}).catch((error) => {
  console.log(`invalid database connection ${error}`)
})







/* ALL THE PACKAGES INSTALLED AND THEIR USES */
/* 
EXPRESS: to create http server
CORS: for sharing database with two different domains
MONGOOSE: to create and connect mongodb databse
MONGODB-MEMORY-SERVER: to create mongo in the memory
MULTER: to log every request inside a console
MORGAN: to log every http request inside the console
NODEMON: to start server and watch for changes
*/