// Reference to the container div where you want to append the dynamic divs
var videoContainer = document.getElementById("video-container");

// Loop through the video URLs and create a div for each video
for (var i = 0; i < videoUrls.length; i++) {
  // Create a div for the video container
  var videoDiv = document.createElement("div");
  videoDiv.classList.add("mockup-phone", "border-teal-400", "border-2", "mb-5");

  // Create the camera and display divs
  var cameraDiv = document.createElement("div");
  cameraDiv.classList.add("camera");

  var displayDiv = document.createElement("div");
  displayDiv.classList.add("display");

  // Create the artboard div with a dynamic ID
  var artboardDiv = document.createElement("div");
  var frameId = "frame" + (i + 1);
  artboardDiv.classList.add(
    "artboard",
    "artboard-demo",
    "phone-1",
    "animate-pulse",
    "rounded"
  );
  artboardDiv.id = frameId + "-remove";

  // Create the SVG element
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("absolute", "animate-spin", "h-10", "w-10");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");

  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("opacity", "0.2");
  path1.setAttribute("fill-rule", "evenodd");
  path1.setAttribute("clip-rule", "evenodd");
  path1.setAttribute(
    "d",
    "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  );
  path1.setAttribute("fill", "currentColor");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
  );
  path2.setAttribute("fill", "currentColor");

  var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
  );
  path3.setAttribute("fill", "currentColor");

  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);

  // Create the iframe element
  var iframe = document.createElement("iframe");
  iframe.classList.add("rounded-[25px]", "overflow-hidden");
  iframe.sandbox =
    "allow-same-origin allow-scripts allow-presentation allow-pointer-lock";
  iframe.loading = "eager";
  iframe.height = "590";
  iframe.width = "330";

  // Set iframe source using the video URL
  iframe.src = videoUrls[i];

  // Append elements to the container hierarchy
  artboardDiv.appendChild(svg);
  artboardDiv.appendChild(iframe);
  displayDiv.appendChild(artboardDiv);
  videoDiv.appendChild(cameraDiv);
  videoDiv.appendChild(displayDiv);

  // Append the video container to the document
  videoContainer.appendChild(videoDiv);
}
