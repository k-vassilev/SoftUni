function solve(word, input){
    input = input.replace(word,"") 
   while(input.includes(word)){
       input=input.replace(word,"")
   }
   console.log(input)
}
solve("ice", "kicegiciceeb");
