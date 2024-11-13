import { Database } from '../../types/database/index.ts' // this is the Database interface we defined earlier
import Pool from 'pg-pool'
import { Kysely, PostgresDialect } from 'kysely'
import { CamelCasePlugin, ConsoleLogQueryPlugin } from 'kysely/plugins'

const isDevelopment = Deno.env.get('ENV') === 'development'

const dialect = new PostgresDialect({
    pool: new Pool({
        database: 'test',
        host: 'localhost',
        user: 'admin',
        port: 5434,
        max: 10,
    }),
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
    dialect,
    plugins: [
        // This plugin logs all queries to the console.
        // It's great for development, but you can remove it for production.
        ...(isDevelopment ? [new ConsoleLogQueryPlugin()] : []),
        new CamelCasePlugin(),
    ],
})
