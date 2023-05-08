######
Local Storage
window.localStorage 브라우저의 내장 객체 중 하나
key-value 형태로 데이터를 저장할 수 있는 저장소. localStorage에 저장된 데이터는 브라우저를 종료해도 계속 유지되고 다른 탭에서도 동일한 데이터 공유됨. 다만 다른 
도메인에서는 접근할 수 없고 보안과 관련된 중요한 정보 저장엔 적합하지 않음

######
setItem(key, value) 형태로 데이터 저장
localStorage.setItem('name', 'SSAFY')
localStorage.setItem('age', '30')

getItem(key) key값으로 저장된 데이터 불러오기
const name = localStorage.getItem('name')

데이터 저장 시 문자열로 저장되고 불러올 때도 타입 문자열로 불려옴

######
JSON.stringify

JSON객체의 메서드, 자바스크립트 객체를 JSON형식의 문자열로 변환하여 반환