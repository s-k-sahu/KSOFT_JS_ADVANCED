// set cookie
// document.cookie = 'name=ashok sahu'

// document.cookie = `${encodeURIComponent('name')}=${encodeURIComponent('ashok sahu')}`

class Cookie {
  static get(name) {
    const cookieName = `${encodeURIComponent(name)}=`;
    const cookie = document.cookie;
    let value = null;
    const startIndex = cookie.indexOf(cookieName);
    if (startIndex > -1) {
      let endIndex = cookie.indexOf(";", startIndex);
      if (endIndex === -1) {
        endIndex = cookie.length;
      }
      value = decodeURIComponent(
        cookie.substring(startIndex + name.length, endIndex)
      );
    }
    return value;
  }

  static set(name, value, expires, path, domain, secure) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toGMTString()}`;
    }

    if (path) cookieText += `; path=${path}`;
    if (domain) cookieText += `; domain=${domain}`;
    if (secure) cookieText += `; secure`;

    document.cookie = cookieText;
  }

  static remove(name, path, domain, secure) {
    Cookie.set(name, "", new Date(0), path, domain, secure);
  }
}


Cookie.set('cookie-1','cookie-1-value',new Date('May 29 2023 16:01:38'),'/','',true)
// console.log(Cookie.get('cookie-1'))
// Cookie.remove('cookie-1','/','',true)