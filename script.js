var myElement

myElement = document.querySelector( '.myDiv' );
// Create panorama
const panorama = new PANOLENS.ImagePanorama("https://images.unsplash.com/photo-1557971370-e7298ee473fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3520&q=80");

// Create viewer
const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#panolens-container"),
});
//viewer.OrbitControls.noZoom = true;
viewer.addViewIndicator()
viewer.setCameraFov(100)
//viewer.enableControl()


// Add panorama to viewer
viewer.add(panorama);


// Create infospot
const infospot = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info,false);
infospot.material.opacity = 0.5 ;
infospot.position.set(1500, -300, -800);
infospot.addHoverElement(myElement, 170);

viewer.getControl()

// Add infospot to panorama
panorama.add(infospot);

