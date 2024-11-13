<script>
	import Categories from "../components/Categories/Categories.svelte";
	import ProductCard from "../components/ProductCard/ProductCard.svelte";

	

    
    const products = [
    {
      name: 'R15 V3 ABS (INDIAN) 2800KM',
      price: '468,000',
      colors: 'BLACK',
      image: 'bike1.png',
      used: true,
      soldOut: false
    },
    {
      name: 'ADV ABS (INDO) 4500KM',
      price: '460,000',
      colors: 'RED',
      image: 'bike2.png',
      used: true,
      soldOut: false
    },
    {
      name: 'SF FI ABS (INDIAN) 1950KM',
      price: '327,000',
      colors: 'MATT/BLACK',
      image: 'bike3.png',
      used: true,
      soldOut: true
    },
    {
      name: 'GSXR CBU ABS (INDO) 10100KM',
      price: '348,000',
      colors: 'BLACK',
      image: 'bike4.png',
      used: true,
      soldOut: true
    }
  ];

  const categories = [
    { title: 'New Bikes', icon: 'mdi:motorbike' },
    { title: 'Used Bikes', icon: 'mdi:bike' },
    { title: 'Bike Accessories', icon: 'mdi:helmet' },
    { title: 'Repair Shops', icon: 'mdi:tools' }
  ];


   
</script>


<div class="mx-[7%]">
    <div class=" flex justify-center   w-full">
        <img src="slider1.jpg" class="h-[450px] w-full" alt="Placeholder"/>
    </div>
    
    <h1 class="text-4xl my-8 font-bold">Used-bike</h1>
    
    
    
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
        {#each products as product}
          <ProductCard {product} />
        {/each}

      </div>
      <div class="flex justify-center my-12">
        <button class="text-center items-center justify-center border border-blue-300  hover:bg-gray-50 text-gray-800 font-semibold py-4 px-4 rounded-full">View More Bike</button>
      </div>

      <Categories {categories} />
    
</div>



