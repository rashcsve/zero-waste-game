export function scrollToBottom(el) {
  setTimeout(function() {
    // wait before scrolling
    var scrollingChat = document.getElementById(el);
    scrollingChat.scrollTop = scrollingChat.scrollHeight;
  }, 10);
}
