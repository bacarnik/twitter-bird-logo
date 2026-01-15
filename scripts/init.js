document.addEventListener('DOMContentLoaded', function() {
  // Canvas topic bird
  const topicCanvas = document.getElementById('topic-canvas-1');
  if (topicCanvas) drawTwitterBird(topicCanvas);
  
  // Category navigation
  setupCategoryNav();
});