
// window.addEventListener("load", function()
// {
//     const icon = document.querySelector('.icon');
//     const topDiv = document.querySelector('.top');
//     const bottomDiv = document.querySelector('.bottom');
//     const iconLine = document.querySelectorAll('.line');
//     const landingPage = document.querySelector('.landing');
//     const homePage = document.querySelector('.home-container');

//     homePage.classList.remove('show');
//     iconLine[0].classList.add('one');
//     iconLine[1].classList.add('two');
//     topDiv.classList.add('show');
//     bottomDiv.classList.add('show');    
//     setTimeout(function() 
//         { 
//             hideIcone(icon, homePage) 
//         }, 3000);
// });

// function hideIcone(icon, homePage)
// {
//     icon.classList.add('hide');
//     setTimeout(function() 
//     { 
//         icon.parentElement.remove();
//         homePage.classList.add('show');
//     }, 1500);
// }





// btn.addEventListener('click', () =>
// {
//     icon.classList.toggle('hide');
//     // icon.parentNode.classList.toggle('hide')
// });

// btn2.addEventListener('click', () =>
// {
//     topDiv.classList.toggle('show');
//     bottomDiv.classList.toggle('show');
// });

const workList = document.querySelector('#work_experience_list').querySelectorAll('li');
console.log(workList);
let prevClick = workList[0];
prevClick.classList.add('active');
 workList.forEach( listItem =>
 {
    listItem.addEventListener('click', () =>
    {
        if(listItem !== prevClick)
        {
            listItem.classList.add('active');
            prevClick.classList.remove('active');
            prevClick = listItem;
        }
        // else
        // {
        //     listItem.classList.add('active')
        //     prevClick = listItem;
        // }
        
    })
 })

