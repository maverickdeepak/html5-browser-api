import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
<h1>JavaScript HTML5 APIs</h1>
<div class='uploader'>
   <!--div id='item-0' class='dragme' draggable='true'></div --> 
   <h2>Upload your files 💤</h2>
   <div class='dropzone'>📂 Drag to upload!</div> 
</div>

<style>
.uploader { 
    box-sizing: border-box;
    max-width: 90%;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    margin: 25px auto;
    padding: 25px;
    background: #fff;
}
.dragme {
    background: #ce1f99;
    border-radius: 5px;
    width: 50px;
    height: 50px; 
}
.dropzone {
    border-radius: 5px;
    margin-top: 25px;
    padding: 25px;
    border: 2px dashed #ccc;
    background: #ededed
}
.active {
    background: #ebfff6;
    border-color: #24b373
}
</style>
`;

const init = () => {
  const dropzone = document.querySelector(".dropzone");
  //   const dragme = document.querySelector(".dragme");

  //   dragme.addEventListener("dragstart", (e) => {
  //     e.dataTransfer.setData("text/plain", e.target.id);
  //   });

  dropzone.addEventListener("dragenter", (e) => {
    e.target.classList.add("active");
  });
  dropzone.addEventListener("dragleave", (e) => {
    e.target.classList.remove("active");
  });
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("active");
    const { files } = e.dataTransfer;
    console.log(files);
  });

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
  });
};

if ("draggable" in document.createElement("div")) {
  init();
}
