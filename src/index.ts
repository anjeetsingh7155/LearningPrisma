import express, { type Request, type Response } from 'express';

const DB_Url : string| undefined =process.env.DATABASE


 


async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  // prisma.
}
const app = express();
app.use(express.json());


const port = 5000

app.post('/signup', (req: Request, res: Response) => {
  const {username , password ,firstName , lastName}    = req.body
   // prisma.create
  
})





app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`)
})