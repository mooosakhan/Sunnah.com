// document.addEventListener('DOMContentLoaded', () => {
//   const menuButton = document.querySelector('.menu-button');
//   const dropdownMenu = document.querySelector('.dropdown-menu');

//   if (menuButton && dropdownMenu) {
//     // Show dropdown on click
//     menuButton.addEventListener('click', () => {
//       // Toggle 'hidden' class
//       dropdownMenu.classList.toggle('hidden');
      
//       // Update aria-expanded attribute
//       const expanded = menuButton.getAttribute('aria-expanded') === 'true';
//       menuButton.setAttribute('aria-expanded', !expanded);
      
//       // Optionally, close other dropdowns
//       document.querySelectorAll('.dropdown-menu').forEach(menu => {
//         if (menu !== dropdownMenu) {
//           menu.classList.add('hidden');
//         }
//       });
//     });

//     // Close dropdown when clicking outside of it
//     document.addEventListener('click', (event) => {
//       if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
//         dropdownMenu.classList.add('hidden');
//         menuButton.setAttribute('aria-expanded', 'false');
//       }
//     });
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const mobileMenuButton = document.querySelector('[aria-label="Top"] .lg:hidden');
//   const mobileMenu = document.querySelector('.mobile-menu'); // Assuming you have a mobile menu with this class

//   if (mobileMenuButton && mobileMenu) {
//     mobileMenuButton.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });
//   }
  
//   // JavaScript for flyout menus
//   const flyoutButtons = document.querySelectorAll('[aria-expanded="false"]');

//   flyoutButtons.forEach(button => {
//     button.addEventListener('mouseover', () => {
//       const flyoutMenu = button.nextElementSibling;
//       if (flyoutMenu) {
//         flyoutMenu.classList.add('opacity-100');
//         flyoutMenu.classList.remove('opacity-0');
//       }
//     });

//     button.addEventListener('mouseleave', () => {
//       const flyoutMenu = button.nextElementSibling;
//       if (flyoutMenu) {
//         flyoutMenu.classList.add('opacity-0');
//         flyoutMenu.classList.remove('opacity-100');
//       }
//     });
//   });
  
//   // JavaScript for search functionality
//   const searchButton = document.querySelector('[aria-label="Search"]');
//   const searchInput = document.querySelector('.search-input'); // Assuming you have an input field with this class

//   if (searchButton && searchInput) {
//     searchButton.addEventListener('click', () => {
//       searchInput.classList.toggle('hidden');
//     });
//   }
  
//   // JavaScript for cart functionality (if needed)
//   const cartButton = document.querySelector('.cart-button'); // Assuming you have a button with this class

//   if (cartButton) {
//     cartButton.addEventListener('click', () => {
//       // Implement cart functionality here
//       alert('Cart functionality is not implemented yet!');
//     });
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
//   const mobileMenu = document.querySelector('[data-mobile-menu]');

//   mobileMenuButton.addEventListener('click', function () {
//       const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
//       mobileMenuButton.setAttribute('aria-expanded', !expanded);
//       mobileMenu.classList.toggle('hidden');
//   });
// });



//   document.addEventListener('DOMContentLoaded', function () {
//     // Toggle Mobile Menu
//     const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
//     const mobileMenu = document.querySelector('[data-mobile-menu]');

//     if (mobileMenuButton && mobileMenu) {
//       mobileMenuButton.addEventListener('click', () => {
//         mobileMenu.classList.toggle('hidden');
//       });
//     }

//     // Toggle Flyout Menus
//     const flyoutButtons = document.querySelectorAll('[data-flyout-button]');
//     const flyoutMenus = document.querySelectorAll('[data-flyout-menu]');

//     flyoutButtons.forEach((button) => {
//       button.addEventListener('click', () => {
//         const targetMenu = document.querySelector(button.getAttribute('data-target'));
//         if (targetMenu) {
//           targetMenu.classList.toggle('hidden');
//         }
//       });
//     });

//     // Close flyout menus when clicking outside
//     document.addEventListener('click', (event) => {
//       if (!event.target.closest('[data-flyout-menu]') && !event.target.closest('[data-flyout-button]')) {
//         flyoutMenus.forEach((menu) => {
//           menu.classList.add('hidden');
//         });
//       }
//     });
//   });

document.getElementById('menz').addEventListener("click", () => {
  const bhaiElement = document.querySelector('.bhai');
  
  if (bhaiElement.style.display === "none") {
      bhaiElement.style.display = "block";
  } else {
      bhaiElement.style.display = "none";
  }
});




const Popular_products = [
    {
      id: 1,
      name: 'Faith T-Shirt',
      href: '#',
      imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_130361c7-b306-4774-8c39-41fc0b6f1eaf_493x.jpg?v=1717148215',
      imageAlt: "Guided By Faith Leading with Purpose.",
      price: '$20',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Tauheed',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_62fb6beb-cb27-426d-a467-eba792a986f3_600x.jpg?v=1719649943',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$15',
        color: 'black',
      },
      {
        id: 3,
        name: 'Palestine Solidarity',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/WhatsAppImage2024-02-26at22.40.56_493x.jpg?v=1708969424',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$10',
        color: 'red',
      },
      {
        id: 4,
        name: 'Make More Zikr',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_1a196fb8-67e0-400d-bc57-b687d9e585d6_493x.jpg?v=1719228975',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$10',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Sabr-o-Shukkar',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_cc3790db-76c0-4314-bcb7-2698a79989c9_493x.jpg?v=1719228270',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$15',
        color: 'black',
      },
      {
        id: 6,
        name: 'Tauheed',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_62fb6beb-cb27-426d-a467-eba792a986f3_600x.jpg?v=1719649943',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$15',
        color: 'black',
      },
      {
        id: 7,
        name: 'Faith T Shirt',
        href: '#',
        imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_130361c7-b306-4774-8c39-41fc0b6f1eaf_493x.jpg?v=1717148215',
        imageAlt: "Guided By Faith Leading with Purpose.",
        price: '$20',
        color: 'Black',
      },
      {
      id: 5,
      name: 'Sabr-o-Shukkar',
      href: '#',
      imageSrc: 'https://sunnahconscious.com/cdn/shop/files/black_cc3790db-76c0-4314-bcb7-2698a79989c9_493x.jpg?v=1719228270',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$15',
      color: 'black',
    },
    // More products...
  ]


function popularProducts(){
    let clutter = ""
    Popular_products.forEach(function(product){
     
    clutter += ` <div 
    data-modal-target="static-modal" data-modal-toggle="static-modal"
     class="block group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img src="${product.imageSrc}">
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${product.name}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">${product.color}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">${product.price}</p>
    </div>
  </div>
  <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0">
     
        <!-- Modal content -->
             
        <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>
      
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          
            <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button type="button" 
                data-modal-hide="static-modal" type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
      
                <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img src="${product.imageSrc}" alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center">
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>
      
                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">Product information</h3>
      
                      <p class="text-2xl text-gray-900">$192</p>
      
                      <!-- Reviews -->
                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="sr-only">3.9 out of 5 stars</p>
                          <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>
                      </div>
                    </section>
      
                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">Product options</h3>
      
                      <form>
                        <!-- Colors -->
                        <fieldset aria-label="Choose a color">
                          <legend class="text-sm font-medium text-gray-900">Color</legend>
      
                          <div class="mt-4 flex items-center space-x-3">
                            <!-- Active and Checked: "ring ring-offset-1" -->
                            <label aria-label="White" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                              <input type="radio" name="color-choice" value="White" class="sr-only">
                              <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                            </label>
                            <!-- Active and Checked: "ring ring-offset-1" -->
                            <label aria-label="Gray" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                              <input type="radio" name="color-choice" value="Gray" class="sr-only">
                              <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                            </label>
                         
                            <label aria-label="Black" class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                              <input type="radio" name="color-choice" value="Black" class="sr-only">
                              <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                            </label>
                          </div>
                        </fieldset>
      
                
                        <fieldset class="mt-10" aria-label="Choose a size">
                          <div class="flex items-center justify-between">
                            <div class="text-sm font-medium text-gray-900">Size</div>
                            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                          </div>
      
                          <div class="mt-4 grid grid-cols-4 gap-4">
                       
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="XXS" class="sr-only">
                              <span>XXS</span>
                           
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                         
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="XS" class="sr-only">
                              <span>XS</span>
                             
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                          
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="S" class="sr-only">
                              <span>S</span>
                           
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                          
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="M" class="sr-only">
                              <span>M</span>
                            
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="L" class="sr-only">
                              <span>L</span>
                           
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                          
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="XL" class="sr-only">
                              <span>XL</span>
                            
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                          
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="XXL" class="sr-only">
                              <span>XXL</span>
                           
                              <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1">
                              <input type="radio" name="size-choice" value="XXXL" disabled class="sr-only">
                              <span>XXXL</span>
                              <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                  <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                </svg>
                              </span>
                            </label>
                          </div>
                        </fieldset>
      
                        <button type="submit" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
          
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div>
  `
});
document.querySelector('.Pprod').innerHTML = clutter
}

popularProducts();

// Open the modal when the button is clicked
document.querySelector('#open-modal').addEventListener("click", () => {
    document.querySelector('.modal').classList.remove('hidden');
});

// Close the modal when the cross is clicked
document.querySelector('.cross').addEventListener("click", () => {
    document.querySelector('.modal').classList.add('hidden');
});

