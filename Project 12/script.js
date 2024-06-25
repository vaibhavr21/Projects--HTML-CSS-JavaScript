const testimonials = [ 
    {
        name: "Mayank Kumar",
        position: "Creator of VKM",
        image: "https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_640.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
      },
  
      {
        name: "Vayu Tech",
        position: "Tutorial Channel",
        image: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
      },

      {
        name:"Vaibhav Kumar",
        position: "Founder of VKM",
        image:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        testimonial:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
    },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;


function showTestimonial(){

    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
        <img src="${testimonial.image}" />
        <h3>${testimonial.name}</h3>
        <h6>${testimonial.position}</h6>
        <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction){

    currentIndex += direction;
    if(currentIndex < 0){
        currentIndex = testimonials.length -1;
    }else if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }

    showTestimonial();

}

prevButton.addEventListener("click",()=> changeTestimonial(-1));
nextButton.addEventListener("click",()=> changeTestimonial(1));

showTestimonial();