const workExp = JSON.parse(JSON.stringify(
   { "workExpEntries":
    [
        {
            "absa": `Various roles between 2010 - 2013 and 2015 - 2019. Between 2015 - 2019, I worked as Business Development Manager with a focus on Software and Investment solutions for clients. 
            <br><br>
            I was able to liase with a wide variety of stakeholders and be part of several software projects from inception to completion. <br><br>In my previous roles at Absa between 2010-2013, a large portion of my day included looking at business processes, finding optimizations,as well as creating and automating legacy reporting in <span>VBA <span>.`
        },
        {
            "kanhym": "Initially I only oversaw the financial operations for the assigned division. <br><br>Quickly, I found myself assessing business processes and automating various reports in <span> VBA </span>. This also allowed me to do some  <span>data visualization  </span>for monthly presentations"
        },
        {
            "babyrules":"I took over this business with single, static webpage from 2000-and-late. Seeing the potential, I took over the business. <br><br>The webpage was transformed into an e-commerce website. Figuring out  <span>CSS/html </span> was crutial, along with UI/UX design for an appealing interface and user experience. <br><br>Quickly, I found myself wanting more control and functionality and ended up doing loads of scripting on the side. "
        }
    ] 
}));

const workList = document.querySelector('#work_experience_list').querySelectorAll('li');
// console.log(workList);
let prevClick = workList[0];
let workExpData = workExp;
document.querySelector('.text-area').innerHTML = workExp.workExpEntries[0].absa;

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


prevClick.classList.add('active');
 workList.forEach( listItem =>
 {
    
    listItem.addEventListener('click', () =>
    {
        if(listItem !== prevClick)
        {
            document.querySelector('.text-area').textContent = '';
            listItem.classList.add('active');
            prevClick.classList.remove('active');
            let text = listItem.innerText;

            if(text === 'Absa Investments')
            {
                document.querySelector('.text-area').innerHTML += workExp.workExpEntries[0].absa;
            }
            else if (text === 'Kanhym Estates')
            {
                console.log('kanhym', workExp.absa);
                document.querySelector('.text-area').innerHTML += workExp.workExpEntries[1].kanhym;
                
            }
            else
            {
                document.querySelector('.text-area').innerHTML += workExp.workExpEntries[2].babyrules;
            }
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


//  function addHtmlContent(){
//     console.log('scrolling');
//     window.addEventListener('scroll', this.loadMore);
//   }
  
//   function removeHtmContent(){
//       window.removeEventListener('scroll', this.loadMore);
//   }
  
//   function loadMore(){
//     console.log(window.innerHeight, document.scrollingElement.scrollHeight);
//       if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
//           // Do load more content here!
//       }
//   }

//   window.addEventListener('scroll', this.loadMore);
//   window.removeEventListener('scroll', this.loadMore);
const sections =  document.querySelectorAll('section');
console.log(sections);

window.addEventListener('scroll', displaySections);


  function displaySections()
  {
      console.log(window.innerHeight);
  
      const currentHeight = document.documentElement.scrollTop;
      console.log('currentHeight',currentHeight);
      sections.forEach((section) => 
      {
        console.log('section ffrom TYop',section.offsetTop);
        if(section.offsetTop < currentHeight + 900)
        {
          console.log('adding show');
          section.classList.add('show');
        }

        // else
        // {
        //   section.classList.remove('show');
        // }
      });
    //   {
    //     //   const sectionTop = section.getBoundingClientRect().top;

    //     //   console.log(sectionTop);

    //   };
  
    
  }