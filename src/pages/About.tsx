import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At AIversity, we're dedicated to democratizing artificial intelligence education. 
              Our platform bridges the gap between cutting-edge AI technology and practical, 
              real-world applications, making AI learning accessible to everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where AI literacy is universal, empowering individuals 
              and organizations to harness the power of artificial intelligence responsibly 
              and effectively. Through innovative learning approaches and hands-on experience, 
              we're building that future today.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly pushing boundaries in AI education and technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Accessibility</h3>
                <p className="text-gray-600">Making AI education available and understandable for everyone.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">Delivering high-quality education and maintaining high standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">Building a supportive network of AI learners and educators.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;