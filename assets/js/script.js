const workExp = 
{
    "workExpEntries": 
    [
        {
            "absa": "Various roles between 2010 - 2013 and 2015 - 2019. Between 2015 - 2019, I worked as Business Development Manager with a focus on Software and Investment solutions for clients. I was able to liase with a wide variety of stakeholders and be part of several software projects from inception to completion. In my previous roles at Absa between 2010-2013, a large portion of my day included looking at business processes, finding optimizations,as well as creating and automating legacy reporting in VBA."
        },
        {
            "kanhym": "Initially I only oversaw the financial operations for the assigned division. Quickly, I found myself assessing business processes and automating various reports in VBA. This also allowed me to do some data visualization for monthly presentations"
        },
        {
            "babyrules":"I took over this business with single, static webpage from 2000-and-late. Seeing the potential, I took over the business. The webpage was transformed into an e-commerce website. Figuring out CSS/html was crutial, along with UI/UX design for an appealing interface and user experience. Quickly, I found myself wanting more control and functionality and ended up doing loads of scripting on the side. "
        }
    ] 
}


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

const showProjectsBtn = document.getElementById('tog');
const projects = document.querySelectorAll('.section-projects');
console.log(projects);
 showProjectsBtn.addEventListener('click', ()=>
 {
    projects.forEach((project) =>
    {
        project.classList.toggle('show');
    })

 })


