import html from "html-literal";

export default () => html `<section id="main"><div id="search-bar">
<input type="search" class="event-search" placeholder="Search team, artist, location, or event" />
</div>
<div id="recs-container">
<div class="recommendations" id="popular-in-area">
<ul>
  <div class="recommendations-category" id="popular-in-area-text">
    <li class="recommendations-text"><h3>Popular Events In Your Area</h3></li>
  </div>
  <li><a class ="popArea1" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class="popArea2" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class="popArea3" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
</ul>
</div>
<div class="recommendations" id="popular-in-area">
<ul>
  <div class="recommendations-category" id="upcoming-near-user">
    <li class="recommendations-text"><h3>Upcoming Events Near You</h3></li>
  </div>
  <li><a class ="nearUser1" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class="nearUser2" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class="nearUser3" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
</ul>
</div>
<div class="recommendations" id="popular-for-user">
<ul>
  <div class="recommendations-category" id="popular-for-user-text">
    <li class="recommendations-text"><h3>Popular Events You Might Like</h3></li>
  </div>
  <li><a class="popUser1" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class ="popUser2" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a class ="popUser3" href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
</ul>
</div>
</div>
</section>`;
