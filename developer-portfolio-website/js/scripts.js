// hamburger menu functionality
document.getElementById('hamburger-menu').addEventListener('click', function () {
    const dropdownMenu = document.getElementById("hamburger-dropdown");

    if(dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden');
    }
    else{
        dropdownMenu.classList.add('hidden');
    }
})


// content block button functionality
document.getElementById('content-block-btn').addEventListener('click', function(){
    const contentBlock = document.getElementById('content-block');
    const contentBlockButton = document.getElementById('content-block-btn');

    if(contentBlock.classList.contains('hidden')){
        contentBlock.classList.remove('hidden');
        contentBlockButton.innerText = 'LESS ABOUT ME';
    }
    else{
        contentBlock.classList.add('hidden');
        contentBlockButton.innerText = 'MORE ABOUT ME';
    }
})


//ecom live demo modal
document.getElementById('ecom-live-demo-modal').addEventListener('click', function(){
    my_modal_2.showModal();
})

//promotional landing page live demo modal
document.getElementById('promotional-live-demo-modal').addEventListener('click', function(){
    my_modal_2.showModal();
})