import MobileNavbar from "@/components/ui/MobileNavbar";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Bernard',
    lastName: 'Omboga',
  }

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
              src='/icons/logo3.svg'
              alt="logo"
              width={30}
              height={30}
            />
            <div>
              <MobileNavbar 
                user={loggedIn}
              />
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}

