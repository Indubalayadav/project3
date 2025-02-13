'strict mode';
let mainSectionArea = document.querySelector('.main-section-area');
// let selectedTab = 'main';


let  maincontent =  document.querySelector('.main');
let  recipecontent =  document.querySelector('.recipe');
let  homecontent =  document.querySelector('.home_section');
function renderSelectedSection(selectedTab){

    mainSectionArea.innerHTML = '';
    

    switch(selectedTab){ 
        case 'main':
            mainSectionArea.innerHTML = maincontent.outerHTML;
            break;
        case 'recipe':
            mainSectionArea.innerHTML = recipecontent.outerHTML;
            break;
        case 'home_section':
            mainSectionArea.innerHTML = homecontent.outerHTML;
            break;
        default:
            mainSectionArea.innerHTML = maincontent.outerHTML;
            break;
    }
}

// renderSelectedSection(selectedTab);

let viewButton = document.querySelector('.home-btn');
viewButton.onclick = function(){
    alert("Here's your recipe! Time to cook up something delicious!😊");
}

viewButton.onmouseover = function(){
    viewButton.style.backgroundColor = 'transparent';
    viewButton.style.border = '2px solid gray';
    viewButton.style.color = 'black';
}

viewButton.onmouseout = function(){
    viewButton.style.backgroundColor = 'gray';
    viewButton.style.border = 'none';
    viewButton.style.color = 'white';
}

