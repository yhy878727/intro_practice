// All page text  in the HTML files.

// Project details: each "View project" button opens the <dialog> named in data-dialog.
document.querySelectorAll('[data-dialog]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  // Close when clicking the dimmed area outside the dialog box.
  dialog.addEventListener('click', (e) => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
});

// Print: open all career entries, then restore them.
let careerPrintState = [];
window.addEventListener('beforeprint', () => {
  careerPrintState = Array.from(document.querySelectorAll('.career-event'), (el) => ({ el, open: el.open }));
  careerPrintState.forEach(({ el }) => { el.open = true; });
});
window.addEventListener('afterprint', () => {
  careerPrintState.forEach(({ el, open }) => { el.open = open; });
  careerPrintState = [];
});

// Contact: the email address is not written in the page. It is put together only when someone
// clicks Contact, which keeps it away from bots that collect addresses from websites.
const EMAIL_PARTS = ["moc.liamg", "00972yhy"]; // domain and name, each stored backwards
document.querySelectorAll("[data-contact]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const [domain, name] = EMAIL_PARTS.map((part) => part.split("").reverse().join(""));
    window.location.href = "mailto:" + name + "@" + domain;
  });
});
