function initChips() {
  document.querySelectorAll('.cat, .nav .tab').forEach(function (el) {
    el.addEventListener('click', function () {
      el.parentElement.querySelectorAll('.active').forEach(function (a) {
        a.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

function initFavorites() {
  document.querySelectorAll('.fav').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      el.classList.toggle('on');
    });
  });
}

function initSteppers() {
  document.querySelectorAll('.stepper').forEach(function (stepper) {
    var count = stepper.querySelector('.n');
    var dec = stepper.querySelector('[data-step="-1"]');
    var inc = stepper.querySelector('[data-step="1"]');
    var value = parseInt(count.textContent, 10) || 0;

    function render() {
      count.textContent = value;
      dec.disabled = value <= 0;
    }
    dec.addEventListener('click', function () {
      if (value > 0) value--;
      render();
    });
    inc.addEventListener('click', function () {
      value++;
      render();
    });
    render();
  });
}

function initRequestButton() {
  var btn = document.querySelector('#request-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    btn.textContent = 'Request sent';
    btn.disabled = true;
  });
}

initChips();
initFavorites();
initSteppers();
initRequestButton();
