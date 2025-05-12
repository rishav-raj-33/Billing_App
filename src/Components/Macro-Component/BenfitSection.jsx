import Card from "../Micro-Component/Card";
import FooterCom from "../Macro-Component/FooterCom";

function BenefitSection() {

    let c1 = "Invoices often serve as a prerequisite for warranty claims. Many manufacturers providers require customers to present a valid invoice as proof of purchase when seeking warranty coverage. The invoice provides essential details like seller information, which are crucial for verifying eligibility for warranty services.";
    let c2 = "Invoices provide a comprehensive and structured record of transactions. They typically include essential information such as the date of purchase, item descriptions, quantities, prices, and total amounts. This clarity helps both businesses and customers understand the details of the transaction accurately.";
    let c3 = "Invoices play a vital role in building and maintaining positive customer relationships. By providing clear and accurate billing information, invoices demonstrate a business's commitment to transparency and professionalism. When customers receive well-organized and timely invoices, they are more likely to trust and appreciate the business.";
    let c4 = "Invoices are essential for tracking the status of payments. Businesses can easily monitor which invoices have been paid, which are outstanding, and when payments are due. This information helps in managing cash flow, identifying late payments, and taking appropriate follow-up actions.";
    let c5 = "Invoices serve as legal proof of a transaction. They document the agreement between a buyer and a seller, detailing the goods, the price, and the terms of payment. In case of disputes, invoices can be used as evidence to support claims or defenses.";
    let c6 = "Invoices serve as crucial evidence of payment. When a customer pays an invoice, the paid invoice acts as a tangible proof that the transaction has been completed. This is especially important for businesses to maintain accurate financial records and for customers to protect their rights in case of disputes or warranty claims.";
    let heading = ["Warranty Claims", "Clear and Detailed Record", "Customer Relationship Management", "Payment Tracking", "Legal Record", "Proof of Payment"];
    let content = [c1, c2, c3, c4, c5, c6];
    let img = ["../../../public/card-1.jpg", "../../../public/card-2.jpg", "../../../public/card-3.jpg", "../../../public/card-4.jpg", "../../../public/card-5.jpg", "../../../public/card-6.jpg"];
    let links = ["https://www.google.com/search?q=whatisWarrantyClaimsininvoice", "https://www.google.com/search?q=whatisClearandDetailedRecordininvoice", "https://www.google.com/search?q=whatisCustomerRelationshipManagementininvoice", "https://www.google.com/search?q=whatisPaymentTrackingininvoice", "https://www.google.com/search?q=whatisLegalRecordininvoice", "https://www.google.com/search?q=whatisProofofPaymentininvoice"];

      



    return (

        <div className="container-fluid" id="benefit-section">
            <h1>Benefits of Invoice:</h1>
            <div className="row justify-content-evenly" id="card-1">
                <div className="col-md-3 mt-3">
                    <Card img={img[0]} title={heading[0]} content={content[0]} link={links[0]} />
                </div>
                <div className="col-md-3 mt-3">
                    <Card img={img[3]} title={heading[1]} content={content[1]} link={links[1]} />
                </div>
                <div className="col-md-3 mt-3">
                    <Card img={img[2]} title={heading[2]} content={content[2]} link={links[2]} />
                </div>
            </div>
            <div className="row justify-content-evenly" id="card-2">
                <div className="col-md-3 mt-3">
                    <Card img={img[3]} title={heading[3]} content={content[3]} link={links[3]} />
                </div>
                <div className="col-md-3 mt-3">
                    <Card img={img[4]} title={heading[4]} content={content[4]} link={links[4]} />
                </div>
                <div className="col-md-3 mt-3">
                    <Card img={img[5]} title={heading[5]} content={content[5]} link={links[5]} />
                </div>
            </div>
        </div>



    )



}


export default BenefitSection