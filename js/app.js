function get_random_color() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const listItem = document.getElementsByClassName('list-item');
for(let i = 0; i < listItem.length; i++) {
  listItem[i].style.backgroundColor = get_random_color();
}


$('#Contact').on('submit', function(e){
  $('#Contact').modal('hide');
  $('#myModal').modal('show');
  e.preventDefault();
});