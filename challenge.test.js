import { describe, it, expect } from 'vitest'

function canReconfigure(from, to) {
    if (typeof from === 'undefined')
        throw new Error('the two params is missing')
    if (typeof to === 'undefined') throw new Error('to param is missing')
    if (typeof from !== 'string') throw new Error('from param must be a string')
    if (typeof to !== 'string') throw new Error('to param must be a string')

    if (!isSameLength) return false 
    if(!isLetterNumberDifferent(from, to)) return false 

    const transformations = {}

    for(let i = 0; i < from.length; i++) {
        const fromLetter = from[i]
        const toLetter = to[i]

        const storedLetter = transformations[fromLetter]
        if(storedLetter && storedLetter !== toLetter) return false

        transformations[fromLetter] = toLetter
    }
    return true
}

const isLetterNumberDifferent = (stringFrom, stringTo) => {
 return new Set(stringFrom).size === new Set(stringTo).size
}

const isSameLength = (stringFrom, stringTo) => {
     return stringFrom.length === stringTo.length 
}
describe('can reconfire function', () => {
    it('should throw if first parameter is not a string', () => {
        expect(() => canReconfigure(1, 'string')).toThrowError(Error)
    })

    it('should throw if second parameter is not a string', () => {
        expect(() => canReconfigure('string', [])).toThrowError(Error)
    })

    it('should throw if second parameter is missing or run without params', () => {
        expect(() => canReconfigure('string')).toThrowError(
            'to param is missing',
        )
        expect(() => canReconfigure()).toThrowError('the two params is missing')
    })

    it('should return a boolean ', () => {
        expect(canReconfigure('string', 'string')).toBeTypeOf('boolean')
    })

    it('should return false if string provided have different length', () => {
        expect(canReconfigure('string', 's')).toBe(false)
    })

    it('should return false if string provided have different number of unique letter', () => {
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })
    
    it('should return falsa if string have different unique letters',() => {
        expect(canReconfigure('xbox', 'boxx')).toBe(false)
    } )
})
