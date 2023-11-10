export const Header = () => {
  return (
    <header>
      <div class="w-full">
        <nav class="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <div class="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <a href="/">
              <span class="flex items-center space-x-2 text-2xl font-medium text-green-700 dark:text-green-100">
                <span></span>
                <span>TrueqApp</span>
              </span>
            </a>
          </div>

          <ul class="hidden lg:flex justify-center items-center space-x-6">
            <li class="nav__item">
              <a
                class="text-lg font-normal text-gray-800 hover:text-green-600 focus:text-green-500focus:bg-green-500 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav__item">
              <a
                class="text-lg font-normal text-gray-800 hover:text-green-600 focus:text-green-500 focus:bg-green-500 focus:outline-none dark:focus:bg-gray-800"
                href="/features_page"
              >
                Products
              </a>
            </li>
            <li class="nav__item">
              <a
                class="text-lg font-normal text-gray-800 hover:text-green-600 focus:text-green-500 focus:bg-green-500 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                Category
              </a>
            </li>
            <li class="nav__item">
              <a
                class="text-lg font-normal text-gray-800 hover:text-green-600 focus:text-green-500 focus:bg-green-500 focus:outline-none dark:focus:bg-gray-800"
                href="/"
              >
                PQR
              </a>
            </li>
          </ul>
          <div class="hidden lg:flex">
            <a
              class="px-6 py-2 text-white bg-green-700 rounded-md"
              href="/src/html/Login.html"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
