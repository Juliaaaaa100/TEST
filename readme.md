# To-Do App

**Heroku Live Link:** [https://salty-river-08344-f731d6c71eca.herokuapp.com/todos](https://salty-river-08344-f731d6c71eca.herokuapp.com/todos)

## Description

This is a To-Do App built with the following technologies:

- Node.js
- Mongoose
- Express
- EJS

## File Structure

- **Views** - Contains templates like `Show.ejs`, `index.ejs`, `Edit.ejs`, `New.ejs`
- **Models** - Contains the data schema for the MongoDB database
- **Controllers** - Handles requests and implements the app's logic

## Todo Model

- `title`: String
- `description`: String
- `todoByDate`: Date
- `completed`: Boolean
- `createdAt`: Date

## 7 RESTful Routes

| Route Name | URL                  | HTTP Verb | Description                              |
|------------|----------------------|-----------|------------------------------------------|
| Index      | /todos               |  GET       | Display a list of all to-dos            |
| New        | /todos/new           | GET       | Render a form for creating a new to-do   |
| Show       | /todos/:id           | GET       | Render details of a specific to-do      |
| Edit       | /todos/:id/edit      | GET       | Render a  form for editing a to-do        |
| Create     | /todos               | POST      | Create a new to-do                       |
| Update     | /todos/:id           | PUT       | Edit/update a specific to-do            |
| Delete     | /todos/:id           | DELETE    | Delete a specific to-do                 |

## Future Steps

- Implement user login
- Add alarm functionality when a todo is due
- Enhance the user interface
- Add more options for marking tasks as completed

### Cool Code for Marking Tasks as Completed

```html
<label for="completed">Completed:</label>
<input type="checkbox" id="completed" name="completed" <% if (todo.completed) { %>checked<% } %>><br><br>
<span class="badge bg-primary rounded-pill float-end">Completed: <%= todo.completed ? 'Yes' : 'No' %></span>
