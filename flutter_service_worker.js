'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9b5fb70e2363362f61c6a9255a5e3527",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b693925eb895ded475a1768c808c992",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42abae1c050fe231e0c881c918e6930f",
".git/logs/refs/heads/main": "43a1ac65f5c822c47d32109e49211ef6",
".git/logs/refs/remotes/origin/main": "d4a73bd98264bf67094df3520d4a5852",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/06/749a824dba38cd8fe85bd341f7ca351a7de133": "99ef4b551497a76fc460346731070c0b",
".git/objects/10/52428db188da14d97df551a55089bc6cf2d7c5": "74446dbcfc0b00a4108b443b1e46351f",
".git/objects/10/c4019297cbfe9c62599b8d6b5e8da016a577c6": "77f3132ceffb7f6426fe0f679762c9c3",
".git/objects/1d/7d2b1a3caab3b7fe5113baa193ad43984fee02": "488ef3280ce86b99e6eae67a9f5e4722",
".git/objects/22/f52d6d91a1605d072c5719c299498bdf56fed8": "85b5e1717ef066f81e8522e2569dde49",
".git/objects/32/c99a21d7d772127f9ce1d3ff16791979c6a593": "034f9d126fd5bf9717a982bd5e698853",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/98651b0bb0d03177f970fcbb07e9f15f965a4b": "96195e4d24812a1ede1d303029e792be",
".git/objects/3a/5ed9285ccedc5944f7b6e8f914a4b9373e3c31": "1177e8c744766d266e3ff662850dbc1a",
".git/objects/41/0f2cc4c9dd112a1acf328b3e145afd856a87e0": "6fe98f2e8a8b392ca6dcf41da6a39891",
".git/objects/42/ffc2462965e5caef3f791aec54c55859db6545": "193adc25c1bd79f920c2cad64d37c96b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/0c128a8aabd4c16394d7c22279b17e99ffe651": "eec8eb24927ea6af5b029a21b182af7f",
".git/objects/52/91c10541244c9166a2fb7c56d59fa5cb7cbd65": "88fa9423a67724c77db14f6d7cec6415",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5c/fd8dcfafe40c8b7ceaaf0c9bfb59139d3f5cd4": "724eedf40f1ce9822151d6f9e0cc3cea",
".git/objects/61/afda9e1381e0ce2dcf5941a691160ac0ceb6fe": "1c3d8b477cc35f8452089ddd596b34c0",
".git/objects/67/ee73484ea56c97ad1a77ff3bd5e38dd7bd10d8": "2cb5d83223947bee9da68f3b0fad5421",
".git/objects/69/fe6bf45cbbce1c921b9572fa2c512d4610384e": "ffb897146863911d37365c58a363b3db",
".git/objects/70/9be1c3e1adb4b2c7aed8df241b3dc8f0bda282": "a52d6ed7065f28ac5c3a0d1c80c073b4",
".git/objects/71/d039b477adc1e9c8ced42964b216168bb3064d": "93344ef3cb9a62761a8d430a70b09e74",
".git/objects/76/e1127de334720fb401478dfe63abde20f966f9": "3d00d3204b304d13c3711eaa975528d0",
".git/objects/78/0bdb3c5e7f487e10866f2abe97fb37d8f12961": "67740681dda70309cfcda0fde0628389",
".git/objects/7e/b2b7fb8df000527d45d26399090effef83ab71": "ceaaf5ec857833d8e34d5fa352d03a16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c041169fbc66a950b04376e17dfa0c78f8e002": "a87ff22cd1eb694852047e97e973de31",
".git/objects/91/290b82bb70721fe563032986b450f11792fd0d": "edfe8320f3683002ae4398f75dae2ab9",
".git/objects/91/7e28cff28e6f9e043436c1ebb795343b9289f4": "a3211df47de93369d2c78a6dadd620bb",
".git/objects/9c/7dfa5300ae051b2e955c0f7d7a20c234b11961": "d5be034cac4c548dc6919ce6441a8355",
".git/objects/a8/54ea3837e532ff28a4d5428bea79e2351f0a7f": "62155410ec5b905e87d2f70dfb90ccdc",
".git/objects/aa/5cc73bec85ce910a60c8c0afab7ff6d1d7ed0b": "d0348c6ed34155a4a18fb26b7a182ea4",
".git/objects/ad/116bb318df5fe95b74ffe3767113ccf475911c": "3e9011a21c56bc1a685cac559c0925e5",
".git/objects/af/a7f94815645343235c8976ee0942fbf7f259ca": "98ce1b2e0dcb939d87f7a66f961f88e2",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/f31e183e7cdd362977bc178f836845b9c47172": "82c0b6df4a21d5ed900ab685f77f251b",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/ca/3868b4eb40006b0106f175ae6d6518c1b2dfb0": "77679e58bbf5b3091a61b43ce88f0f59",
".git/objects/cf/0656fa22d0649031a6552ab1b10ae38ce08d5c": "edb16a74c6662ee5e52f597de8e9391e",
".git/objects/cf/d2bba68eef6dafa6d1e535f665360e714d2913": "62d1e470bdf8f72fcd62f228d14be1d6",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/541f461592419cdd9a3281d228d1d5c706f53f": "2f3fe423267868af636f06ab9210fd99",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/da842d3cee929fdd39f476540a46b6f7baa83e": "ec248cc876e60833ac3f765cf4245b45",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/cc7201fdd38f477d36b45158eee55f4e1d0d98": "44c08f4af4cb48591a815c7a15c7d676",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/d57cdd1fa64307edd3de2e85120feb07bf3bbc": "01cf37ab16e20a45d96d0627cd0e4b84",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/279be7232165e68cd71d1f03004faa8e7ef6d0": "031a1f5b8cb4848a650f467989854621",
".git/objects/fb/7e28329e167ab83a7f4a15a1c66cf25b9269d1": "8789c54489732b337b939c15c90340c9",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "9e4462b3a1c5bdcbad2ae329fed30759",
".git/refs/remotes/origin/main": "9e4462b3a1c5bdcbad2ae329fed30759",
"assets/AssetManifest.bin": "bf97c68d9954164f3aabf6718baee22c",
"assets/AssetManifest.json": "f36ee9a68370f0e9c27f61bea87125e7",
"assets/assets/images/logo-color.png": "15cef2effa1b220f0df7098c76ef2f68",
"assets/assets/images/logo1.png": "f6e32b3ce4dbeb1e5a4457c68f7dd024",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9a8ff03bffbdbe709018015738da07e3",
"assets/NOTICES": "f7a21e0d967e4b97eea5d38c2263470e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "0d46007587fcb8f8e070f98403d6d97f",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "4e6526445c60761b2a60e3214e4e1313",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "085c05c4e3a3bfd43017b63dfd760631",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42e0e3a95c8cef9ee7b51310e92e572e",
"/": "42e0e3a95c8cef9ee7b51310e92e572e",
"main.dart.js": "1654e0894ab7198cf158a4d69e2bb90f",
"manifest.json": "d11b59c7b4d1b18815ca5486de0be885",
"README.md": "a6bad985ccd94d4307d25e0b0ea6a28b",
"version.json": "83368888e4e3100dfac321a66551343f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
