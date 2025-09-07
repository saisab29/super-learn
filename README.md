## SuperLearn

</div>

<div align="center">
  <a href="https://nextjs.org" title="Visit Next.js" target="_blank">
    <img alt="Next.js" src="https://img.shields.io/badge/-NEXTJS-black?style=for-the-badge&logo=Next.js" />
  </a>
  <a href="https://typescriptlang.org" title="More Typescript" target="_blank">
    <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
</div>

---

### 🛠 Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/super-learn.git
   cd super-learn
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   - Copy `.env.example` to `.env`
   - Fill in required environment variables:
     - Clerk keys
     - Database URL
     - Other API keys

4. **Database Setup**

   ```bash
   pnpm db:push
   pnpm db:seed
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see the application running.

### 📝 Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
```

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

This project is licensed under the MIT License.
