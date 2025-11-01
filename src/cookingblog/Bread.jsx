

const Bread = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 px-5 md:px-10 py-5 md:py-14 mt-24 md:mt-28 mb-14 md:mb-20 mx-auto bg-[#faf4e9] shadow-lg  text-gray-800 rounded-2xl">
      {/* <Helmet>
        <title>Bread Recipe-BiteBuddy</title>
      </Helmet> */}
      <div className="mb-6 md:mb-14 text-center  text-black/70 ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Classic <span className="text-amber-700">Homemade Bread</span> Recipe
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-lg">
          Enjoy the smell of freshly baked bread in your home with this
          easy-to-follow recipe!
        </p>
      </div>
      <section className="grid md:grid-cols-2 gap-10 items-center mb-10 md:px-6">
        <div>
          <img
            src="/assets/bread.jpg"
            alt="Freshly baked bread"
            className="rounded-lg shadow-md w-full h-40 sm:h-72 lg:h-80 object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold text-gray-800">
            Ingredients
          </h3>
          <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base lg:text-lg">
            <li>3 3/4 cups all-purpose flour</li>
            <li>1 1/4 cups warm water</li>
            <li>2 tablespoons sugar</li>
            <li>1 packet (2 1/4 tsp) active dry yeast</li>
            <li>1 teaspoon salt</li>
            <li>2 tablespoons vegetable oil</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
          Instructions
        </h3>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>
            In a small bowl, dissolve sugar in warm water. Add the yeast and let
            it sit for 5-10 minutes until frothy.
          </li>
          <li>
            In a large bowl, combine flour and salt. Make a well in the center
            and pour in the yeast mixture and oil.
          </li>
          <li>
            Mix until a dough forms, then turn it out onto a floured surface and
            knead for about 8-10 minutes.
          </li>
          <li>
            Place the dough in a greased bowl, cover with a damp cloth, and let
            it rise for 1 hour or until doubled in size.
          </li>
          <li>
            Punch down the dough and shape it into a loaf. Place it in a greased
            loaf pan and let it rise again for 30 minutes.
          </li>
          <li>
            Preheat your oven to 375°F (190°C). Bake the bread for 25-30 minutes
            or until golden brown.
          </li>
          <li>
            Remove from the oven and let cool before slicing. Enjoy your
            homemade bread!
          </li>
        </ol>
      </section>

      <section className="mb-8 md:mb-0">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
          Tips
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Use a thermometer to ensure your water is around 110°F for
            activating the yeast.
          </li>
          <li>
            For extra flavor, try adding herbs or shredded cheese to the dough.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Bread;
