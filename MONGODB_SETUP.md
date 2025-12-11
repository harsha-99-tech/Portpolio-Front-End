# MongoDB Setup Guide

## ✅ Environment File Created

Great! You've created the `.env.local` file. Make sure it contains:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

## Next Steps

### 1. Seed the Database with Sample Projects

You can seed the database with sample projects using one of these methods:

**Using PowerShell:**
```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/projects/seed -Method POST
```

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/projects/seed
```

**Using Postman or any API client:**
- Method: POST
- URL: http://localhost:3000/api/projects/seed

### 2. Verify Projects are Loading

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/home

3. Scroll to the Portfolio section

4. Click on different tabs (App Dev., Web Dev., etc.) to see projects filtered by category

### 3. Add Your Own Projects

You can add projects via the API:

**Using PowerShell:**
```powershell
$body = @{
    project = "My Project Name"
    description = "Project description"
    technologies = @("React", "Node.js", "MongoDB")
    tools = @("VS Code", "Git")
    link = "https://your-project-link.com"
    category = "web"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/api/projects/web -Method POST -Body $body -ContentType "application/json"
```

**Or directly in MongoDB:**
- Connect to your MongoDB database
- Navigate to the `projects` collection
- Insert documents with the following structure:

```json
{
  "project": "Project Name",
  "description": "Project description",
  "image": "https://image-url.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "tools": ["VS Code", "Git"],
  "link": "https://project-link.com",
  "category": "web"
}
```

### 4. Project Categories

- `app` - App Development projects
- `web` - Web Development projects
- `graphic` - Graphic Design projects
- `ui` - UI Design projects
- `ot` - Other projects

### Troubleshooting

**Connection Error:**
- Verify your `.env.local` file exists in the root directory
- Check that `MONGODB_URI` is spelled correctly
- Ensure your MongoDB Atlas IP whitelist includes your current IP
- Verify your database username and password are correct

**Projects Not Loading:**
- Check the browser console for errors
- Verify the database connection in server logs
- Make sure you've seeded the database
- Check that projects have the correct `category` field

**API Errors:**
- Ensure the development server is running
- Check server logs for detailed error messages
- Verify your MongoDB connection is working
