function addImage(imageNumber) {
    var imageContainerId = "imageContainer" + imageNumber;
    var imageContainer = document.getElementById(imageContainerId);

    // Create an image element
    var image = document.createElement("img");
    image.src = "path/to/your/image" + imageNumber + ".jpg";
    image.alt = "Image " + imageNumber;

    // Append the image to the container
    imageContainer.appendChild(image);
}
