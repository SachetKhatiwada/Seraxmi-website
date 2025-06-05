import React, { useState } from 'react'
import { CheckCircle, Mail, Play, ArrowRight, Shield, DollarSign, User, MessageSquare, Globe, X } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const features: string[] = [
    'Free consultation & strategy session',
    '24/7 dedicated support team',
    'Custom solutions for your business',
    'Results-driven approach',
    'Money-back guarantee',
    'Industry-leading expertise'
  ];

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
    "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  ];

  interface FormData {
    name: string;
    email: string;
    country: string;
    budget: string;
    message: string;
  }



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Console log the form data
    console.log('Form Data Submitted:', {
      ...formData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccessPopup(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      country: '',
      budget: '',
      message: ''
    });
  };

  const isFormValid = formData.name && formData.email && formData.country && formData.budget;

  return (
    <section className="relative px-6 pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden min-h-screen flex items-center">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-600 mb-6">We&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Background Image */}
      <div className=" inset-0 z-0 relative">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
          alt="Professional team working on digital solutions"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20"></div>
      </div>

      <div className="max-w-[80%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-gray-900 block mb-2">
                Transform Your
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Digital Future
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
              We empower ambitious businesses with cutting-edge digital solutions that drive exponential growth,
              increase revenue, and create lasting competitive advantages in today&apos;s digital landscape.
            </p>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white">
                <span className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Success Stories</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Contact Form */}
          <div className="lg:pl-12 animate-in slide-in-from-right duration-1000 animation-delay-500">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Get Your Free Quote</h3>
                <p className="text-gray-600 text-lg">Ready to accelerate your growth? Let&apos;s discuss your vision</p>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full pl-12 pr-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-12 pr-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div className="group">
                  <div className="relative">
                    <Globe className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:bg-white transition-all duration-300 group-hover:border-gray-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select Your Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <ArrowRight className="absolute right-4 top-4 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Budget Field */}
                <div className="group">
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:bg-white transition-all duration-300 group-hover:border-gray-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select Your Budget</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                      <option value="discuss">Let&apos;s Discuss</option>
                    </select>
                    <ArrowRight className="absolute right-4 top-4 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project goals and vision..."
                      rows={4}
                      className="w-full pl-12 pr-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:bg-white transition-all duration-300 group-hover:border-gray-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transform transition-all duration-300 shadow-xl group ${isSubmitting
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white cursor-wait'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl'
                    } ${!isFormValid ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Free Quote</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
                {/* Security Notice */}
                <p className="text-xs text-gray-500 text-center flex items-center justify-center space-x-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Your information is secure and will never be shared</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero