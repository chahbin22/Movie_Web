const ham=document.getElementById("ham");
const dham=document.getElementsByClassName("hamb");
const navi=document.getElementById("navi");
navi.style.display="none";
for(let i=0;i<3;i++){
	dham[i].style.top= 5+ i*10 +"px";
}
let isClicked = false;
let isOutNav=true;
let isOutHam=true;
let hideTimer=null;
ham.addEventListener("click",function (){
	if(!isClicked){
	navi.style.display="inline-block";
	isClicked=true;
}
else {
	isClicked=false;
}
;});
ham.addEventListener("mouseover",function (){
	navi.style.display="inline-block";
	isOutNav=false;
	clearTimeout(hideTimer);
});
ham.addEventListener("mouseout",function(){
	if(isClicked) return;
	isOutHam=true;
	startHideTimer();
});
navi.addEventListener("mouseover",function(){
	isOutNav=false;
});
navi.addEventListener("mouseout",function(){
	if(isClicked) return;
	isOutNav=true;
	startHideTimer();
});
function startHideTimer(){
	clearTimeout(hideTimer);
	hideTimer=setTimeout(function(){
		if(isOutHam && isOutNav) navi.style.display="none";
	},100);
}
let map;
function initKakaoMap() {
      kakao.maps.load(function () {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 5
        };
        map = new kakao.maps.Map(container, options);
		if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const userPos = new kakao.maps.LatLng(lat, lon);

        // 내 위치 마커
        new kakao.maps.Marker({
          map: map,
          position: userPos,
          title: "내 위치"
        });

        map.setCenter(userPos); // 내 위치로 지도 중심 이동

        // 주변 영화관 검색
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch('영화관', function (data, status) {
          if (status === kakao.maps.services.Status.OK) {
            for (let i = 0; i < data.length; i++) {
              const place = data[i];
              const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                title: place.place_name
              });

              // 클릭 시 웹사이트로 이동
              kakao.maps.event.addListener(marker, 'click', function () {
                if (place.place_url) {
                  window.open(place.place_url, '_blank');
                }
              });
            }
          }
        }, {
          location: userPos,
          radius: 6000 // 반경 6km 내 검색
        });

      })}
	  })}
kakao.maps.load(initKakaoMap);
  

const quoteImages = [
    "영화명대사/레옹.png",
    "영화명대사/미녀와 야수.png",
    "영화명대사/바닐라스카이.png",
    "영화명대사/비포 선라이즈.png",
	"영화명대사/사랑도 통역이 되나요.png",
	"영화명대사/파이트클럽.png"
  ];


  let currentIndex = 0;
  const quoteImg = document.getElementById('quoteImg');

  function changeQuoteImg() {
    currentIndex = (currentIndex + 1) % quoteImages.length;
    quoteImg.style.opacity = 0;

    setTimeout(() => {
      quoteImg.src = quoteImages[currentIndex];
      quoteImg.style.opacity = 1;
    }); 
  }

  setInterval(changeQuoteImg, 5000); 

  const movie_map=document.querySelector('#map');
  const movie_m=document.querySelector('#moviemap');
  const listItems=document.querySelectorAll('#navi li');
  const quoto=document.querySelector('#quoto');
  const reserve=document.querySelector('#reserve');
  const boxoffice=document.querySelector('#boxoffice');
  const present=document.querySelector('#present');
  const upcoming=document.querySelector('#upcoming');
  const recommand=document.querySelector('#recommand');
  const news=document.querySelector('#news');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.dataset.action === 'showMap') {
      const isHidden = movie_map.classList.contains('hidden');

      if (isHidden) {
        movie_m.classList.remove('hidden');
        movie_map.classList.remove('hidden');
        setTimeout(() => {
          map.relayout();
        }, 100);
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.add('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.add('hidden');
        news.classList.add('hidden');

        
      } else {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        reserve.classList.remove('hidden');
      }
    }
    else if (item.dataset.action === 'showQuoto') {
      const isHidden = quoto.classList.contains('hidden');

      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.remove('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.add('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.add('hidden');
        news.classList.add('hidden');

      } else {
        quoto.classList.add('hidden');
        reserve.classList.remove('hidden');
      }
    }
    else if(item.dataset.action === "showBoxoffice"){
      const isHidden = boxoffice.classList.contains('hidden');
      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.remove('hidden');
        present.classList.add('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.add('hidden');
        news.classList.add('hidden');

      } else {
        boxoffice.classList.add('hidden');
        reserve.classList.remove('hidden');
      }

    }
    else if(item.dataset.action === "showPresent"){
      const isHidden = present.classList.contains('hidden');
      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.remove('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.add('hidden');
        news.classList.add('hidden');
      } else {
        present.classList.add('hidden');
        reserve.classList.remove('hidden');
      }

    }
    else if(item.dataset.action === "showUpcoming"){
      const isHidden = upcoming.classList.contains('hidden');
      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.add('hidden');
        upcoming.classList.remove('hidden');
        recommand.classList.add('hidden');
        news.classList.add('hidden');

      } else {
        upcoming.classList.add('hidden');
        reserve.classList.remove('hidden');
      }

    }
    else if(item.dataset.action === "showRecommand"){
      const isHidden = recommand.classList.contains('hidden');
      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.add('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.remove('hidden');
        news.classList.add('hidden');

      } else {
        recommand.classList.add('hidden');
        reserve.classList.remove('hidden');
      }

    }
    else if(item.dataset.action === "showNews"){
      const isHidden = news.classList.contains('hidden');
      if (isHidden) {
        movie_m.classList.add('hidden');
        movie_map.classList.add('hidden');
        quoto.classList.add('hidden');
        reserve.classList.add('hidden');
        boxoffice.classList.add('hidden');
        present.classList.add('hidden');
        upcoming.classList.add('hidden');
        recommand.classList.add('hidden');
        news.classList.remove('hidden');

      } else {
        news.classList.add('hidden');
        reserve.classList.remove('hidden');
      }

    }
  });
});


