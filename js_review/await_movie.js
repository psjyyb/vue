let listUrl='https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240603';
let infoUrl='http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=';
//콜백지옥
// fetch(listUrl)
// .then(resolve =>resolve.json())
// .then(result=> {
//     let movieCd = result.boxOfficeResult.dailyBoxOfficeList[0].movieCd
//     fetch(infoUrl+movieCd)
//     .then(resolve=>resolve.json())
//     .then(result=>console.log(result.movieInfoResult.movieInfo.directors[0].peopleNm))
// });
async function movieInfo(){
   let res = await fetch(listUrl)
                  .then(res=>res.json())
    let movieCd = res.boxOfficeResult.dailyBoxOfficeList[0].movieCd
   res = await fetch(infoUrl+movieCd)
               .then(res=>res.json())

console.log(res.movieInfoResult.movieInfo.actors[0].peopleNm)
}
movieInfo();