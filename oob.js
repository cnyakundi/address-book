function welcome(salutation) {
    return function name(firstName){
        console.log(`${salutation}! Nice to meet you, ${firstName}!`);
    }
    
}



const heyThere = welcome('Hey there');


heyThere('Nyakundi');