import "./Map.css";


function Map(){
  return (
    <div id="map_container">
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27386.126549094883!2d75.86166422946827!3d30.90719324270814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a410b99833%3A0x297155b76e3ae202!2sSuntex%20Cable%20Industries!5e0!3m2!1sen!2sin!4v1652560940636!5m2!1sen!2sin" id="map" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}


export default Map;