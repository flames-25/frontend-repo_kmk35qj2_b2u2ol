export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-white">AgroMind</h4>
            <p className="mt-2 text-sm text-gray-300">AI-powered smart farming assistant helping farmers make better decisions.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Help</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Get started</h4>
            <p className="mt-2 text-sm text-gray-300">Create an account, choose your role and start exploring smart farming tools.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">© {new Date().getFullYear()} AgroMind. All rights reserved.</div>
      </div>
    </footer>
  );
}
