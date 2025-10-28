
const Accessibility = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mt-20 lg:mt-28 mb-10">
      {/* <Helmet>
        <title>Accessibility-BiteShare</title>
      </Helmet> */}
      <main className="py-12">
        <div>
          <section>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              At <strong>BiteShare</strong>, we are committed to ensuring that
              our platform is accessible to everyone, including individuals with
              disabilities. We strive to provide a user-friendly experience that
              meets the highest accessibility standards.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Accessibility Standards
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              Our platform follows the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA to ensure our website is usable by a wide
              range of people. These guidelines cover various aspects of
              accessibility, including:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-lg text-gray-700 mb-6">
              <li>Providing text alternatives for non-text content.</li>
              <li>
                Ensuring content is easily navigable via keyboard or assistive
                devices.
              </li>
              <li>Maintaining sufficient color contrast for readability.</li>
              <li>
                Supporting screen readers with descriptive labels and semantic
                HTML.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Features to Enhance Accessibility
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              We have implemented the following features to make BiteShare
              accessible:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-lg text-gray-700 mb-6">
              <li>
                <strong>Keyboard Navigation:</strong> Our platform can be
                navigated entirely using a keyboard.
              </li>
              <li>
                <strong>Alternative Text:</strong> Images are accompanied by
                descriptive alt text.
              </li>
              <li>
                <strong>Color Contrast:</strong> We use colors that provide
                sufficient contrast for users with visual impairments.
              </li>
              <li>
                <strong>Resizable Text:</strong> Content is scalable to
                accommodate users with low vision.
              </li>
              <li>
                <strong>ARIA Roles:</strong> We use ARIA attributes to enhance
                the usability of dynamic content.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Ongoing Efforts
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              Accessibility is an ongoing effort. We regularly review and update
              BiteShare to address feedback from users and ensure compliance
              with the latest standards. Our team is dedicated to identifying
              and addressing any potential barriers to accessibility.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Reporting Accessibility Issues
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              If you encounter any accessibility issues while using BiteShare,
              please let us know. We are committed to resolving accessibility
              barriers promptly. You can contact us through:
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-7">
              <strong>Email:</strong> accessibility@bitebuddy.com
              <br />
              <strong>Phone:</strong> +1-800-123-4567
              <br />
              <strong>Feedback Form: </strong>
              <a href="/contact-us" className="text-blue-600 hover:underline">
                Contact Us
              </a>
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Third-Party Content
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              While we strive to ensure all aspects of BiteShare are accessible,
              some third-party content or features (e.g., embedded videos,
              external links) may not fully meet accessibility standards. We
              encourage you to reach out if you face difficulties accessing
              third-party content.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Future Improvements
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              We are continuously working to enhance the accessibility of
              BiteShare. Your feedback is invaluable in helping us make our
              platform more inclusive for everyone.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Accessibility;
