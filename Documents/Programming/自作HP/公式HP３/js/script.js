"use strict"

{

  //ハンバーガーメニュー
  const burgerBtn = document.querySelector('.burger-btn');
  const headerNav = document.querySelector('.header-nav');
  const navItems = document.querySelectorAll('.nav-item')

  function show(){
    burgerBtn.addEventListener('click',()=>{
     headerNav.classList.toggle('hidden');
     burgerBtn.classList.toggle('fixed');
    });
    navItems.forEach(clickedNav =>{
      clickedNav.addEventListener('click',()=>{
        headerNav.classList.add('hidden');
    });
    });

  }
  show();

  //reveal
  const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:1000,
    reset:true
});

  sr.reveal('.fv-img',{origin:'right'});
  sr.reveal('.main-copy',{});

  
  
  //WORK タブ
  const menuItems = document.querySelectorAll('.experience-tab li a');
  const contents = document.querySelectorAll('.tab-content');

  menuItems.forEach(clickedItem =>{
    clickedItem.addEventListener('click', e =>{
      e.preventDefault();

      //一旦選択を全部外す
      //メニューリスト
      menuItems.forEach(item =>{
        item.classList.remove('active');
      });

      //選択したやつにactiveつける
      clickedItem.classList.add('active');

      //コンテンツ
      contents.forEach(content =>{
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

}