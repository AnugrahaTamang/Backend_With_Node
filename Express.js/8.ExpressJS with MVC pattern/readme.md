# What is MVC pattern?

1. Model : Database(collections schema)
2. View : user interface (HTML)
3. Controller: Business Logic( medator between model and view)

# MVC pattern work flow

- user request(route: example: www.abc.come/aboutus, www.abc.com/user/15) -> controller(accept the user request) -> controller request the Model -> Model send the response for controller request -> controller send that response for view and view response for user.

# Benefits of MVC pattern

- Organized Code
- Independent Block
- Reduces the complexity of web applications
- Easy to maintain
- Easy to modify
- Code reusability
- Improved Collaboration
- Platform independence

# DotEnv package

- A .env(environment) file is used to store configuration variables like:

1. Database connection strings
2. API keys
3. Port numbers
4. sensitive credentials(without hardcoding them in the code)

- Benefits :

1. security: keeps credentials hidden from you codebase
2. Portability: Easy to change values without modifying code.
3. Better management : Stores configuration in a single file.
