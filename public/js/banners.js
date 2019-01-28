
var loaded = 0;
var bundles_tr = [
  {},
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=22&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=22&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=23&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=23&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=24&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=24&sub1=',
  }
];
var bundles_gm = [
  {},
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=25&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=25&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=26&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=26&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=27&sub2=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=27&sub1=',
  }
];
var banners = [
  {
    bundle: 'tr',
    number: 1,
    banner: 'tr01.jpeg'
  },
  {
    bundle: 'tr',
    number: 1,
    banner: 'tr02.gif'
  },
  {
    bundle: 'tr',
    number: 2,
    banner: 'tr02.gif'
  },
  {
    bundle: 'tr',
    number: 3,
    banner: 'tr03.gif'
  },
  {
    bundle: 'tr',
    number: 1,
    banner: 'tr03.gif'
  },
  {
    bundle: 'tr',
    number: 2,
    banner: 'tr03.gif'
  },
  {
    bundle: 'tr',
    number: 3,
    banner: 'tr03.gif'
  },
  {
    bundle: 'tr',
    number: 1,
    banner: 'tr04.gif'
  },
  {
    bundle: 'tr',
    number: 2,
    banner: 'tr04.gif'
  },
  {
    bundle: 'tr',
    number: 3,
    banner: 'tr04.gif'
  },
  {
    bundle: 'gm',
    number: 1,
    banner: 'gm01.gif'
  },
  {
    bundle: 'gm',
    number: 2,
    banner: 'gm02.gif'
  },
  {
    bundle: 'gm',
    number: 3,
    banner: 'gm03.gif'
  },
];
function getRandomBundle() {
  var random = getRandomInt(0, banners.length);
  var banner = banners[random];
  var bundle;
  if (banner != null && loaded != 1) {
    if (banner['bundle']=='tr') {
      bundle=bundles_tr[banner['number']];
    } else {
      bundle=bundles_gm[banner['number']];
    }
    document.getElementById("banner_img_link").href = bundle['link']+window.location.hostname;
    document.getElementById("pixel_link").src = bundle['pixel']+window.location.hostname;
    document.getElementById("banner_rotate").src = 'img/banners/'+banner['banner'];
    document.getElementById("banner_rotate").style="display: block;"
    loaded = 1;
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
