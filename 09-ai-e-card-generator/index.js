import { HfInference } from "https://esm.sh/@huggingface/inference";

const dialogModal = document.getElementById("dialog-modal");
const imageContainer = document.getElementById("image-container");

/** show dialog on load **/
dialogModal.show();

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal
 *    should be hidden.
 * 2. Use the inputted text to generate an image
 *    for the e-card using an AI model.
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 *
 * 🎁 hint.md for help!
 **/

const hf = new HfInference(process.env.HF_KEY);
const input = document.querySelector("#user-input");
const submitBtn = document.querySelector(".btn-send");

const getInputValue = async (e) => {
  e.preventDefault();
  dialogModal.close();

  if (input.value !== "") {
    const result = await hf.textToImage({
      inputs: input.value,
      model: "stabilityai/stable-diffusion-2",
      parameters: {
        negative_prompt: "blurry",
      },
    });

    const img = document.createElement("img");

    const imageURL = URL.createObjectURL(result);
    img.src = imageURL;
    document.getElementById("placeholder").style.display = "none";
    imageContainer.append(img);
  } else {
    alert("Please input a valid description!");
    dialogModal.show();
    return;
  }
};

submitBtn.addEventListener("click", getInputValue);
