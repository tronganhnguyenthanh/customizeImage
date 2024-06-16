document.querySelector(".btn.btn-primary").addEventListener("click", function(){
  let imgThumbnail = document.querySelector("#thumbnail").value
  let widthValue = document.querySelector("#width").value
  let heightValue = document.querySelector("#height").value
  let borderTopLeftValueRadius = document.querySelector("#topLeft").value
  let borderBottomRightValueRadius = document.querySelector("#bottomRight").value
  let borderTopRightValueRadius = document.querySelector("#topRight").value
  let borderBottomLeftValueRadius = document.querySelector("#bottomLeft").value
  localStorage.setItem("thumbnail", imgThumbnail),
  localStorage.setItem("width", widthValue),
  localStorage.setItem("height", heightValue),
  localStorage.setItem("topLeftRadius", borderTopLeftValueRadius),
  localStorage.setItem("bottomRightRadius", borderBottomRightValueRadius),
  localStorage.setItem("bottomLeftRadius", borderBottomLeftValueRadius),
  localStorage.setItem("topRightRadius", borderTopRightValueRadius)
  if(imgThumbnail === "" || widthValue === "" || heightValue === "" || borderBottomLeftValueRadius === "" || borderBottomRightValueRadius === "" || borderTopRightValueRadius === "" || borderTopRightValueRadius === ""){
   document.querySelector("#error").innerHTML = `<p class="text-center text-danger">Please enter all fields</p>`
  }
  if(imgThumbnail !== "" || widthValue !== "" || heightValue !== "" || borderBottomLeftValueRadius !== "" || borderBottomRightValueRadius !== "" || borderTopRightValueRadius !== "" || borderTopRightValueRadius !== ""){
   document.querySelector("#error > p").innerHTML = ""
   redirectPage()
  }
})

function redirectPage(){
  window.location.href = "previewCustomizeImage.html"
}