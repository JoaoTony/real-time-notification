const typeCodes = ['Liked', 'commented', 'shared']

export const typeCodeToText = (type: number) => typeCodes[type]

export const formatedName = (avtive: string, name: string) => name === avtive ? 'You' : name
