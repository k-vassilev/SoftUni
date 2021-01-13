function input(firstName, lastName, age, town) {
  age = Number(age);
  //console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");
  a = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
  console.log(a);
}
input("Maria", "Ivanova", 20, "Sofia");
