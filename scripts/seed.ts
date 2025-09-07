import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

import * as schema from '@/db/schema'

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema, logger: true })

const main = async () => {
  try {
    console.log('🚧 [DB]: Seeding database...')

    await db.delete(schema.challengeOptions)
    await db.delete(schema.challenges)
    await db.delete(schema.lessons)
    await db.delete(schema.units)
    await db.delete(schema.courses)
    // ----------------- COURSES -----------------
    await db.insert(schema.courses).values([
      { id: 1, title: 'Python', altCode: 'py' },
      { id: 2, title: 'Rust', altCode: 'rs' },
      { id: 3, title: 'Java', altCode: 'ja' },
    ])

    // ----------------- UNITS -----------------
    await db.insert(schema.units).values([
      // Python Units
      { id: 1, title: 'Unit 1', description: 'Python Basics', courseId: 1, order: 1 },
      { id: 2, title: 'Unit 2', description: 'Control Flow', courseId: 1, order: 2 },
      { id: 3, title: 'Unit 3', description: 'Functions & Modules', courseId: 1, order: 3 },
      { id: 4, title: 'Unit 4', description: 'Data Structures', courseId: 1, order: 4 },

      // Rust Units
      { id: 5, title: 'Unit 1', description: 'Rust Basics', courseId: 2, order: 1 },
      { id: 6, title: 'Unit 2', description: 'Ownership & Borrowing', courseId: 2, order: 2 },
      { id: 7, title: 'Unit 3', description: 'Enums & Pattern Matching', courseId: 2, order: 3 },
      { id: 8, title: 'Unit 4', description: 'Collections & Iterators', courseId: 2, order: 4 },

      // Java Units
      { id: 9, title: 'Unit 1', description: 'Java Basics', courseId: 3, order: 1 },
      { id: 10, title: 'Unit 2', description: 'Control Flow', courseId: 3, order: 2 },
      { id: 11, title: 'Unit 3', description: 'OOP Concepts', courseId: 3, order: 3 },
      { id: 12, title: 'Unit 4', description: 'Collections Framework', courseId: 3, order: 4 },
    ])

    // ----------------- LESSONS -----------------
    await db.insert(schema.lessons).values([
      // Python Lessons
      { id: 1, unitId: 1, order: 1, title: 'Variables' },
      { id: 2, unitId: 1, order: 2, title: 'Data Types' },
      { id: 3, unitId: 1, order: 3, title: 'Operators' },

      { id: 4, unitId: 2, order: 1, title: 'If Statements' },
      { id: 5, unitId: 2, order: 2, title: 'Loops' },
      { id: 6, unitId: 2, order: 3, title: 'Match Case (Python 3.10+)' },

      { id: 7, unitId: 3, order: 1, title: 'Defining Functions' },
      { id: 8, unitId: 3, order: 2, title: 'Imports' },
      { id: 9, unitId: 3, order: 3, title: 'Standard Library' },

      { id: 10, unitId: 4, order: 1, title: 'Lists' },
      { id: 11, unitId: 4, order: 2, title: 'Dictionaries' },
      { id: 12, unitId: 4, order: 3, title: 'Sets & Tuples' },

      // Rust Lessons
      { id: 13, unitId: 5, order: 1, title: 'Variables & Mutability' },
      { id: 14, unitId: 5, order: 2, title: 'Data Types' },
      { id: 15, unitId: 5, order: 3, title: 'Functions' },

      { id: 16, unitId: 6, order: 1, title: 'Ownership' },
      { id: 17, unitId: 6, order: 2, title: 'Borrowing & References' },
      { id: 18, unitId: 6, order: 3, title: 'Slices' },

      { id: 19, unitId: 7, order: 1, title: 'Enums' },
      { id: 20, unitId: 7, order: 2, title: 'Pattern Matching' },
      { id: 21, unitId: 7, order: 3, title: 'Option & Result' },

      { id: 22, unitId: 8, order: 1, title: 'Vectors' },
      { id: 23, unitId: 8, order: 2, title: 'HashMaps' },
      { id: 24, unitId: 8, order: 3, title: 'Iterators' },

      // Java Lessons
      { id: 25, unitId: 9, order: 1, title: 'Variables & Types' },
      { id: 26, unitId: 9, order: 2, title: 'Operators' },
      { id: 27, unitId: 9, order: 3, title: 'Methods' },

      { id: 28, unitId: 10, order: 1, title: 'If-Else' },
      { id: 29, unitId: 10, order: 2, title: 'Loops' },
      { id: 30, unitId: 10, order: 3, title: 'Switch' },

      { id: 31, unitId: 11, order: 1, title: 'Classes & Objects' },
      { id: 32, unitId: 11, order: 2, title: 'Inheritance' },
      { id: 33, unitId: 11, order: 3, title: 'Polymorphism' },

      { id: 34, unitId: 12, order: 1, title: 'Lists' },
      { id: 35, unitId: 12, order: 2, title: 'Sets' },
      { id: 36, unitId: 12, order: 3, title: 'Maps' },
    ])

    // ----------------- CHALLENGES (example for first few lessons) -----------------
    await db.insert(schema.challenges).values([
      // Python Lesson 1: Variables
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        order: 1,
        question: 'Which is a valid variable in Python?',
      },
      {
        id: 2,
        lessonId: 1,
        type: 'SELECT',
        order: 2,
        question: 'What is the correct way to assign a string?',
      },
      { id: 3, lessonId: 1, type: 'SELECT', order: 3, question: 'Which variable name is invalid?' },
      {
        id: 4,
        lessonId: 1,
        type: 'SELECT',
        order: 4,
        question: 'What is the output of x=5; print(x)?',
      },
      {
        id: 5,
        lessonId: 1,
        type: 'SELECT',
        order: 5,
        question: 'Which keyword cannot be used as a variable name?',
      },

      // Rust Lesson 13: Variables & Mutability
      {
        id: 6,
        lessonId: 13,
        type: 'SELECT',
        order: 1,
        question: 'How do you declare a mutable variable in Rust?',
      },
      {
        id: 7,
        lessonId: 13,
        type: 'SELECT',
        order: 2,
        question: 'What is the default mutability in Rust?',
      },
      {
        id: 8,
        lessonId: 13,
        type: 'SELECT',
        order: 3,
        question: 'Which keyword is used for constants?',
      },
      { id: 9, lessonId: 13, type: 'SELECT', order: 4, question: 'What does let x = 5; mean?' },
      {
        id: 10,
        lessonId: 13,
        type: 'SELECT',
        order: 5,
        question: 'Which is correct syntax for mutable binding?',
      },

      // Java Lesson 25: Variables & Types
      {
        id: 11,
        lessonId: 25,
        type: 'SELECT',
        order: 1,
        question: 'Which is a valid variable declaration in Java?',
      },
      {
        id: 12,
        lessonId: 25,
        type: 'SELECT',
        order: 2,
        question: 'What is the default value of int in Java?',
      },
      {
        id: 13,
        lessonId: 25,
        type: 'SELECT',
        order: 3,
        question: 'Which keyword is used for constants in Java?',
      },
      {
        id: 14,
        lessonId: 25,
        type: 'SELECT',
        order: 4,
        question: 'Which is correct: int x = 5; or x int = 5;',
      },
      {
        id: 15,
        lessonId: 25,
        type: 'SELECT',
        order: 5,
        question: 'Which data type stores a single character?',
      },
    ])

    // ----------------- CHALLENGE OPTIONS (example for challenge 1 only) -----------------
    // ----------------- CHALLENGE OPTIONS -----------------
    await db.insert(schema.challengeOptions).values([
      // Python Lesson 1: Variables
      { id: 1, challengeId: 1, option: 'x = 5', correct: true, imageSrc: '', audioSrc: '' },
      { id: 2, challengeId: 1, option: '5 = x', correct: false, imageSrc: '', audioSrc: '' },
      { id: 3, challengeId: 1, option: 'let x = 5', correct: false, imageSrc: '', audioSrc: '' },
      {
        id: 4,
        challengeId: 1,
        option: 'var int x = 5;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },

      {
        id: 5,
        challengeId: 2,
        option: `name = "Alice"`,
        correct: true,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 6,
        challengeId: 2,
        option: `string name = "Alice"`,
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 7,
        challengeId: 2,
        option: `name := "Alice"`,
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      { id: 8, challengeId: 2, option: `Alice = name`, correct: false, imageSrc: '', audioSrc: '' },

      { id: 9, challengeId: 3, option: '2var = 5', correct: false, imageSrc: '', audioSrc: '' },
      { id: 10, challengeId: 3, option: 'my_var = 10', correct: true, imageSrc: '', audioSrc: '' },
      { id: 11, challengeId: 3, option: 'class = 20', correct: false, imageSrc: '', audioSrc: '' },
      { id: 12, challengeId: 3, option: '_hidden = 30', correct: true, imageSrc: '', audioSrc: '' },

      { id: 13, challengeId: 4, option: '5', correct: true, imageSrc: '', audioSrc: '' },
      { id: 14, challengeId: 4, option: 'x', correct: false, imageSrc: '', audioSrc: '' },
      { id: 15, challengeId: 4, option: 'print', correct: false, imageSrc: '', audioSrc: '' },
      { id: 16, challengeId: 4, option: 'Error', correct: false, imageSrc: '', audioSrc: '' },

      { id: 17, challengeId: 5, option: 'def', correct: false, imageSrc: '', audioSrc: '' },
      { id: 18, challengeId: 5, option: 'class', correct: false, imageSrc: '', audioSrc: '' },
      { id: 19, challengeId: 5, option: 'for', correct: false, imageSrc: '', audioSrc: '' },
      { id: 20, challengeId: 5, option: 'myVar', correct: true, imageSrc: '', audioSrc: '' },

      // Rust Lesson 13: Variables & Mutability
      {
        id: 21,
        challengeId: 6,
        option: 'let mut x = 5;',
        correct: true,
        imageSrc: '',
        audioSrc: '',
      },
      { id: 22, challengeId: 6, option: 'var x = 5;', correct: false, imageSrc: '', audioSrc: '' },
      {
        id: 23,
        challengeId: 6,
        option: 'mutable x = 5;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      { id: 24, challengeId: 6, option: 'let x = 5;', correct: false, imageSrc: '', audioSrc: '' },

      { id: 25, challengeId: 7, option: 'Immutable', correct: true, imageSrc: '', audioSrc: '' },
      { id: 26, challengeId: 7, option: 'Mutable', correct: false, imageSrc: '', audioSrc: '' },
      { id: 27, challengeId: 7, option: 'Dynamic', correct: false, imageSrc: '', audioSrc: '' },
      {
        id: 28,
        challengeId: 7,
        option: 'Const by default',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },

      { id: 29, challengeId: 8, option: 'const', correct: false, imageSrc: '', audioSrc: '' },
      { id: 30, challengeId: 8, option: 'static', correct: false, imageSrc: '', audioSrc: '' },
      { id: 31, challengeId: 8, option: 'let', correct: false, imageSrc: '', audioSrc: '' },
      { id: 32, challengeId: 8, option: 'const fn', correct: false, imageSrc: '', audioSrc: '' },

      {
        id: 33,
        challengeId: 9,
        option: 'x is bound to 5 immutably',
        correct: true,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 34,
        challengeId: 9,
        option: 'x is mutable',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 35,
        challengeId: 9,
        option: 'x is undefined',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 36,
        challengeId: 9,
        option: 'Error occurs',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },

      {
        id: 37,
        challengeId: 10,
        option: 'let mut y = 10;',
        correct: true,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 38,
        challengeId: 10,
        option: 'mut y = 10;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 39,
        challengeId: 10,
        option: 'var mut y = 10;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      {
        id: 40,
        challengeId: 10,
        option: 'let y = mut 10;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },

      // Java Lesson 25: Variables & Types
      { id: 41, challengeId: 11, option: 'int x = 5;', correct: true, imageSrc: '', audioSrc: '' },
      { id: 42, challengeId: 11, option: 'x int = 5;', correct: false, imageSrc: '', audioSrc: '' },
      { id: 43, challengeId: 11, option: 'let x = 5;', correct: false, imageSrc: '', audioSrc: '' },
      {
        id: 44,
        challengeId: 11,
        option: 'var int x = 5;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },

      { id: 45, challengeId: 12, option: '0', correct: true, imageSrc: '', audioSrc: '' },
      { id: 46, challengeId: 12, option: 'null', correct: false, imageSrc: '', audioSrc: '' },
      { id: 47, challengeId: 12, option: 'undefined', correct: false, imageSrc: '', audioSrc: '' },
      { id: 48, challengeId: 12, option: 'Error', correct: false, imageSrc: '', audioSrc: '' },

      { id: 49, challengeId: 13, option: 'const', correct: true, imageSrc: '', audioSrc: '' },
      { id: 50, challengeId: 13, option: 'final', correct: true, imageSrc: '', audioSrc: '' },
      { id: 51, challengeId: 13, option: 'static', correct: false, imageSrc: '', audioSrc: '' },
      { id: 52, challengeId: 13, option: 'def', correct: false, imageSrc: '', audioSrc: '' },

      { id: 53, challengeId: 14, option: 'int x = 5;', correct: true, imageSrc: '', audioSrc: '' },
      { id: 54, challengeId: 14, option: 'x int = 5;', correct: false, imageSrc: '', audioSrc: '' },
      {
        id: 55,
        challengeId: 14,
        option: 'declare x = 5;',
        correct: false,
        imageSrc: '',
        audioSrc: '',
      },
      { id: 56, challengeId: 14, option: 'let x = 5;', correct: false, imageSrc: '', audioSrc: '' },

      { id: 57, challengeId: 15, option: 'char', correct: true, imageSrc: '', audioSrc: '' },
      { id: 58, challengeId: 15, option: 'string', correct: false, imageSrc: '', audioSrc: '' },
      { id: 59, challengeId: 15, option: 'Character', correct: true, imageSrc: '', audioSrc: '' },
      { id: 60, challengeId: 15, option: 'bool', correct: false, imageSrc: '', audioSrc: '' },
    ])

    console.log('✅ [DB]: Seeded 100%!')
  } catch (error) {
    console.error(error)
    throw new Error('❌ [DB]: Failed to seed database.')
  }
}

main()
