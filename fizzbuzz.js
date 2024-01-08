export const fizzbuzz = num => {
    if (typeof num !== 'number')
        throw new Error('parameter provided must be a number')
    if (Number.isNaN(num))
        throw new Error(
            'parameter provided must be a number, the parameter is NaN',
        )

    let output = ''
    const multiples = {
        3: 'fizz',
        5: 'buzz',
        7: 'woof',
    }

    Object.entries(multiples).forEach(([multiple, word]) => {
        if (num % multiple === 0) output += word
    })

    return output === '' ? num : output
}
