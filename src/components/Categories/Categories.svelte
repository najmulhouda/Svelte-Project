<script>
  

  export let categories = [
    { title: 'New Bikes', icon: 'mdi:motorbike' }, // Replace with Iconify icon names
    { title: 'Used Bikes', icon: 'mdi:bike' },
    { title: 'Bike Accessories', icon: 'mdi:helmet' },
    { title: 'Repair Shops', icon: 'mdi:tools' }
  ];
</script>

<div class="flex flex-wrap my-10 justify-between b">
  {#each categories as category}
    <div class="flex items-center justify-between p-4 w-64 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div class="flex items-center space-x-4">
        <div>
            <img src="bike3.png" alt="">
        </div>
        <span class="text-blue-600 font-semibold text-lg">{category.title}</span>
      </div>
      <div class="text-blue-600 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
        ➔
      </div>
    </div>
  {/each}
</div>

<style>
  /* Optional: additional custom styles */
</style>
