import React from "react";
import { useState } from "react";
import {
  Building2,
  Copy,
  Check,
  QrCode,
  Smartphone,
} from "lucide-react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";


export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState("");
  const [notification, setNotification] = useState("");

  const paymentData = {
    merchant: "MS TAJ ENTERPRISES",
    upiId: "9897748786m@pnb",
    bankName: "PNB, BSM CHOWK ROORKEE",
    accountNo: "7629002100005714",
    ifscCode: "PUNB0762900",
    helpdesk: "18001800 / 18002021",
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(field);
        setNotification(`${field.toUpperCase()} copied to clipboard!`);
        setTimeout(() => {
          setCopiedField("");
          setNotification("");
        }, 3000);
      })
      .catch(() => {
        setNotification("Failed to copy. Please try again.");
        setTimeout(() => setNotification(""), 3000);
      });
  };

  const CopyButton = ({ text, field }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="p-2 hover:bg-sky-100 rounded-lg transition-colors duration-200 group"
      title="Copy to clipboard"
    >
      {copiedField === field ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-600 group-hover:text-sky-500" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Payment Options
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* QR Code Section */}
              <div className="backdrop-blur-sm bg-white/95 rounded-2xl p-8 shadow-xl text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-sky-500 mr-2" />
                  Scan & Pay
                </h2>

                <div className="relative inline-block">
                  <div className="w-48 h-48 mx-auto bg-white border-4 border-sky-200 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                    {/* Placeholder QR Code */}
                    <img src="/images/Qr-code.jpeg" alt="" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-sky-500 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-300 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                <p className="text-gray-600 mb-4">
                  Open any UPI app and scan this QR code
                </p>

                {/* UPI ID Display */}
                <div className="bg-sky-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-sky-600 mb-1">UPI ID</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sky-800 font-semibold">
                      {paymentData.upiId}
                    </span>
                    <CopyButton text={paymentData.upiId} field="upi" />
                  </div>
                </div>

                {/* Merchant Info */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Merchant</p>
                  <p className="font-semibold text-gray-800">{paymentData.merchant}</p>
                </div>
              </div>

              {/* Bank Details Section */}
              <div className="backdrop-blur-sm bg-white/95 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 text-sky-500 mr-2" />
                  Bank Account Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide block mb-2">
                      Bank Name
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-medium text-gray-800">
                        {paymentData.bankName}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide block mb-2">
                      Account Number
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <span className="font-mono text-gray-800">
                        {paymentData.accountNo}
                      </span>
                      <CopyButton text={paymentData.accountNo} field="account" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide block mb-2">
                      IFSC Code
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <span className="font-mono text-gray-800">
                        {paymentData.ifscCode}
                      </span>
                      <CopyButton text={paymentData.ifscCode} field="ifsc" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide block mb-2">
                      Helpdesk
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-medium text-gray-800">
                        {paymentData.helpdesk}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Apps */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Supported Payment Apps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['GPay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map((app) => (
                      <span key={app} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300">
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            {notification}
          </div>
        </div>
      )}
    </div>
  );
}