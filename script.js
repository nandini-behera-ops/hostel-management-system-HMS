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
