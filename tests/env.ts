import * as dotenv from 'dotenv'
export const getEnv = () => {
dotenv.config({
override: true,
path: `pages/.env.${process.env.ENV || 'qa'}`
})
}