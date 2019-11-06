import bodyScrollLocker from '../index.js';
document.addEventListener('click', function () {
    console.log('is locked: ' + bodyScrollLocker.isLocked);
    if (bodyScrollLocker.isLocked) {
        bodyScrollLocker.unlock();
    }
    else {
        bodyScrollLocker.lock();
    }
});
document.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
});
