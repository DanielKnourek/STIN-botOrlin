
// export const funSum = (a, b) => {
const funSum = (a, b) => {
    digits_b = Math.ceil(Math.log10(Math.abs(b)))
    return (a * Math.pow(10, digits_b + 1) + b)
}

export default funSum;