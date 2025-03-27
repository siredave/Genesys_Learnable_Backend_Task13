# 📒 Simple Note-Taking API (Node.js, Express, TypeScript, MongoDB)

This is a **simple REST API** for managing notes, built using **Node.js, Express, TypeScript, and MongoDB**.

## 🚀 Features
- Create, read, update, and delete notes
- Categorize notes
- User authentication with **JWT**
- Notes are associated with specific users
- Uses **MongoDB & Mongoose** for data storage
- Implements **TypeScript** for type safety
- Basic **error handling**

## 🛠 Tech Stack
- **Node.js** & **Express** (Server)
- **TypeScript** (Static typing)
- **MongoDB** & **Mongoose** (Database)
- **Postman** (API Testing)

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
https://github.com/siredave/Genesys_Backend_task11
cd Genesys_Backend_task11
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root folder and add:
```sh
MONGO_URI=mongodb://localhost:5000/noteDB
PORT=5000
JWT_SECRET=your_jwt_secret
```

### **4️⃣ Start the Server**
```sh
npm run dev
```

---

## 🌐 Hosted API
The API is hosted on Render. You can access it at:
[https://genesys-backend-task11.onrender.com](https://genesys-backend-task11.onrender.com)

---

## 📝 API Endpoints

### **1️⃣ Create a Note**
**POST** `/api/notes`
#### **Request Body (JSON)**
```json
{
  "title": "My First Note",
  "content": "This is a test note.",
  "category": {
    "id": "1",
    "name": "Personal"
  }
}
```
#### **Response**
```json
{
  "_id": "65ab23cde45678f901234567",
  "title": "My First Note",
  "content": "This is a test note.",
  "category": {
    "id": "1",
    "name": "Personal"
  },
  "user": "userId123",
  "createdAt": "2025-03-11T10:00:00.123Z",
  "updatedAt": "2025-03-11T10:00:00.123Z"
}
```

---

### **2️⃣ Get All Notes**
**GET** `/api/notes`
#### **Response**
```json
[
  {
    "_id": "65ab23cde45678f901234567",
    "title": "My First Note",
    "content": "This is a test note.",
    "category": {
      "id": "1",
      "name": "Personal"
    },
    "user": "userId123"
  }
]
```

---

### **3️⃣ Get a Note by ID**
**GET** `/api/notes/:id`
#### **Response**
```json
{
  "_id": "65ab23cde45678f901234567",
  "title": "My First Note",
  "content": "This is a test note.",
  "category": {
    "id": "1",
    "name": "Personal"
  },
  "user": "userId123"
}
```

---

### **4️⃣ Get Notes by Category ID**
**GET** `/api/notes/categories/:categoryId`
#### **Response**
```json
[
  {
    "_id": "65ab23cde45678f901234567",
    "title": "My First Note",
    "content": "This is a test note.",
    "category": {
      "id": "1",
      "name": "Personal"
    },
    "user": "userId123"
  }
]
```

---

### **5️⃣ Update a Note**
**PUT** `/api/notes/:id`
#### **Request Body (JSON)**
```json
{
  "title": "Updated Note Title",
  "content": "Updated content.",
  "category": {
    "id": "1",
    "name": "Personal"
  }
}
```
#### **Response**
```json
{
  "_id": "65ab23cde45678f901234567",
  "title": "Updated Note Title",
  "content": "Updated content.",
  "category": {
    "id": "1",
    "name": "Personal"
  },
  "user": "userId123",
  "createdAt": "2025-03-11T10:00:00.123Z",
  "updatedAt": "2025-03-11T10:00:00.123Z"
}
```

---

### **6️⃣ Delete a Note**
**DELETE** `/api/notes/:id`
#### **Response**
```json
{ "message": "Note deleted successfully" }
```

---

### **7️⃣ Register a User**
**POST** `/api/auth/register`
#### **Request Body (JSON)**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
#### **Response**
```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

### **8️⃣ Login a User**
**POST** `/api/auth/login`
#### **Request Body (JSON)**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
#### **Response**
```json
{
  "success": true,
  "message": "Logged in successfully",
  "token": "your_jwt_token"
}
```

---

## 🛠 Testing with Postman
1. Open **Postman**
2. Select **POST** and enter `http://127.0.0.1:5000/api/notes`
3. Go to **Body → raw → JSON** and add:
   ```json
   {
     "title": "Test Note",
     "content": "This is a sample note.",
     "category": {
       "id": "1",
       "name": "Personal"
     }
   }
   ```
4. Add an **Authorization Header** with the JWT token:
   ```
   Authorization: Bearer your_jwt_token
   ```
5. Click **Send**
6. You should get a success response 🎉

---

## 📌 Future Improvements
- Add **pagination** for listing notes
- Implement **role-based access control**

---

## 🎯 Author
👤 **Your Name**
- GitHub: https://github.com/siredave

---

## 📜 License
This project is **MIT Licensed**.