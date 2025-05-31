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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Python",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Variables",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Operators",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Functions",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "List and Tuples",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "double" type?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "double type",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "Which one of these is the 'integer' type?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, //Which one of these is the "python vairable"
        text: "20",
        imageSrc: "/int.svg",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1, //Which one of these is the "python vairable"
        text: "20.0",
        imageSrc: "/float.svg",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1, //Which one of these is the "python vairable"
        text: "20.000",
        imageSrc: "/double.svg",
        correct: true,
        audioSrc: "/es_man.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, //Which one of these is the "python vairable"
        text: "20",
        correct: true,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2, //Which one of these is the "python vairable"
        text: "20.0",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2, //Which one of these is the "python vairable"
        text: "20.000",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, //Which one of these is the "python vairable"
        text: "20",
        imageSrc: "/int.svg",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3, //Which one of these is the "python vairable"
        text: "20.0",
        imageSrc: "/float.svg",
        correct: false,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3, //Which one of these is the "python vairable"
        text: "20.000",
        imageSrc: "/double.svg",
        correct: true,
        audioSrc: "/es_man.mp3",
      },
    ]);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
