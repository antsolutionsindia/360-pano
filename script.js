var myElement,myElement2,container,bar

myElement = document.querySelector( '.myDiv' );
myElement2 = document.querySelector( '.myDiv2' );
bar = document.querySelector( '#bar' );

//Add custom function for progress upate
function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

// Create panorama1
const panorama1 = new PANOLENS.ImagePanorama("https://images.unsplash.com/photo-1557971370-e7298ee473fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3520&q=80");
panorama1.addEventListener( 'progress', onProgressUpdate );

//Create Pano2
const panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );
panorama2.addEventListener( 'progress', onProgressUpdate );


//Create Pano3
const panorama3 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/road.jpg' );
panorama3.addEventListener( 'progress', onProgressUpdate );

container = document.querySelector( '#panolens-container' );

// Create viewer
const viewer = new PANOLENS.Viewer({ container: container });
//viewer.OrbitControls.noZoom = true;
viewer.addViewIndicator()
viewer.setCameraFov(100)




//Add second and third pano
viewer.add( panorama1, panorama2, panorama3 );

// Create infospot
const infospot = new PANOLENS.Infospot(150, PANOLENS.DataImage.Arrow,false);
infospot.material.opacity = 0.5 ;
infospot.position.set(1450, -200, -800);
infospot.addHoverElement(myElement, 170);


// Create infospot2
const infospot2 = new PANOLENS.Infospot(100, PANOLENS.DataImage.info,false);
infospot2.material.opacity = 0.5 ;
infospot2.position.set(500, 200, -800);
infospot2.addHoverElement(myElement2, 170);

//Add Home button
var controlItemPoster = {
  style: {
    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/25/25694.png)',
    float: 'left'
  },
  
  onTap: function(){
    infospot.focus();
  }
};
viewer.appendControlItem(controlItemPoster);


// Add infospot to panorama
panorama1.add( infospot, infospot2 );

// Add panorama to viewer
viewer.add(panorama1);


// Maunal Set Panorama
var button1 = document.querySelector( '#btn1' );
var button2 = document.querySelector( '#btn2' );
var button3 = document.querySelector( '#btn3' );


// Enter panorama when load completes
function onButtonClick( targetPanorama ) {
  bar.classList.remove( 'hide' );
  viewer.setPanorama( targetPanorama );
}

button1.addEventListener( 'click', onButtonClick.bind( this, panorama1 ) );

button2.addEventListener( 'click', onButtonClick.bind( this, panorama2 ) );

button3.addEventListener( 'click', onButtonClick.bind( this, panorama3 ) );
button3.addEventListener( 'click', onButtonClick.bind( this, panorama3 ) );