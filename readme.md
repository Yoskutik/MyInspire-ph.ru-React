# MyInspire-ph.ru

This is a repository of one very good photographer's [website](https://myinspire-ph.ru).
  
Hello, wanderer. I don't know why you are here. Maybe looking for an interesting repository,
maybe trying to learn something, or maybe you want to become a new developer of this website.

I used this stack of technologies:
  - _Vanilla JavaScript_. There're no frameworks except _React.js_ because there's no need. 
  The more frameworks you use, the bigger bundles file you will get.
  - _React.js_. Yes it is. I don't know why. Just wanted to do it with _React.js_. Also, I 
  didn't use _React Native_ or _React Redux_. Only _React.js_.
  - _Webpack_. The thing that compile you JavaScript modules into bundles.
  - _Eslint_. Every code should be structured. _Eslint_ can interact with IDE and show errors
  during programming. It can show problems using CLI. And also I'd wrote a __pre-commit__ Git
  Hook to automatically run eslint test.
  - _Vanilla PHP_. There isn't much PHP. Only for e-mail sending.
  - _SCSS_. All styles written with SCSS.
  - _Schema.org_. This is for microdata. In theory websites with microdata are better indexed
   in search engines.
  - _LD-JSON_. Another type of microdata. Can replace _Schema.org_. But I used both of them.
  Just in case. 
  - _Open Graph_. A layout displayed in social networks. 

---

NodeJS Packet Manager commands:
  - `npm run start`: Starts dev-server.
  - `npm run dev`: Builds the site in development mode.
  - `npm run build`: Builds the site in production mode. I ran on hosting server.
  - `npm run build-home`: Builds the site in production mode. I ran it to look how compiled
  files look like.
  - `npm run test`: Checks whether scripts meet the eslint criteria.
  
---

Also I'd created a Git pre-commit Hook:
  - All script must be valid for _Eslint_.
  - JPEG photos must have their WEBP copy. If you sure some photos shouldn't have WEBP you
  can add it to the _allow list_ using this hook.

If you want to use my Git Hooks, just type
```
git config --local core.hooksPath .githooks/
```

---

Used SEO optimization tricks:
 - Page loading speed must be as fast as it can. So, I used:
   - Minification of `bundle.js`, `index.html` and `style.css` files.
   - WEBP format for photos. In a good way, you need to use this format everywhere, because it 
   compresses photos better than regular JPEG. But, for example, _react-image-gallery_ which is
   used in Portfolio doesn't work with it. But anyway, there shouldn't be any `.PNG` or `.GIF` 
   files. They're too heavy.
   - The size of rendered images should not be greater than size of screen.
   - Using React's lazy load.
   - Getting rid of optional frameworks. If you need only `document.querySelector` alias, __do 
   not__ import _jQuery_.
   - Also `font-display: fallback` helps just a little bit.
 - Formed a semantic core.
 - Created optimization for mobile and desktop devices.
 - Switched from HTTP to HTTPS (this was on hosting website).
 - Switched from HTTP/1.1 to HTTP/2 (this was on hosting website).
 - Added `.htaccess`:
   - Got rid of main page duplicates (like `myinspire-ph.ru////` or `myinspire-ph.ru/index.html`).
   - Added expiration time for files. This for browser hashing.
 - Added `robots.txt`.
 - Added `sitemap.xml`. 
 - Added links to social media accounts.
 - Added Open Graph for appearance in social media.

