/* 기본 display: none; 클릭했을 때 show-menu 클래스 추가해서 display: block으로 바꿔주기 */
function openBurgerMenu() {
  let smallMenu = document.querySelector(".small-menu");
  console.log(smallMenu);
  smallMenu.classList.toggle("show-menu");
}
