const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream
// pass to video element
// then play

async function selectMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaSteam
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    
    } catch(error) {
        //Catch error here
        console.log("error occured :(", error)

    }
}

button.addEventListener("click", async () => {
    //Button Disabled
    button.disabled = true;

    //Start Picture-in-Picture
    await videoElement.requestPictureInPicture();

    //Reset Button
    button.disabled = false;

})

//onLoad
selectMediaStream();