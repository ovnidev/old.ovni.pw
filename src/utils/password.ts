import * as randomseed from "random"

// deno-lint-ignore ban-types
declare const sha512: Function

const characters = "0123456789abcdefghijklmnopqrstuvwxyz_-!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const getPassword = async (master: string, service: string, length = 14, alphabet: string = characters): Promise<string> => {

    if(service == '' || master == '') return ''

    const masterHash = await createHash(master)
    const serviceHash = await createHash(service)
    const hash = await createHash(masterHash + serviceHash)

    return createPassword(hash, length, alphabet)

}

const createPassword = (hash: string, length: number, alphabet: string): string => {

    let result = ''
    const seed = randomseed.create(hash)

    for(let i = 0; i < length; i++)
        result += alphabet[seed(alphabet.length)]

    return result
}

const createHash = async (str: string): Promise<string> => {
    const buffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(str))
    return Array.prototype.map.call(new Uint8Array(buffer), x=>(('00'+x.toString(16)).slice(-2))).join('')
}

const getCssColor = (master: string, service: string, s = 75, l = 75): string => {

    if(service == '' || master == '') return 'hsl(255, ' + s + '%, ' + l + '%)'

    const seed = sha512(master + service)
    const random = randomseed.create(seed)
    const h = random.intBetween(0, 360)

    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)'

}

export {
    getPassword,
    getCssColor
}