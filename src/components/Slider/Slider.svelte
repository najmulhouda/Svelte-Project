<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/swiper-bundle.min.css';
  
    // Swiper configuration options
    let swiperOptions = {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      navigation: true,
    };
  
    // Slide images (replace with your actual images)
    const slides = [
      { image: '/path/to/slider1.jpg', title: 'Slide 1' },
      { image: '/path/to/slider2.jpg', title: 'Slide 2' },
      { image: '/path/to/slider3.jpg', title: 'Slide 3' }
    ];
  </script>
  
  <Swiper {...swiperOptions} class="mySwiper">
    {#each slides as slide}
      <SwiperSlide>
        <div class="slide-content">
          <img src={slide.image} alt={slide.title} class="slide-image" />
          <div class="slide-overlay">
            <h2>{slide.title}</h2>
            <!-- Add more content like descriptions here -->
          </div>
        </div>
      </SwiperSlide>
    {/each}
    <!-- Optional: Swiper pagination and navigation buttons -->
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
  </Swiper>
  
  <style>
    .mySwiper {
      width: 100%;
      height: 100%;
    }
    
    .slide-content {
      position: relative;
      text-align: center;
    }
  
    .slide-image {
      width: 100%;
      height: auto;
    }
  
    .slide-overlay {
      position: absolute;
      bottom: 10%;
      left: 0;
      right: 0;
      color: white;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    }
  
    .swiper-pagination-bullet {
      background: #fff;
    }
  
    .swiper-button-next, .swiper-button-prev {
      color: #fff;
    }
  </style>
  