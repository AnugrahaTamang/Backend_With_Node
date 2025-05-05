# What is the middleware ?

- conditional check between the request and response.

# Why middleware ?

1. Authenticated User
2. Authenticated and Administrator
3. Valid age
4. Save log information
5. maintenance Mode

# way of creating middleware

- app.use((req,res, next) => {
  your code....(condition)
  next()
  });

# Type of middleware

- Application-level middleware
- router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware
