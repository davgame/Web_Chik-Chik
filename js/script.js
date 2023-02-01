const addPreload=(elem)=>{ //функция
    elem.classList.add('preload')
};

const removePreload=(elem)=>{
    elem.classList.remove('preload')
};


const startSlider=()=>{
    const sliderItems=document.querySelectorAll('.slider__item');
    const sliderList=document.querySelector('.slider__list');
    const btnPrevSlide=document.querySelector('.slider__arrow_left');
    const btnNextSlide=document.querySelector('.slider__arrow_right');
    let activeSlide=1;
    let position=0;

    const chekSlider=()=>{
        if((activeSlide+2===sliderItems.length&&
            document.documentElement.offsetWidth>560)|| //адаптив экрана
            activeSlide===sliderItems.length){
            btnNextSlide.style.display='none';
        }else{
            btnNextSlide.style.display='';
        }

        if(activeSlide===1){
            btnPrevSlide.style.display='none';
        }else{
            btnPrevSlide.style.display='';
        }
        
    };

    chekSlider();

    

    const nextSlide=()=>{
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        
        position=-sliderItems[0].clientWidth*activeSlide;
        activeSlide+=1;
        sliderList.style.transform=`translateX(${position}px)`;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
        chekSlider();

    };  

    const prevSlide=()=>{
        sliderItems[activeSlide]?.classList.remove('slider__item_active')
        
        position=-sliderItems[0].clientWidth*(activeSlide-2);
        activeSlide-=1;
        sliderList.style.transform=`translateX(${position}px)`;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
        chekSlider();
    };
    //вызов функции
    btnPrevSlide.addEventListener('click',prevSlide);
    btnNextSlide.addEventListener('click',nextSlide);

    window.addEventListener('resize',()=>{

        if(activeSlide+2>sliderItems.length &&
            document.documentElement.offsetLeft>560){
                activeSlide=sliderItems.length-2;
                sliderItems[activeSlide]?.classList.add('slider__item_active');
            }
        position=-sliderItems[0].clientWidth*(activeSlide-1);
        sliderList.style.transform=`translateX(${position}px)`;
        chekSlider();
    });

};

const initSlider=()=>{
    const slider = document.querySelector('.slider');
    const sliderContainer=document.querySelector('.slider__container');
    
    sliderContainer.style.display='none';
    addPreload(slider);
    
    window.addEventListener('load',()=>{
        sliderContainer.style.display='';
        removePreload(slider);
        startSlider(); 
    });
};

window.addEventListener('DOMContentLoaded',initSlider)
