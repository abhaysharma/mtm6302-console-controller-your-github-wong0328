function setTitle(title){
    const $title = document.getElementById('title')
    $title.textContent = title
}

function setDescription(paragraph){
    const $paragraph = document.getElementById('paragraph')
    $paragraph.textContent = paragraph
}

function setBackgroundColor(background){
    document.querySelector('body').style.backgroundColor = background;
}

function setFontColor(color){
    const $font = document.querySelector('body');
    $font.style.color = color;

}


function setTheme(theme){
    const $body = document.querySelector('body');
    if(theme == 'dark'){
        $body.classList.remove('light') 
        $body.classList.add('dark') 
    } else if (theme == 'light'){
        $body.classList.remove('dark')
        $body.classList.add('light')
    }
}
