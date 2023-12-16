export const fizzbuzz = (num) => {
    if (typeof num !== 'number') throw new Error('parameter provided must be a number')
    if (Number.isNaN(num)) throw new Error('parameter provided must be a number, the parameter is NaN')

    // if(num % 15 === 0) return 'fizzbuzz'
    // if(num % 5 === 0) return 'buzz'
    // if(num % 3 === 0) return 'fizz'
    let output = ''
    const multiples = {
        3 : 'fizz',
        5 : 'buzz',
        7 : 'woof',
    }

    Object
        .entries(multiples)
        .forEach(([multiple, word]) => {
           if (num % multiple === 0) output += word
        });
    
    return output === '' ? num : output
}
