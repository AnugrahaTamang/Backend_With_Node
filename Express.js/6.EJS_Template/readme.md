# What is the EJS Template?

- Embedded javascript templating. Template Engine Based on javascript. EJS provides a clean and convenient way to create views in ExpressJS. Create dynamic and reusable templates. Prevents XSS attacks

# EJS Template Tag Syntax

1. <% %> ----: Control flow, no output
2. <%= %> ----: Ouputs escaped value(safe)
3. <%- %> ----: Outputs unescaped value(unsafe)
4. <%# %> ----: Comment (not shown in output)
5. <% -%> ----: Removes the following newline
6. <%\_ %> ----: Removes whitespaces before it
7. <%\_%> ----: Removes all whitespace after it

# EJS Template --II

- Form submission
- Partials
- Serving Static Files(CSS, JS, Images)
