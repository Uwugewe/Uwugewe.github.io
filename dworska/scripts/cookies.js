
class Cookies {
  constructor() {
    this.init();
  }

  init = () => {
    (function () {
      const COOKIE_NAME = "cookie_notice";

      function hasCookie() {
        return document.cookie.split("; ").some((c) => c.startsWith(COOKIE_NAME));
      }

      function accept() {
        const d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        document.cookie =
          COOKIE_NAME +
          "=1; expires=" +
          d.toUTCString() +
          "; path=/; SameSite=Lax";
      }

      if (!hasCookie()) {
        document.getElementById("cookie-banner").style.display = "flex";
      }

      document.getElementById("cookie-ok").addEventListener("click", () => {
        accept();
        document.getElementById("cookie-banner").style.display = "none";
      });
    })();
  };
}

export default Cookies;