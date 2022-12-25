import Link from "next/link";

export default function NotFound() {
 return (
  <div className="flex min-h-screen items-center justify-center bg-[#e0f2fc]">
   <div className="rounded-sm border-4 border-black bg-white py-6 px-12 shadow-[6px_8px_0_0_rgba(0,0,0,1)]">
    <h1 className="text-center text-4xl font-bold">404</h1>
    <p className="mt-2 text-center text-xl">This page does not exist.</p>
    <p className=" mx-auto mt-2 text-center text-xl">
     <Link href="/" className="underline">
      Go back to main page.
     </Link>
    </p>
   </div>
  </div>
 );
}
