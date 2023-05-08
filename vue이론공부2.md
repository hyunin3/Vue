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


######
UX(user experience)
유저가 느끼는 느낌, 태도, 행동을 디자인

UI(user interface)
유저에게 보여지는 화면을 디자인

######
Routing
네트워크에서 경로를 선택하는 프로세스. 유저가 접근한 URL에 대해 적절한 결과 응답

Routing in SSR 
server가 모든 라우팅 통제. URL로 요청이 들어오면 응답으로 완성된 HTML제공. 결정권을 서버가 가짐

Routing in SPA/CSR
서버는 하나의 HTML만을 제공. 이후 모든 동작은 하나의 HTML 문서 위에서 JS코드를 활용. 하나의 URL만 가질 수 있음

동작에 따라 URL이 반드시 바뀌어야 하는 것은 아니지만 유저의 사용성 관점에서는 필요함
Routing이 없다면 새로고침 시 첫 페이지로 돌아가고, 링크 공유 시 첫 페이지만 공유 가능하고, 브라우저 뒤로 가기는 사용불가

######
Vue Router 
SPA를 MPA처럼 URL을 이동하면서 사용가능, SPA의 단점인 URL이 변경되지 않는다는 점을 해결

