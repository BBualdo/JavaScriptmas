import { HfInference } from "@huggingface/inference";
const hf = new HfInference();
import { blobToBase64 } from "/utils";

const dialogModal = document.getElementById("dialog-modal");
dialogModal.show();

document.addEventListener("submit", function (e) {
  e.preventDefault();
  const imageDescription = document.getElementById("user-input").value;
  dialogModal.close();
  generateImage(imageDescription);
});

async function generateImage(imageToGenerate) {
  const response = await hf.textToImage({
    inputs: imageToGenerate,
    model: "stabilityai/stable-diffusion-2",
  });
  const imageUrl = await blobToBase64(response);
  generateAltText(imageUrl);
}

async function generateAltText(imageUrl) {
  try {
    const imageData = await (await fetch(imageUrl)).blob();
    const response = await hf.imageToText({
      data: imageData,
      model: "Salesforce/blip-image-captioning-base",
    });
    const altText = response.generated_text;
    renderImage(imageUrl, altText);
  } catch (error) {
    console.error("Error generating alt text:", error);
  }
}

function renderImage(imageUrl, altText) {
  console.log(altText);
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}
