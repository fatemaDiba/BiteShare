
const Salad = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 px-5 md:px-10 py-5 md:py-14 mt-24 md:mt-28 mb-14 md:mb-20 mx-auto bg-[#faf4e9] shadow-lg text-gray-800 rounded-2xl">
      {/* <Helmet>
        <title>Salad Recipe-BiteBuddy</title>
      </Helmet> */}
      <div className="mb-6 md:mb-14 text-center text-black/80 ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Fresh <span className="text-amber-700">Salad</span> Recipe
        </h2>
        <p className="mt-2 text-sm md:text-lg">
          A refreshing and healthy salad packed with veggies and flavors!
        </p>
      </div>
      <section className="grid md:grid-cols-2 gap-6 items-center mb-10 md:px-6">
        <div>
          <img
            src="https://i.ibb.co.com/b6hF1fQ/pexels-catscoming-406152-1.jpg"
            alt="Fresh Salad"
            className="rounded-lg shadow-md w-full h-40 sm:h-72 lg:h-80 object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold text-gray-800">
            Ingredients
          </h3>
          <ul className="list-disc pl-6 mt-4 text-sm md:text-base lg:text-lg">
            <li>1 cup mixed greens (lettuce, spinach, arugula)</li>
            <li>1/2 cup cherry tomatoes, halved</li>
            <li>1/4 cup cucumber, sliced</li>
            <li>1/4 cup red onion, thinly sliced</li>
            <li>1/4 cup crumbled feta cheese</li>
            <li>2 tablespoons olive oil</li>
            <li>1 tablespoon balsamic vinegar</li>
            <li>Salt and pepper to taste</li>
            <li>Fresh herbs (optional: basil, parsley)</li>
          </ul>
        </div>
      </section>
      <section className="mb-8 md:mb-0">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          Instructions
        </h3>
        <ol className="list-decimal pl-6 mt-4 text-sm md:text-base lg:text-lg space-y-4">
          <li className="mb-2">
            In a large bowl, combine the mixed greens, cherry tomatoes,
            cucumber, and red onion.
          </li>
          <li className="mb-2">
            Add the crumbled feta cheese on top of the vegetables.
          </li>
          <li className="mb-2">
            Drizzle with olive oil and balsamic vinegar, and toss gently to coat
            the ingredients.
          </li>
          <li className="mb-2">
            Season with salt, pepper, and any fresh herbs you like.
          </li>
          <li className="mb-2">
            Serve immediately and enjoy your fresh, vibrant salad!
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Salad;
