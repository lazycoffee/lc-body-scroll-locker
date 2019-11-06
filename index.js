var lib = {
    currentScrollTop: 0,
    isLocked: false,
    lock: function () {
        this.currentScrollTop = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.transform = "translate3d(0, -" + this.currentScrollTop + "px, 0)";
        // document.body.style.top = '-'+this.currentScrollTop+'px';
        this.isLocked = true;
    },
    unlock: function () {
        document.body.style.position = '';
        document.body.style.transform = '';
        // document.body.style.top = '';
        console.log('back to scroll top: ', this.currentScrollTop);
        window.scrollTo(0, this.currentScrollTop);
        this.isLocked = false;
    }
};
export default lib;
