import React from "react";

const Recipe = () => {
  return (
    <div>
      <header
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?food')",
        }}
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">Popular Recipes</h1>
      </header>

      <main className="w-11/12 sm:container xl:w-10/12 mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Discover Delicious Recipes
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?pasta"
              alt="Pasta"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Creamy Alfredo Pasta
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                A quick and easy creamy pasta recipe.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500 ml-2">4.8 (120 reviews)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?cake"
              alt="Cake"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Chocolate Lava Cake
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                A decadent dessert with a gooey chocolate center.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500 ml-2">4.9 (150 reviews)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://source.unsplash.com/400x300/?salad"
              alt="Salad"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Mediterranean Salad
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                A refreshing salad with feta cheese and olives.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500 ml-2">4.7 (90 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recipe;
