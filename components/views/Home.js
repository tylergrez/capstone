import html from "html-literal";

export default () => html `<section id="main"><div id="search-bar">
<input type="text" placeholder="Search team, zip, event, venue or date" style="width: 500px; height: 25px;" />
</div>
<div class="recommendations" id="popular-in-area">
<ul>
  <div class="recommendations-category" id="popular-in-area-text">
    <li class="recommendations-text"><h3>Popular Events In Your Area</h3></li>
  </div>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
</ul>
</div>
<div class="recommendations" id="popular-for-user">
<ul>
  <div class="recommendations-category" id="popular-for-user-text">
    <li class="recommendations-text"><h3>Popular Events You Might Like</h3></li>
  </div>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
  <li><a href=""><img src="https://images.pexels.com/photos/1757433/pexels-photo-1757433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></li>
</ul>
</div></section>`;
