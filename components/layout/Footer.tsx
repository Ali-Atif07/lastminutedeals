export default function Footer() {
    return (
        <footer className="bg-purple-50 border-t border-purple-100 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="font-black text-brand-purple text-lg mb-2">Last Minutes Deal</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Premium curated journeys for the spontaneous traveler. Discover hidden gems and luxury deals in real-time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Help Center', 'Terms of Service'].map(l => (
                                <li key={l}>
                                    <a href="#" className="text-gray-500 text-sm hover:text-brand-purple transition-colors">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-3">Support</h4>
                        <ul className="space-y-2">
                            {['Privacy Policy', 'Booking Guide', 'Contact Us'].map(l => (
                                <li key={l}>
                                    <a href="#" className="text-gray-500 text-sm hover:text-brand-purple transition-colors">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-3">Social Media</h4>
                        <div className="flex gap-3">
                            {['f', 'in', 'tw'].map(s => (
                                <a
                                    key={s}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:border-brand-purple hover:text-brand-purple transition-colors"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-purple-100 mt-10 pt-6 text-center">
                    <p className="text-gray-400 text-xs">© 2024 Last Minutes Deal. Premium Curated Journeys.</p>
                </div>
            </div>
        </footer >
    )
}