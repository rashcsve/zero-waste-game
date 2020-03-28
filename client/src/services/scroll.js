export function scrollToBottom(el) {
  setTimeout(function() {
    const scrollContainer = document.getElementById(el);
    console.log(scrollContainer.scrollTop);
    const isScrolledToBottom =
      scrollContainer.scrollHeight - scrollContainer.clientHeight <=
      scrollContainer.scrollTop + 1;
    if (!isScrolledToBottom) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, 10);
}
