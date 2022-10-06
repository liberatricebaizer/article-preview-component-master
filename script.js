document.getElementById('icon').addEventListener('click', function () {
  document.querySelector('.share').style.display = 'flex';
  document.getElementById('iconClose').style.display = 'inline-block';
  document.getElementById('icon').style.display = 'none';
});

function init() {
  document.querySelector('.share').style.display = 'none';
  document.getElementById('icon').style.display = 'inline-block';
  document.getElementById('iconClose').style.display = 'none';
}

document.getElementById('iconClose').addEventListener('click', init);
document.getElementById('iconCloseOne').addEventListener('click', init);
