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
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
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

const leaveForm = document.getElementById("leaveForm");
const leaveList = document.getElementById("leaveList");
let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
displayLeaves();

leaveForm.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const name = document.getElementById("lName").value;
  const room = document.getElementById("lRoom").value;

  const from = new Date(
    document.getElementById("lFrom").value,
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const to = new Date(document.getElementById("lTo").value).toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "2-digit", year: "numeric" },
  );

  const reason = document.getElementById("lReason").value;

  const leave = {
    name: name,
    room: room,
    from: from,
    to: to,
    reason: reason,
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  };

  leaves.push(leave);
  localStorage.setItem("leaves", JSON.stringify(leaves));
  displayLeaves();
  leaveForm.reset();

  return false;
});

function displayLeaves() {
  leaveList.innerHTML = "";
  leaves.forEach((l) => {
    const li = document.createElement("li");
    li.textContent = `${l.name} (Room ${l.room}) | ${l.from} → ${l.to} | Reason: ${l.reason} | ${l.date}`;
    leaveList.appendChild(li);
  });
}

const noticeForm = document.getElementById("noticeForm");
const noticeList = document.getElementById("noticeList");

let notices = JSON.parse(localStorage.getItem("notices")) || [];
displayNotices();

noticeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const text = document.getElementById("noticeText").value;

  const notice = {
    text,
    date: new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  };

  notices.push(notice);
  localStorage.setItem("notices", JSON.stringify(notices));
  displayNotices();
  noticeForm.reset();

  return false;
});

function displayNotices() {
  noticeList.innerHTML = "";
  notices.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = `${n.text} | ${n.date}`;
    noticeList.appendChild(li);
  });
}
