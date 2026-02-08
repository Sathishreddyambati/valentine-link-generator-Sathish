function generateLink() {
  const your = document.getElementById("yourName").value.trim();
  const val = document.getElementById("valName").value.trim();
  if (!your || !val) {
    alert("Please enter both names 😊");
    return;
  }

  const base = location.origin + location.pathname.replace(/\/[^/]*$/, "/valentine.html");
  const params = `?from=${encodeURIComponent(your)}&to=${encodeURIComponent(val)}`;
  const url = base + params;

  document.getElementById("linkOut").value = url;

  const message = `💌 Hey ${val},\n\n${your} has something sweet to ask you:\n${url}\n\n💖 Click the link!`;
  document.getElementById("msgOut").value = message;

  document.getElementById("result").style.display = "block";
}

function copyLink() {
  navigator.clipboard.writeText(document.getElementById("linkOut").value);
}

function copyMsg() {
  navigator.clipboard.writeText(document.getElementById("msgOut").value);
}

function openLink() {
  window.open(document.getElementById("linkOut").value, "_blank");
}
