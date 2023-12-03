function previewProfilePic(event) {
    const profilePicDisplay = document.getElementById("profilePicDisplay");
    profilePicDisplay.src = URL.createObjectURL(event.target.files[0]);
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    const file = photoInput.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const dataURL = reader.result;
        localStorage.setItem("uploadedPhoto", dataURL);
        localStorage.setItem("formData", JSON.stringify(formValues));
        window.location.href = "Home.html";
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});
const formData = JSON.parse(localStorage.getItem("formData"));
if (formData) {
    document.getElementById("name").textContent = formData.name || "";
    document.getElementById("dob").textContent = formData.dob || "";
    document.getElementById("Gender").textContent = formData.gender || "";
    document.getElementById("languages").textContent = formData.languages || "";
    document.getElementById("mobile").textContent = formData.mobile || "";
    document.getElementById("email").textContent = formData.email || "";
    document.getElementById("photoInput").textContent = formData.photoInput || "";
}
