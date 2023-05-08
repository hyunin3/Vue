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
배열이나 리스트로 넣어도 문자열로 저장됨

######
JSON.stringify

JSON객체의 메서드, 자바스크립트 객체를 JSON형식의 문자열로 변환하여 반환. localStorage에는 문자열만 저장되기 때문에 함
const stringifyNumbers = JSON.stringify(numbers)

JSON.parse

JSON 형식의 문자열을 자바스크립트 객체로 변환하여 반환. 객체 object타입으로 나옴
const parsedAge = JSON.parse(age)
number, object

######
plugins
Vuex store에 추가적인 기능, 일반적으로 어플리케이션 기능 최적화 목적

vuex-persistedstate
store상태를 브라우제 local storage에 저장해주는 플러그인. 페이지 새로고침하거나 브라우저 종료했다가 다시 열어도 이전 상태 유지할 수 있게 해줌

######
Vuex Binding Helper
스토어의 state, mutations, actions 등을 간단하게 사용할 수 있도록 만들어진 헬퍼함수
import { mapState, mapActions } from 'vuex'

mapState
스토어의 상태를 컴포넌트의 데이터에 매핑. 객체 혹은 배열 형태로 매핑 가능
mapState({message: state => state.message})
mapState(['message'])

mapActions
컴포넌트에서 this.$store.dispatch()를 호출하는 대신 액션 메서드를 직접 호출하여 사용 가능
객체 혹은 배열 형태로 매핑 가능
@keyup.enter="changeMessage(inputData)" 
mapActions(['changeMessage'])
mapActions({
  actionsChangeMessage: 'changeMessage'
})

mapGetters
같은 방식으로 사용 가능

######
Modules
vuex store를 여러 파일로 나눠서 관리할 수 있게 함. 가독성 향상

