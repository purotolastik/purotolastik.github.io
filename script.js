
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("yorumForm");
  const list = document.getElementById("yorumListesi");

  function loadComments() {
    list.innerHTML = "";
    const yorumlar = JSON.parse(localStorage.getItem("yorumlar") || "[]");
    yorumlar.forEach((y) => {
      const div = document.createElement("div");
      div.style.padding = "10px";
      div.style.borderBottom = "1px solid #ddd";
      div.innerHTML = `<strong>${y.ad}</strong><p>${y.yorum}</p>`;
      list.appendChild(div);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const ad = document.getElementById("ad").value;
    const yorum = document.getElementById("yorum").value;

    const yorumlar = JSON.parse(localStorage.getItem("yorumlar") || "[]" );
    yorumlar.push({ ad, yorum });
    localStorage.setItem("yorumlar", JSON.stringify(yorumlar));

    form.reset();
    loadComments();
  });

  loadComments();
});
