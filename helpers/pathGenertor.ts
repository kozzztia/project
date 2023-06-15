

export const pathGenerator  = (... args : string[]) : string => {
    return `${[...args].join("/")}`
}