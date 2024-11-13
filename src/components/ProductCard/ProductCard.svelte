<script>
  export let product = {
    name: '',
    price: '',
    colors: '',
    image: '',
    used: true,
    soldOut: false
  };
</script>

<div class="relative w-full border  border-gray-200  shadow-md overflow-hidden bg-white">
  {#if product.soldOut}
    <div class="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
      Sold Out
    </div>
  {/if}
  <img src={product.image} alt={product.name} class="w-full h-60 object-cover" />

  <div class="p-4">
<div class="flex justify-between">
    <h3 class="text-lg font-semibold">{product.name}</h3>
    {#if product.used}
      <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded ml-2">USED</span>
    {/if}
</div>
    <p class="text-[#00A2ED] font-bold text-lg mt-2">৳ {product.price}</p>
    <p class="text-sm mt-1">Available Colors: <strong>{product.colors}</strong></p>

    <div class="flex space-x-2 mt-4">
      <button class="flex-1 bg-[#00A2ED] text-white py-3 px-4 rounded-full font-medium hover:bg-[#00A2ED]">
        Buy Now
      </button>
      <button class="flex-1 bg-gray-100 text-gray-500 py-3 px-4 rounded-full font-medium cursor-not-allowed" disabled>
        Add to Cart
      </button>
    </div>
  </div>
</div>
