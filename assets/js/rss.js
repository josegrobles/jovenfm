$(document).ready(function () {
  $('#test').rssfeed('http://radiocraft.tumblr.com/rss', {
    header: false,
	dateformat: 'dd/MM/yyyy',
	snippet: false
  });
});