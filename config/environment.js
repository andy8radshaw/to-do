import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT || 8000
export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/to-do-db'
export const secret = process.env.SECRET || 'hello this is my secret'