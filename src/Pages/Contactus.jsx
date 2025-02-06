
const ContactUs = () => {
  return (
    <div className="flex flex-col space-y-7 mt-10">
      {/* Title */}
      <div className="text-4xl font-semibold">Contact Us</div>

      {/* Introduction */}
      <div>
        Have a question, need assistance, or want to give feedback?  
        **We’re here to help!**
      </div>

      {/* Contact Details */}
      <ul className="list-disc ml-10">
        <li>📍 <span className="font-semibold">Our Address:</span> [Your Office Location], [City, Country, Zip Code]</li>
        <li>📧 <span className="font-semibold">Email Us:</span> <a href="mailto:support@[yourcompany].com" className="text-blue-600 hover:underline">support@SwiftCart.com</a></li>
        <li>📞 <span className="font-semibold">Call Us:</span> +1 234 567 8900</li>
        <li>📅 <span className="font-semibold">Working Hours:</span> 
          <ul className="list-disc ml-10">
            <li>Monday – Friday: 9 AM – 6 PM (EST)</li>
            <li>Saturday: 10 AM – 4 PM (EST)</li>
          </ul>
        </li>
      </ul>

      {/* Closing Statement */}
      <div>
        Whether you have inquiries, need assistance, or just want to chat, our team is ready to help!  
        **We aim to respond to all inquiries within 24 hours.** 😊💬
      </div>
    </div>
  );
};

export default ContactUs;
