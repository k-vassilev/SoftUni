const [fName, lName, fNum, gr] = document.querySelectorAll("input");

const submitbtn = document.querySelector("#submit");
submitbtn.addEventListener("click", onSubmit);

const tbody = document.querySelector("tbody");

function onSubmit(e) {
  e.preventDefault();
  const firstName = fName.value;
  const lastName = lName.value;
  const facultyNumber = fNum.value;
  const grade = gr.value;

  if (firstName != "" && lastName != "" && facultyNumber != "" && grade != "") {
    const tr = createEl("tr");
    tbody.appendChild(tr);

    const thFirstName = createEl("td", firstName);
    tr.appendChild(thFirstName);

    const thLastName = createEl("td", lastName);
    tr.appendChild(thLastName);

    const thFacultyNumber = createEl("td", facultyNumber);
    tr.appendChild(thFacultyNumber);

    const thGrade = createEl("td", grade);
    tr.appendChild(thGrade);

    postStudent({ firstName, lastName, facultyNumber, grade });

    fName.value = "";
    lName.value = "";
    fNum.value = "";
    gr.value = "";
  } else {
    alert(`Input fields cannot be empty!`);
  }
}

async function postStudent(contactInfo) {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    }
  );
}

function createEl(type, textContent, className) {
  let element = document.createElement(type);
  if (textContent) {
    element.textContent = textContent;
  }
  if (className) {
    element.className = className;
  }
  return element;
}
