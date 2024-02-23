// Fatorial de forma recursiva, isso acontece quando uma função chama ela mesma
function fatorial(n){
    if ( n == 1){
        return 1
    } else {
        return n* fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
ou 
5! = 5 x 4! É basicamente que fatorial de 5 é igual a 5 vezes o fatorial de 4

n! = n x (n-1)!
1! = 1
*/ 