

function _toggleThis( $arr, $className){
    $($arr).addClass($className).siblings().removeClass($className);
}

function _renderSubMenu( attrFor ){
    $('[name='+ attrFor +']').css("display", "flex").siblings().css("display", "none");
}

// --------------

// Menu
$('nav .mainMenu > li').on('click', function(){
    _toggleThis( this, 'active');
    _renderSubMenu( $(this).attr('for') )
})

// Sub Menu
$('nav .navItem-sub > ul>li').on('click', function(){
    _toggleThis( this, 'active');
})



