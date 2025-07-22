function showEpisode(epId) {
  alert("🎬 Loading " + document.getElementById(epId).querySelector("h2").innerText + "… Get ready to level up! 🚀");

  document.querySelectorAll('.episode').forEach(e => e.style.display = 'none');
  document.querySelector('.button-group').style.display = 'none';
  document.getElementById(epId).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.episode').forEach(e => e.style.display = 'none');
  document.querySelector('.button-group').style.display = 'flex';
}
