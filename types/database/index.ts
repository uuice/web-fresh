import { UserTable } from './tables/user.table.ts'

export interface Database {
    user: UserTable
}
