# lc-body-scroll-locker
Lock or unlock your body scroll.

## Why I make another wheel?
I have already try a lot of way to lock body scroll. Includes belows:

1. Set document and body height 100%.
2. Prevent scroll and touch event.
...

But none of these works for me.<br>
Finally, I find a best way to achieve and I implement in this package.<br>
If you want to know the detail, see below Theory section.

## Install
Use NPM or Yarn:

```Bash
npm install lc-body-scroll-locker --save
```
```Bash
yarn add lc-body-scroll-locker
```

## Usage
Support TypeScript.
```TypeScript
import bodyScrollLocker from 'lc-body-scroll-locker';
// lock body scroll
bodyScrollLocker.lock();
// unlock body scroll
bodyScrollLocker.unlock();
// see current lock status
console.log(bodyScrollLocker.isLocked);
```

## Compatible
IE9+

## Theory
The theory in this package is quite simple.<br/>
Lock:<br/>
1. Remember the scroll top position.
2. Set body position fixed and transform: translate3d(0, -top.px, 0)).

Unlock:<br/>
1. Clean body position and transform value.
2. Set scroll top position.

## Issue
1. Document.body should not have margin. Use padding instead as possible.

## Test
1. Run below command to start test server:

```
yarn serve
```

2. Open http://localhost:8000/test/index.html

3. Manual test: Scroll page and click page will toggle lock status. <br>
    See console panel.
## Author
JamesYin, https://www.lazycoffee.com

## License

MIT