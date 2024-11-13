import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
} from 'kysely'

export interface UserTable {
    id: Generated<number>
    first_name: string
    gender: 'man' | 'woman' | 'other'

    last_name: string | null

    // You can specify a different type for each operation (select, insert and
    // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // wrapper. Here we define a column `created_at` that is selected as
    // a `Date`, can optionally be provided as a `string` in inserts and
    // can never be updated:
    created_at: ColumnType<Date, string | undefined, never>

    metadata: JSONColumnType<{
        login_at: string
        ip: string | null
        agent: string | null
        plan: 'free' | 'premium'
    }>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>
