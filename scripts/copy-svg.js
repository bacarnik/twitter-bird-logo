const svgContainer = document.getElementById("svg-container");
const svgElement = document.getElementById("twitter-svg");

svgContainer.addEventListener("click", () => {
    // dobimo SVG kodo kot string
    const svgCode = svgElement.outerHTML;

    // kopiramo v clipboard
    navigator.clipboard.writeText(svgCode)
        .then(() => {
            alert("SVG code copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy SVG: ", err);
        });
});