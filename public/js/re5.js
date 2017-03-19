$('#app').html(`

<div class="loader">Loading...</div>
`);
setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt3717252"
}).done(function(res){
	console.log(res);
	let html = `
<center>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<iframe width="560" height="445" src="https://www.youtube.com/embed/rKHL5PyAPzs" frameborder="0" allowfullscreen></iframe>
       <div id="container">
		<div id="left">
		<h3>Type: ${res.Type}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Plot: ${res.Plot}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
</div>
		<center>
		<h5>GALLERY<h5>
		</center>
        <div id= "right">

        <div class="gallery">
  <a target="_blank" href="img/S15.jpg">
    <img src="img/S15.jpg" alt="S15" width="300" height="200">
  </a>
 
</div>
<br>

<div class="gallery">
  <a target="_blank" href="img/S16.jpg">
    <img src="img/S16.jpg" alt="S16" width="300" height="200">
  </a>
 
</div>
<br>

<div class="gallery">
  <a target="_blank" href="img/S17.jpg">
    <img src="img/S17.jpg" alt="S17" width="300" height="200">
  </a>
  
</div>
<br>

<div class="gallery">
  <a target="_blank" href="img/S14.jpg">
    <img src="img/S14.jpg" alt="14" width="300" height="200">
  </a>
  
</div>
</div>
		
	`;
	$('#app').html(html);


});
}
