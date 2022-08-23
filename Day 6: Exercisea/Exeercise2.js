let prime = []
for (let i = 0; i < 100; i++) {
    prime[i] = 0
}

for (let j = 0; j < 100; j++) {
    for (let i = 0; i < 100; i*j) {
        prime[i] = 100
    }
}

for (let i = 0; i < prime.length; i++) {
    if(prime[i] == 0){
     console.log(i)   
    }
}  