let items = document.getElementsByClassName('item');
let text = document.getElementsByClassName('item__text');
let subtitle = document.getElementsByClassName('item__subtitle');
let descriptions = [
  'Печень утки разварная с артишоками.',
  'Головы щучьи с чесноком да свежайшая сёмгушка.',
  'Филе из цыплят с трюфелями в бульоне.',
];
let disabledDescriptions = ['фуа-гра', 'рыбой', 'курой'];

for (var i = 0; i < items.length; i++) {
  if (items[i].classList.contains('disabled')) {
    text[i].innerHTML = 'Печалька, с ' + disabledDescriptions[i] + ' закончился.';
  }
}




function selectedItem(n) {

    for (var i = 0; i < items.length; i++) {
        if (items[n].classList.contains('disabled')) {
            items[n].classList.remove('selected');
        } else if (items[n].classList.contains('selected')) {
            // items[n].addEventListener('mouseout', () => {
                items[n].classList.remove('selected');
                subtitle[n].innerHTML = 'Сказочное заморское яство';
                subtitle[n].style.color = '#666';
                text[n].innerHTML = 'Чего сидишь? Порадуй котэ, <span class="item__link" onclick="selectedItem(' + n + ')">купи.</span>';
            // });
        } else {
          // items[n].addEventListener('mouseout', () => {
            items[n].classList.add('selected');
            text[n].innerHTML = descriptions[n];
          // });
        } 
    }
}





function hoverItem(n) {
  for (var i = 0; i < items.length; i++) {
    items[n].onmouseover = items[n].onmouseout = handler;

    function handler(event) {
      if (event.type == 'mouseover') {
        for (var i = 0; i < items.length; i++) {
          if (items[n].classList.contains('selected')) {
            subtitle[n].innerHTML = 'Котэ не одобряет?';
            subtitle[n].style.color = '#E52E7A';
          }
        }
      }

      if (event.type == 'mouseout') {
        for (var i = 0; i < items.length; i++) {
          if (items[n].classList.contains('selected')) {
            subtitle[n].innerHTML = 'Сказочное заморское яство';
            subtitle[n].style.color = '#666';
          }
        }
      }
    }
  }
}




















