/**
 * HTML Template to show the error message in the card format
 */
const templates = {
  errorCard(message) {
    return (`
    <div class="error-card">
      <span class="error-card__icon">⚠️</span>
      <div class="error-card__text">
        <h3>Something went wrong!</h3>
        <p>${message}</p>
      </div>
    </div>
  `);
  }
}