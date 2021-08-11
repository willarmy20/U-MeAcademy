export const formatCurrency = (num) => 
{
    return `$ ${parseFloat(num).toFixed(2).toLocaleString()}`

};