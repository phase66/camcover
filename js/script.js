// Wait for PhoneGap to connect with the device
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
function onDeviceReady() {
  console.log("Device Ready");
  $('#captureVideo').click(function(){
    captureVideo();
  });
}

// Called when capture operation is finished
function captureSuccess(mediaFiles) {
  navigator.notification.alert(mediaFiles);
}

// Called if something bad happens.
function captureError(error) {
  var msg = 'An error occurred during capture: ' + error.code;
  navigator.notification.alert(msg, null, 'Uh oh!');
}

function captureVideo() {
  console.log("Capture Video");
  // Launch device video recording application, 
  // allowing user to capture up to 2 video clips
  navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
}