import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mt-20 lg:mt-28 mb-10">
      <Helmet>
        <title>Privacy & Policy-BiteBuddy</title>
      </Helmet>
      <main className="py-12">
        <div>
          <section>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Privacy Policy
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              At <strong>BiteBuddy</strong>, your privacy is our priority. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you use our food-sharing platform. By accessing
              or using BiteBuddy, you agree to the practices outlined in this
              policy.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Information We Collect
            </h3>
            <ul className="list-disc pl-6 text-sm md:text-lg text-gray-700 mb-6">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and profile details when you sign up.
              </li>
              <li>
                <strong>Location Data:</strong> To match you with nearby
                food-sharing opportunities.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our platform, including your preferences, activities, and
                communication.
              </li>
              <li>
                <strong>Device Information:</strong> Details about the device
                and browser you use to access BiteBuddy.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              How We Use Your Information
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We use the information collected for purposes such as:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-lg text-gray-700 mb-6">
              <li>Facilitating connections between users for food sharing.</li>
              <li>
                Providing personalized recommendations based on your
                preferences.
              </li>
              <li>
                Improving the platform's functionality and user experience.
              </li>
              <li>
                Sending important updates, notifications, or promotional offers.
              </li>
              <li>Ensuring compliance with safety and legal requirements.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Sharing Your Information
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              We may share your information with trusted third parties under
              these circumstances:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-lg text-gray-700 mb-6">
              <li>
                <strong>Service Providers:</strong> For payment processing,
                customer support, and hosting services.
              </li>
              <li>
                <strong>Legal Obligations:</strong> When required to comply with
                laws, regulations, or legal processes.
              </li>
              <li>
                <strong>Consent:</strong> When you give explicit consent to
                share your information.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Managing Your Data
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              You have control over your data. You can update your profile,
              adjust your privacy settings, or request data deletion at any time
              by contacting our support team.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              We use cookies and similar tracking technologies to enhance your
              experience on BiteBuddy. You can manage your cookie preferences
              through your browser settings.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">Security</h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              Protecting your data is our priority. We implement security
              measures to safeguard your information from unauthorized access,
              alteration, or disclosure.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Children's Privacy
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              BiteBuddy is not intended for children under the age of 13. We do
              not knowingly collect personal information from children. If we
              become aware of such data, we will take steps to delete it
              promptly.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. Any changes
              will be posted here, along with the effective date. Your continued
              use of BiteBuddy signifies your acceptance of the updated terms.
            </p>

            {/* <!-- Contact Us --> */}
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-sm md:text-lg text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              <strong>Email:</strong> bitebuddy@gmail.com
              <br />
              <strong>Phone:</strong> +1-800-123-4567
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
