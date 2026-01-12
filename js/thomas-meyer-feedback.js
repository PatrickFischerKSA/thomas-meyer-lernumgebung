function tmFeedback(textarea, feedbackId) {
  const text = textarea.value.toLowerCase();
  const keywords = textarea.dataset.keywords.split(",");
  const feedbackBox = document.getElementById(feedbackId);

  if (text.length < 30) {
    feedbackBox.textContent = "";
    return;
  }

  let Treffer = keywords.some(k => text.includes(k));

  if (Treffer) {
    feedbackBox.textContent =
      "Deine Antwort greift einen zentralen Gedanken von Meyer auf. Überlege nun: Wo begegnet dir diese Form von Sprache konkret im Alltag?";
  } else {
    feedbackBox.textContent =
      "Weiterdenken: Meyer betont besonders Sprache, Zuschreibungen und gesellschaftliche Normalität. Prüfe, ob du diese Aspekte stärker einbeziehen kannst.";
  }
}
