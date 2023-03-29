export interface Pet{
    id?: number, //indicamos que el ID es opcional por que lo generara nuestro backend
    name: string,
    age: number,
    race: string,
    color: string,
    weight: number,
    description: string
}