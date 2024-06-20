import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <Image 
              src='/icons/auth.jpg'
              alt='home'
              width={900}
              height={900}
            />
          </div>
      </main>
    );
  }
  