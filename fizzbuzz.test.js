import { describe, it, expect} from 'vitest'
import { fizzbuzz} from './fizzbuzz'

describe('fizzbuzz', () => {
    it('should throw a specific error message if not number is provided a parameter', () => {
        expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
    })

    it('should throw a specific erreor if NAN is provided', () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number, the parameter is NaN')
    })

    it('should output number is not multiple of 3 & 5 be number', () => {
        expect(fizzbuzz(1)).toBe(1)
        expect(fizzbuzz(4)).toBe(4)
    })

    it('should output "fizz", if number provided is multiple of 3', () => {
        expect(fizzbuzz(3)).toBe("fizz")
        expect(fizzbuzz(6)).toBe("fizz")
        expect(fizzbuzz(12)).toBe("fizz")
    })

    it('should output "buzz", if number provided is multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz') 
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
    })
    
    it('should output "fizzbuzz", if number is multiple of 7', () => {
        expect(fizzbuzz(7)).toBe('woof')
    })

    it('should output "fizzbuzz", if number is multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')        
        expect(fizzbuzz(30)).toBe('fizzbuzz')        
    })

    it('should output "buzzwoof", if number is multiple of 5 and 7', () => {
        expect(fizzbuzz(35)).toBe('buzzwoof')
    })
    
    it('should output "fizzbuzzwoof", if number is multiple of 3, 5 and 7', () => {
        expect(fizzbuzz(105)).toBe('fizzbuzzwoof')
    })

    it('should output "fizzwoof", if number is multiple of 3 and 7', () => {
        expect(fizzbuzz(21)).toBe('fizzwoof')
    })
})