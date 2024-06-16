  let imageThumbnail = localStorage.getItem("thumbnail")
  let width = localStorage.getItem("width")
  let height = localStorage.getItem("height")
  let borderTopLeftRadius = localStorage.getItem("topLeftRadius")
  let borderBottomRightRadius = localStorage.getItem("bottomRightRadius")
  let borderBottomLeftRadius = localStorage.getItem("bottomLeftRadius")
  let borderTopRightRadius = localStorage.getItem("topRightRadius")
  let previewImage = {
   imageThumbnail:imageThumbnail,
   width:width,
   height:height,
   borderTopLeftRadius:borderTopLeftRadius,
   borderBottomRightRadius:borderBottomRightRadius,
   borderBottomLeftRadius:borderBottomLeftRadius,
   borderTopRightRadius:borderTopRightRadius
  }
  function getPreviewImage(previewImage){
    document.querySelector("#previewImage").innerHTML = `
      <img src=${previewImage.imageThumbnail} alt=""/>
      <button type="button" class="btn btn-danger m-2" onclick="deleteLocalStorageAndElement()">Delete</button>
    `
    document.querySelector("#previewImage > img").style.width = previewImage.width
    document.querySelector("#previewImage > img").style.height = previewImage.height
    document.querySelector("#previewImage > img").style.borderTopLeftRadius = previewImage.borderTopLeftRadius
    document.querySelector("#previewImage > img").style.borderBottomRightRadius = previewImage.borderBottomRightRadius
    document.querySelector("#previewImage > img").style.borderBottomLeftRadius = previewImage.borderBottomLeftRadius
    document.querySelector("#previewImage > img").style.borderTopRightRadius = previewImage.borderTopRightRadius
  }

  getPreviewImage(previewImage)

  function deleteLocalStorageAndElement(){
    document.querySelector("#previewImage > img").remove()
    document.querySelector(".wrapper").remove()
    document.querySelector("body").innerHTML = `<h1 class="text-center text-success">Element deleted successfully</h1>`
  }