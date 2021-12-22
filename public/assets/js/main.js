const _toggleMobileNav = () => document.getElementById("mobile-nav").classList.toggle("active");

const openPhotoSwipe = () => {
  const el = document.querySelectorAll(".pswp")[0];

  const photos = [
    {
      src: "./assets/images/full/threeFull.jpg",
      w: 1365,
      h: 2048,
    },
    {
      src: "./assets/images/full/four.jpg",
      w: 3360,
      h: 1812,
    },
    {
      src: "./assets/images/full/five.png",
      w: 856,
      h: 480,
    },
    {
      src: "./assets/images/full/six.png",
      w: 857,
      h: 480,
    },
    {
      src: "./assets/images/full/seven.png",
      w: 1905,
      h: 1064,
    },
    {
      src: "./assets/images/full/eight.png",
      w: 1912,
      h: 1065,
    },
    {
      src: "./assets/images/full/nine.png",
      w: 856,
      h: 480,
    },
    {
      src: "./assets/images/full/ten.png",
      w: 1907,
      h: 1066,
    },
  ];

  const opts = {
    history: true,
    focus: true,
    showAnimationDuration: 0,
    hideAnimationDuration: 0,
  };

  const gallery = new PhotoSwipe(el, PhotoSwipeUI_Default, photos, opts);

  gallery.init();
};

window.onload = () => {
  new LazyLoad({ elements_selector: "img[data-src]" });
};
