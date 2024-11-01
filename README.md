# Student Records API

A simple REST API for managing student records built with Express.js. This API supports CRUD operations (Create, Read, Update, Delete) on student records.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A REST client (Postman, Thunder Client, or VS Code's REST Client extension)

## Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/safalafas/rest-api.git
   cd rest-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create main application file**

   ```bash
   touch index.js
   ```

4. **Optional: Create environment file**
   ```bash
   touch .env
   ```
   Add to .env:
   ```
   PORT=3000
   ```

## Running the Service

Start the server:

```bash
node index.js
```

The API will be available at `http://localhost:3000`

## API Documentation

### Endpoints

1. **Get All Students**

   ```http
   GET /students
   ```

   Response: Array of student objects

2. **Get Student by ID**

   ```http
   GET /students/:id
   ```

   Response: Single student object or 404 error

3. **Create Student**

   ```http
   POST /students
   Content-Type: application/json

   {
       "Name": "John Doe",
       "Grade": "A",
       "Email": "john@example.com"
   }
   ```

   Response: Success message with created student

4. **Update Student**

   ```http
   PUT /students/:id
   Content-Type: application/json

   {
       "Name": "John Doe",
       "Grade": "A+",
       "Email": "john@example.com"
   }
   ```

   Response: Success message with updated student

5. **Delete Student**
   ```http
   DELETE /students/:id
   ```
   Response: Success message or 404 error

### Data Model

Student records follow this structure:

```javascript
{
    "ID": Number,    // Auto-generated
    "Name": String,  // Required
    "Grade": String, // Required
    "Email": String  // Required
}
```

## Testing

Create a `test.http` file in your project root:

```http
### Get all students
GET http://localhost:3000/students

### Get specific student
GET http://localhost:3000/students/1

### Create student
POST http://localhost:3000/students
Content-Type: application/json

{
    "Name": "John Doe",
    "Grade": "A",
    "Email": "john@example.com"
}

### Update student
PUT http://localhost:3000/students/1
Content-Type: application/json

{
    "Name": "John Doe Updated",
    "Grade": "A+",
    "Email": "john.updated@example.com"
}

### Delete student
DELETE http://localhost:3000/students/1
```

To test:

1. Install "REST Client" extension in VS Code
2. Open test.http
3. Click "Send Request" above each request

## Error Handling

The API returns appropriate status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found

Error responses include descriptive messages:

```javascript
{
    "error": "Descriptive error message"
}
```

## Project Structure

```
rest-api/
├── node_modules/
├── index.js
├── test.http
├── .env
├── .gitignore
└── README.md
```

## Best Practices

1. **Error Handling**: Always check for invalid inputs
2. **Validation**: Validate required fields
3. **Status Codes**: Use appropriate HTTP status codes
4. **Testing**: Test all endpoints before deployment

## Common Issues

1. **Port Already in Use**

   - Check if another service is using port 3000
   - Change PORT in .env file

2. **Missing Fields**
   - Ensure all required fields are provided in requests
   - Check Content-Type header is set correctly

## License

This project is open-source and available under the MIT License.
