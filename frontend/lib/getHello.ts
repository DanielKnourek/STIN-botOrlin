
export type Data = {
    name: string
}

const getHello = (): Data => {
    return { name: 'John Doe' };
}

export default getHello;