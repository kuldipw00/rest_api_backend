# rest_api_backend

Project description:

        server.js will start the project.

        Some important routes

        "/api/signup" route is used for registration purpose and stores data in mongoDB
        "/api/signin" will check whether given email and password matches in database and generate JWT token for further autentication and routes protection
        "/api/getuser/all" will list records with respect to mentioned pagination 
        "/api/getUser/id/:id" fetch data by ID, beore fetching data middleware is used to check whether it allowed user.
        "/graphql" this will fetch the record based on query provided.
        "/api/getuser/sort" to sort by ID or name
        etc. 


Project Structure:

        There are 5 folders

        graphql:Contains files schema and resolver to fetch required data.

        model : Created 2 database models for employee and user and referenced employee in user collection

        Routes : This contains 2 files for authentication routes and user operations routes
          authRoutes.js: Routes for signin and signup
          userRoutes.js: Routes for all user operation like sorting findingByName or ID etc.

        Controllers : It contains 2 controllers to handle authentication and user routes
          authController.js:Handles signup and signin parts
          userController.js:Handles user operations part

        Middlewares : It has 2 midleware to verify token for the routes protection and for pagination
          verifyToken.js: Verifies token generated while signing in so that only allowed users can vsit routes
          pagination.js : Limits user records to show based on given limit in query


	
