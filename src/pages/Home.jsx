import { Header } from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div class="bg-white">
          <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Descubre la mejor Experiencia Digital
              </h2>
              <p class="mt-4 text-gray-500">
                Mejoramos tu experiencia de intercambio de productos.
                Intercambia los productos que ya no uses por otro que quieras en
                nuestra página web
              </p>

              <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Producto más visto
              </h3>

              <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Origin</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Diseñado por Good Goods, Inc.
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Material</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Base de nogal macizo con imanes de tierras raras y cubierta
                    de acero con recubrimiento en polvo.
                  </dd>
                </div>

                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Dimensions</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    6.25&quot; x 3.55&quot; x 1.15&quot;
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Finish</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Ligado a mano y acabado con aceite natural.
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Includes</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Bandeja para tarjetas de madera y 3 paquetes de recambio.
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Considerations</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Fabricado con materiales naturales. El grano y el color
                    varian con cada articulo
                  </dd>
                </div>
              </dl>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                class="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                class="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                class="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                class="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                  Machined Mechanical Pencil
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
