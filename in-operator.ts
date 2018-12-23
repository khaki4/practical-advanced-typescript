interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

const routeToAdminPage = (role) => console.log('routeToAdminPage');
const routeToHomePage = (email) => console.log('routeToHomePage');

//////////////////////////////////////////////////////////

/*
 *
 */
function redirect(usr: Admin | User) {
  // usr의 타입 Admin | User 이기 때문에
  // 생각대로 작동하지 않는다.
  if ((<Admin>usr).role !== undefined) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}

//////////////////////////////////////////////////////////

function redirect1(usr: Admin | User) {
  if (isAdmin(usr)) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}

function isAdmin(usr: Admin | User): usr is Admin {
  return (<Admin>usr).role !== undefined;
}

/*
 * 위와 같은 형식의 타입 가드를 하기위해선 isAdmin 같은 함수가 많이 필요하다는 단점이 있
 */

//////////////////////////////////////////////////////////

function redirect2(usr: Admin | User) {
  if ('role' in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}