const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluste0.zfiwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluste0`,
  env: 'development'
}