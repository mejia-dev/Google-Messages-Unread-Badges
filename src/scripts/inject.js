function addBadges() {
  const unreadCount = document.querySelectorAll(".unread");
  const pageTitle = "Google Messages for web";

  function checkForUnreadMessages() {
    if (unreadCount != null) {
      const totalUnread = unreadCount.length / 2;
      navigator.setAppBadge(totalUnread)
      if (totalUnread > 0) document.title = "(" + (unreadCount.length / 2).toString().concat(") " + pageTitle);
      else document.title = pageTitle;
    }
  }

  checkForUnreadMessages();
}

window.setInterval(function () {
  addBadges();
}, 500);