const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function fil(n)
{
    if(n%2 == 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
newarr =  nums.filter(fil);
console.log(newarr);    
