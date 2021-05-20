function lockedProfile() {
    
    let profileDivs = document.querySelectorAll(`.profile`);
    
    for (let profile of profileDivs) {
        let btn = profile.querySelector(`button`);
        btn.addEventListener(`click`, onClick);
    }

    function onClick(ev){

        let respectiveDiv = ev.target.parentNode;
         let hiddenInfo = respectiveDiv.querySelector('div')
         let lockedButton =respectiveDiv.querySelector('input[value="lock"]').checked
         let unlockedButton = respectiveDiv.querySelector('input[value="unlock"]').checked
         let btn = respectiveDiv.querySelector(`button`);
         
         if(unlockedButton){
             hiddenInfo.style.display === 'block' ? hiddenInfo.style.display = 'none' : hiddenInfo.style.display = 'block'
             if(hiddenInfo.style.display == 'block'){
                 btn.textContent = 'Hide it'
             }
             if(hiddenInfo.style.display == `none`){
                 btn.textContent = 'Show more'
             }
            
         }
         
    }
}

