$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    //arrows: false,    
    speed: 1500,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '285px',
    responsive: [
        {
          breakpoint: 1500,
          settings: {
             centerPadding: '120px',
          }
        },        
        {
            breakpoint: 1200,
            settings: {
               centerPadding: '170px',
               arrows: true,                
            }
        },        
        {
            breakpoint: 992,
            settings: {
               centerPadding: '130px',
               arrows: true,                
            }
        },       
        {
            breakpoint: 768,
            settings: {
               centerPadding: '70px',
               arrows: false,                
            }
        },      
        {
            breakpoint: 576,
            settings: {
               centerPadding: '0px',
               arrows: false,  
               dots: false,              
            }
        },   
    ]
});