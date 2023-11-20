function ShowInfo() {
  const showInfoButton = document.getElementById("show-info-button");
  const infoDialog = document.getElementById("info-dialog");
  const closeInfoButton = document.getElementById("close-info-button");

  showInfoButton.addEventListener("click", () => {
    infoDialog.showModal();
  });

  closeInfoButton.addEventListener("click", () => {
    infoDialog.close();
  });
}

export { ShowInfo };
