// Function to download image
async function downloadImage(name, url, zip) {
  try {
    const response = await fetch(url);

    const blob = await response.blob();
    zip.file(name + ".png", blob);

    console.log(`Added to zip: ${name}`);
  } catch (error) {
    console.error(`Error downloading ${name}: ${error}`);
  }
}
const arrImageLink = [];
// Create a script element for JSZip
const jsZipScript = document.createElement("script");
jsZipScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js";
jsZipScript.onload = function () {
  // After JSZip is loaded, proceed with image downloads
  const zip = new JSZip();

  const items = document.querySelector(".items-list");
  const allItem = items.querySelectorAll(".item");

  allItem.forEach((item) => {
    const imgLink = item.querySelector("img").getAttribute("src");
    arrImageLink.push("https://palworld.gg" + imgLink);
  });

  // Download images and add to the zip file
  const downloadPromises = Array.from(arrImageLink).map(async (url) => {
    const name = url
      .substring(url.lastIndexOf("/") + 1)
      .replace(/\.[^/.]+$/, "");

    await downloadImage(name, url, zip);
  });

  // Wait for all download promises to resolve
  Promise.all(downloadPromises).then(() => {
    // Generate the zip file
    zip.generateAsync({ type: "blob" }).then((blob) => {
      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "images.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log("Zip file downloaded successfully.");
    });
  });
};

// Append the script element to the document head
document.head.appendChild(jsZipScript);
