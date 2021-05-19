function attachEventsListeners() {
    let daysButton = document.querySelector('#daysBtn');
    let daysInput = document.querySelector('#days');
    daysButton.addEventListener('click', daysClick);
    
    let hoursButton = document.querySelector('#hoursBtn');
    let hourInput = document.querySelector('#hours');
    hoursButton.addEventListener('click', hoursClick);

    let minButton = document.querySelector('#minutesBtn');
    let minInput = document.querySelector('#minutes');
    minButton.addEventListener('click', minClick);

    let secButton = document.querySelector('#secondsBtn');
    let secInput = document.querySelector('#seconds');
    secButton.addEventListener('click', secClick);




    function daysClick(e){
        hourInput.value = daysInput.value * 24;
        minInput.value = daysInput.value * 1440;
        secInput.value = daysInput.value * 86400;
    }
    function hoursClick(e){
        daysInput.value = hourInput.value / 24;
        minInput.value = hourInput.value * 60;
        secInput.value = hourInput.value * 3600;
        
    }
    function minClick(e){
        daysInput.value = minInput.value / 1440;
        hourInput.value = minInput.value / 60;
        secInput.value = minInput.value * 60;
    }
    function secClick(e){
        daysInput.value = secInput.value / 86400;
        hourInput.value = secInput.value / 3600;
        minInput.value = secInput.value / 60;
    }
}
