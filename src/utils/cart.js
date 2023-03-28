export const TotalPrice = (count, price, discount) => {

    return count*price*(1 - discount / 100)
}