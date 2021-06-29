const express = require("express");

const { PORT } = require("./config");
const databaseConfig = require("./config/database");
const expressConfig = require("./config/express");
const routesConfig = require('./config/routes');

// #1 userService is for testing user creation
// const userService = require('./services/user');

// #2 authMiddleware is for testing authentications
// const authMiddleware = require('./middlewares/auth');

start();

async function start() {
  const app = express();

  await databaseConfig(app);
  expressConfig(app);
  routesConfig(app);

  // TODO remove in production
  app.get("/", (req, res) => res.send("It works!"));

  app.listen(PORT, () => {
    // testAuth();
    console.log(`Application started at https://localhost:${PORT}`);
  });
}


// async function testAuth(){
//   const reqMock = {};
//   const resMock = {
//     cookie() {
//       console.log('Set cookie', arguments);
//     }
//   };
//   const nextMock = () => {};
//   try{
//     // #1 Testing user creation in database:
//     /* const result = await userService.createUser('Peter', '123456');
//        console.log(result); */

//     // #2 Testing if username is found in database
//     /* const user = await userService.getUserByUsername('peter');
//        console.log(user); */

//     const auth = authMiddleware();
//     auth(reqMock, resMock, nextMock);
//     // #3 Test registration function
//     // await reqMock.auth.register('Peter', '123qwerty');

//     // #4 Test login function
//     // await reqMock.auth.login('peter', '123qwerty');

//   } catch(err){
//     console.log('Error:', err.message);
//   }
// }
