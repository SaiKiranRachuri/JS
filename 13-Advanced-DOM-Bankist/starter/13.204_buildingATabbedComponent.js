const tabContent = document.querySelectorAll('.operations__content');
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');

tabContainer.addEventListener('click', function (e) {
  console.log(e.target.closest('.operations__tab'));
  // Retreving target tab despite clicked on number over tab which ideally fetches span element.
  const clicked = e.target.closest('.operations__tab');
  //   console.log(clicked);

  if (!clicked) return;
  // CLicking in between tabs.

  tabs.forEach(function (tab) {
    tab.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  tabContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
