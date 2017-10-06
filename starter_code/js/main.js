$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york city') {
    clearBackground();
    $('body').addClass('nyc');
  } else if (userInput === 'sf') {
    clearBackground();
    $('body').addClass('sf');
  } else if (userInput === 'austin' || userInput === 'atx') {
    clearBackground();
    $('body').addClass('austin')
  }
}

function clearBackground() {
  $('body').removeClass('nyc sf')
}
