function project(name, projectNumber) {
  let projectHours = projectNumber * 3;
  console.log(
    `The architect ${name} will need ${projectHours} hours to complete ${projectNumber} project/s.`
  );
}
project("Sanya", "9");
