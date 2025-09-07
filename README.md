
<img width="1897" height="868" alt="image" src="https://github.com/user-attachments/assets/b57d3345-10b8-46aa-83c3-3ebf0dd27a34" />

## SuperLearn

</div>

<div align="center">
  <a href="https://nextjs.org" title="Visit Next.js" target="_blank">
    <img alt="Next.js" src="https://img.shields.io/badge/-NEXTJS-black?style=for-the-badge&logo=Next.js" />
  </a>
  <a href="https://typescriptlang.org" title="More Typescript" target="_blank">
    <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  <a href="https://spring.io/projects/spring-boot" title="Spring Boot" target="_blank">
    <img alt="Spring Boot" src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  </a>
  <a href="https://www.postgresql.org/" title="PostgreSQL" target="_blank">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a>
</div>

---

### Tech Stack

#### Frontend

- Next.js 14 with server actions
- TypeScript
- Authentication (Clerk)
- Beautiful UI (Shadcn UI)
- Database (DrizzleORM + PostgreSQL)

#### Backend (Under Development)

- Spring Boot 3
- Java 17
- RESTful APIs
- PostgreSQL

### 🛠 Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/super-learn.git
   cd super-learn
   ```

2. **Frontend Setup**

   ```bash
   cd frontend
   pnpm install
   ```

3. **Backend Setup**

   ```bash
   cd api
   ./mvnw clean install
   ```

4. **Environment Setup**

   - Copy `.env.example` to `.env`
   - Fill in required environment variables:
     - Clerk keys
     - Database URL
     - Other API keys

5. **Database Setup**

   ```bash
   pnpm db:push
   pnpm db:seed
   ```

6. **Start Development Servers**

   Frontend:

   ```bash
   cd frontend
   pnpm dev
   ```

   Backend:

   ```bash
   cd api
   ./mvnw spring-boot:run
   ```

Frontend: Visit `http://localhost:3000`  
Backend API: Available at `http://localhost:8080`

### 📝 Environment Variables

```env
# Frontend
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=

# Backend
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
```

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

This project is licensed under the MIT
