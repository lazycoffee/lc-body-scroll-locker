import bodyScrollLocker from '../index.js';
document.addEventListener('click', () => {
    console.log('is locked: ' + bodyScrollLocker.isLocked);
    if (bodyScrollLocker.isLocked) {
        bodyScrollLocker.unlock();
    } else {
        bodyScrollLocker.lock();
    }
});

document.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
});
