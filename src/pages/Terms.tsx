import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of the Terms of Use</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">1.1 Agreement to Terms</h3>
                <p className="text-gray-700">AdmitHub, PBC dba Mainstay (herein referred to as "Mainstay," "we," "us" or "our") owns and operates certain web sites, including https://mainstay.com, (the "Web Sites") and makes available other software, products, mobile applications, chatbot communications, and other related services (collectively, the Web Sites and such services, including any future features and applications, the "Mainstay Services"). All use of the Mainstay Services is subject to the terms and conditions contained in this Terms of Use Agreement, as amended from time to time (this "Agreement"). Please read this Agreement carefully. By accessing, browsing, or otherwise using the Mainstay Services, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not accept the terms and conditions of this Agreement, you shall not access, browse, or use the Mainstay Services.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">1.2 Arbitration</h3>
                <p className="text-gray-700">PLEASE READ THIS AGREEMENT CAREFULLY, AS IT CONTAINS AN AGREEMENT TO ARBITRATE AND OTHER IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. Section 9 of this Agreement contains an Arbitration Agreement, which will, with limited exception, require you to submit claims you have against us to binding and final arbitration. Under the Arbitration Agreement, (a) you will only be permitted to pursue claims against Mainstay on an individual basis, not as a plaintiff or class member in any class or representative action or proceeding, (b) you will only be permitted to seek relief (including monetary, injunctive, and declaratory relief) on an individual basis, AND (c) YOU MAY NOT BE ABLE TO HAVE ANY CLAIMS YOU HAVE AGAINST US RESOLVED BY A JURY OR IN A COURT OF LAW.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">1.3 Changes to Agreement</h3>
                <p className="text-gray-700">You understand and agree that we may change this Agreement at any time without prior notice. If we do this, we will post the changes to this Agreement on this page and will indicate at the top of this page the date this Agreement was last revised. Any such changes will become effective no earlier than fourteen (14) days after they are posted, except that changes addressing new functions of the Mainstay Services or changes made for legal reasons will be effective immediately. Your continued use of the Mainstay Services after such date shall constitute your acceptance of the new Agreement. If you do not agree to abide by these or any future Agreements, do not access, browse, or use (or continue to access, browse, or use) the Mainstay Services. You may read a current, effective copy of this Agreement at any time by visiting http://www.Mainstay.com/legal/terms-of-use. Mainstay is not responsible for lost notifications.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">1.4 Additional Terms</h3>
                <p className="text-gray-700">In addition, when using the Mainstay Services, you will be subject to any additional terms applicable to such Mainstay Services that may be posted on the Mainstay Services from time to time, including without limitation, Mainstay's Privacy Policies located at https://mainstay.com/privacy/ and https://mainstay.com/legal-chatbotprivacypolicy/ (the "Privacy Policies"). All such terms and conditions are hereby incorporated by reference into this Agreement.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;