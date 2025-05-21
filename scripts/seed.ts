import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Python",
        imageSrc: "/python.svg",
      },
      {
        id: 2,
        title: "Java",
        imageSrc: "/java.svg",
      },
      {
        id: 3,
        title: "Rust",
        imageSrc: "/rust.svg",
      },
    ]);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
