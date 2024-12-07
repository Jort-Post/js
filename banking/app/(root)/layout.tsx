import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Jort', lastName: 'Post'}

  return (
    <main className="flex h-screen w-full font-inters">
        <Sidebar user = {loggedIn}/>

        <div className="flex size-fuull flex-col">
          <div className="root-layout">
            <Image 
            src="/icons/logo.svg" 
            width={30} 
            height={30} 
            alt="logo icon" />

            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
