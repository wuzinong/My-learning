(function unsupportIE() {
  const matched = window.navigator.userAgent
    .toLocaleLowerCase()
    .match(/(trident)\/([\d.]+)/);
  if (matched) {
    document.write(
      '<div style="position: fixed; left: 50%; top: 20%; transform: translate(-50%, -50%); background-color: #fff2f0; line-height: 2; text-align: center; border: 1px solid #ffccc7; color: rgba(0, 0, 0, 0.65); width: 50%; margin: 100px auto; padding: 20px; font-family: Arial, sans-serif;"><h1 style="font-size: 18px; font-weight: 600;">{{projectName}}</h1><p>This site was not designed to work with Internet Explorer, please use Chrome or another browser.</p></div>'
    );
  }
})();
