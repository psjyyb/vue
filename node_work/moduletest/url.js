const myUrl = new URL('http://example.org:8080/foo?search=dho#bar');
console.log(myUrl.search);
console.log(myUrl.searchParams.get("search"));
console.log(myUrl.hash);
