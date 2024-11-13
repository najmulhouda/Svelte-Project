<script>
    import Icon from '@iconify/svelte';
    import { page } from '$app/stores';
  </script>
  
  <nav class="bg-white pt-4 shadow-md">
    <!-- Top Navbar -->
    <div class="flex items-center justify-between  mx-[7%]">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
        <a href="/" class="flex items-center gap-2">
        <!-- Bike Logo Icon -->
        <Icon icon="mdi:bicycle" class="w-12 h-12 text-[#00A2ED]" />
        <!-- Name "Enfield" -->
        <span class="text-3xl font-bold  text-[#00A2ED]">Sawari</span>
        </a>
        
      </div>
  
      <!-- Search Bar -->
      <div class="flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search Bike Here..."
          class="flex-grow p-2 border rounded-l-full focus:outline-none"
        />
        <button class="p-[11px] bg-[#00A2ED] text-white rounded-r-full">
          <Icon icon="mdi:magnify" class="w-5 h-5" />
        </button>
      </div>
  
      <!-- Support & Login Section -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 rounded-full ">
          <div class="rounded-full border border-gray-400 p-2">
            <Icon icon="mdi:phone" class="w-5 h-5  text-[#00A2ED]" />
          </div>
          
          <div>
            <p class="text-sm font-semibold">Support & Order</p>
            <p class="text-sm text-gray-600">01330460307</p>
          </div>
        </div>
        <button class="flex items-center gap-2 px-4 py-2 bg-[#00A2ED] text-white rounded-full">
          <Icon icon="mdi:account" class="w-5 h-5" />
          <span>Login</span>
        </button>
      </div>
    </div>
  
    <!-- Bottom Navbar Links -->
    <div class="flex justify-center mt-6 py-6 border-t  border-gray-200">
      <ul class="flex gap-8 text-md uppercase font-semibold text-gray-500">
        <li><a href="/" class:text-blue-500={$page.url.pathname === '/'} class="hover:text-[#00A2ED]">Home</a></li>
        <li><a href="/bikes" class:text-blue-500={$page.url.pathname === '/bikes'} class="hover:text-[#00A2ED]">Our Collection</a></li>
        <li><a href="/bikes/scooty" class:text-blue-500={$page.url.pathname === 'bikes/scooty'} class="hover:text-[#00A2ED]">Scooter Bangladesh</a></li>
        <li><a href="/bikes/upcoming-bike-stock" class:text-blue-500={$page.url.pathname === '/bikes/upcoming-bike-stock'} class="hover:text-[#00A2ED]">Upcoming</a></li>
        <li><a href="/used-bike/sell/select-brand" class:text-blue-500={$page.url.pathname === '/used-bike'} class="hover:text-[#00A2ED]">Sell Now</a></li>
        <li><a href="/pre-order" class:text-blue-500={$page.url.pathname === '/pre-order'} class="hover:text-blue-500">Pre Order</a></li>
        <li><a href="/accessories" class:text-blue-500={$page.url.pathname === '/accessories'} class="hover:text-[#00A2ED]">Accessories</a></li>
        <li><a href="/servicing" class:text-blue-500={$page.url.pathname === '/servicing'} class="hover:text-[#00A2ED]">Servicing</a></li>
        <li><a href="/blogs" class:text-blue-500={$page.url.pathname === '/blogs'} class="hover:text-[#00A2ED]">Blog</a></li>
      </ul>
    </div>
  </nav>
  