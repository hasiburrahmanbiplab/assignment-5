//  Active or Inactive Menu
const menuItems = document.getElementsByClassName('menu-item');
for(const item of menuItems){
    item.addEventListener('click', function(event){
        const menu = event.target.getAttribute('item');
        const menuContent = document.getElementsByClassName(`${menu}-menu-content`)[0];
        menuContent.classList.remove('hidden');

        showMainMenuContent(menu);

        for(const child of event.target.parentNode.children){
            child.classList.remove('bg-[#B4F461]');
        }
        item.classList.add('bg-[#B4F461]');
    });
}

//  Show or Hide Menu Content
function showMainMenuContent(item){
    menuContents = document.getElementById('main-menu-content').children;
    for(const menuContent of menuContents){
        const menu = item+"-menu-content";
        if(menu == menuContent.getAttribute('menu')){
            menuContent.classList.remove('hidden');
        }
        else{
            menuContent.classList.add('hidden');
        }
    }
}






