import "./globals.css";
import MovingBackground from "@/components/MovingBackground"; // Sesuaikan path
import AnimatedLines from "@/components/animated-lines";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="relative min-h-screen text-white antialiased overflow-x-hidden max-w-full">
        {/* Render background di lapisan paling bawah */}
        <MovingBackground />
        
        {/* Render animasi garis neon di atas background dasar, di bawah konten */}
        <AnimatedLines />

        {/* Konten portofolio utama akan berada di atas background */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}