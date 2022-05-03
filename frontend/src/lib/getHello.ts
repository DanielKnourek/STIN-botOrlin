
export type Data = {
    name: string
}

const getHello = (): Data => {
    return { name: 'John Doe' };
}

export const getGreeting = (): string => {
    return "Greetings adventurer!"
}

export default getHello;