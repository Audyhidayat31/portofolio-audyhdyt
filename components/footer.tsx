export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white py-16 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter">
              MY<span className="text-primary">PORTOFOLIO</span>
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-sm text-sm">
              Membangun masa depan digital dengan kode dan kreativitas. Berfokus pada Fullstack, AI, dan IoT.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Beranda</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">Tentang</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">Proyek</a>
              </li>
            </ul>
          </div>

          {/* Legal/Other */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Hubungi</h3>
            <p className="text-muted-foreground font-medium">audyhidayat31@gmail.com</p>
            <p className="text-muted-foreground font-medium">Jakarta, Indonesia</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>&copy; {currentYear} Audy Abdillah Hidayat. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

