
const Pizza = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 px-5 md:px-10 py-5 md:py-14 mt-24 md:mt-28 mb-14 md:mb-20  mx-auto bg-[#faf4e9] shadow-lg  text-gray-800 rounded-2xl">
      {/* <Helmet>
        <title>Pizza Recipe-BiteBuddy</title>
      </Helmet> */}
      <div className="mb-6 md:mb-14 text-center text-black/80 ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Delicious <span className="text-amber-700">Pizza</span> Recipe
        </h1>
        <p className="mt-2 text-sm md:text-lg">
          A simple and tasty pizza recipe for all pizza lovers!
        </p>
      </div>
      <section className="grid md:grid-cols-2 gap-6 items-center mb-10 md:px-6">
        <div>
          <img
            src="https://i.ibb.co.com/nwFvQWw/pexels-andrebeltrame-1878346.jpg"
            alt="Freshly baked bread"
            className="rounded-lg shadow-md w-full h-40 sm:h-72 lg:h-80 object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold text-gray-800">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 mt-4 text-sm md:text-base lg:text-lg">
            <li>1 pizza dough (store-bought or homemade)</li>
            <li>1/2 cup pizza sauce</li>
            <li>2 cups shredded mozzarella cheese</li>
            <li>1/4 cup grated Parmesan cheese</li>
            <li>1/2 cup sliced pepperoni or toppings of choice</li>
            <li>1 tablespoon olive oil</li>
            <li>1 teaspoon dried oregano</li>
            <li>1/2 teaspoon crushed red pepper flakes (optional)</li>
            <li>Fresh basil leaves (for garnish)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 md:mb-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 mt-4 text-sm md:text-base lg:text-lg space-y-4">
          <li className="mb-2">
            Preheat your oven to 475°F (245°C) and line a baking sheet with
            parchment paper.
          </li>
          <li className="mb-2">
            Roll out your pizza dough on a floured surface until it's about 12
            inches in diameter.
          </li>
          <li className="mb-2">
            Place the dough on the prepared baking sheet and brush with olive
            oil.
          </li>
          <li className="mb-2">
            Spread a thin layer of pizza sauce over the dough, leaving a small
            border around the edges.
          </li>
          <li className="mb-2">
            Sprinkle mozzarella cheese evenly over the sauce, then add Parmesan
            cheese and any toppings of your choice.
          </li>
          <li className="mb-2">
            Bake in the preheated oven for 10-12 minutes or until the crust is
            golden and the cheese is melted and bubbly.
          </li>
          <li className="mb-2">
            Remove from the oven, sprinkle with oregano, red pepper flakes, and
            fresh basil leaves.
          </li>
          <li className="mb-2">
            Slice and serve hot. Enjoy your delicious homemade pizza!
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Pizza;
