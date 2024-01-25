function addImage(buttonNumber) {
    // Create an image element
    var image = document.createElement("img");

    // Set the source of the image (you can replace 'image1.jpg', 'image2.jpg', etc. with your actual image URLs)
    image.src = 'image' + buttonNumber + '.jpg';

    // Append the image to the corresponding buttonContainer div
    document.getElementById('buttonContainer' + buttonNumber).appendChild(image);
}
