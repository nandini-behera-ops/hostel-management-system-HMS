const complaint = document.querySelector("#complaint");
const leave = document.querySelector("#leave");
const menu = document.querySelector("#menu");
const notice = document.querySelector("#notice");

complaint.addEventListener("click", () => {
  showSection("complaintSection");
});
leave.addEventListener("click", () => {
  showSection("leaveSection");
});
menu.addEventListener("click", () => {
  showSection("messSection");
});
notice.addEventListener("click", () => {
  showSection("noticeSection");
});
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => (section.style.display = "none"));

  document.getElementById(sectionId).style.display = "block";
}

const complaintForm = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

displayComplaints();

complaintForm.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const name = document.getElementById("cName").value;
  const room = document.getElementById("cRoom").value;
  const type = document.getElementById("cType").value;
  const desc = document.getElementById("cDesc").value;

  const complaint = {
    name,
    room,
    type,
    desc,
    date: new Date().toLocaleString(),
  };

  complaints.push(complaint);
  localStorage.setItem("complaints", JSON.stringify(complaints));
  displayComplaints();
  complaintForm.reset();

  return false;
});

function displayComplaints() {
  complaintList.innerHTML = "";
  complaints.forEach((c, index) => {
    const li = document.createElement("li");
    li.textContent = `${c.name} (Room ${c.room}) - ${c.type}: ${c.desc} | ${c.date}`;
    complaintList.appendChild(li);
  });
}
