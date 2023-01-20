import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
 const [username, setUsername] = useState("");
 const [badge, setBadge] = useState("");
 const [checked, setChecked] = useState(false);

 const handleChange = () => {
  setChecked(!checked);
 };

 const format = checked ? "&format=short" : "";

 function handleSubmit(e) {
  e.preventDefault();
  if (!username) return setBadge("");
  setBadge(`/api/badge/${encodeURIComponent(username)}`);
 }

 const url = process.env.NEXT_PUBLIC_URL;
 return (
  <div className="flex min-h-screen items-center justify-center bg-[#e0f2fc]">
   <div className="rounded-sm border-4 border-black bg-white p-6 shadow-[6px_8px_0_0_rgba(0,0,0,1)]">
    <h1 className="text-center text-4xl font-bold">Profile Views</h1>
    <p className="mt-2 text-xl">Create your own badge that will count views anywhere you want!</p>

    <div className="mt-4 flex flex-col items-center justify-center">
     <form onSubmit={handleSubmit}>
      <input type="text" className="rounded-sm border-4 border-black bg-white p-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] outline-none !ring-0 ring-transparent duration-200 focus:border-black focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button className="ml-2 rounded-sm border-4 border-black bg-white p-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] outline-none duration-200 focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Create</button>
     </form>
     {badge ? (
      <div className="mt-6 flex flex-col items-center justify-center gap-2">
       <h1 className="text-center text-4xl font-bold">Your badges</h1>
       <p className="mt-2 text-xl">Copy the markdown code below and paste it anywhere you want!</p>

       <div>
        <label className="inline-flex cursor-pointer items-center gap-2">
         <input
          type="checkbox"
          className="border-2 border-gray-300 text-black focus:border-gray-300 focus:ring-black"
          onChange={() => {
           handleChange();
          }}
         />{" "}
         <span className="select-none">Format views (1000 =&gt; 1K)</span>
        </label>
       </div>
       <table className="border-4 border-black p-2">
        <tr>
         <td>
          <Link href={badge + "?style=flat-square" + format} target="_blank">
           <Image alt="Badge" src={badge + "?style=flat-square&display=true" + format} width={100} height={20} className="h-auto w-auto" />
          </Link>
         </td>
         <td>
          <pre>{"![](" + url + badge + "?style=flat-square" + format + ")"}</pre>
         </td>
        </tr>

        <tr>
         <td>
          <Link href={badge + "?style=flat" + format} target="_blank">
           <Image alt="Badge" src={badge + "?style=flat&display=true" + format} width={100} height={20} className="h-auto w-auto" />
          </Link>
         </td>
         <td>
          <pre>{"![](" + url + badge + "?style=flat" + format + ")"}</pre>
         </td>
        </tr>

        <tr>
         <td>
          <Link href={badge + "?style=plastic" + format} target="_blank">
           <Image alt="Badge" src={badge + "?style=plastic&display=true" + format} width={100} height={20} className="h-auto w-auto" />
          </Link>
         </td>
         <td>
          <pre>{"![](" + url + badge + "?style=plastic" + format + ")"}</pre>
         </td>
        </tr>

        <tr>
         <td>
          <Link href={badge + "?style=for-the-badge" + format} target="_blank">
           <Image alt="Badge" src={badge + "?style=for-the-badge&display=true" + format} width={100} height={20} className="h-auto w-auto" />
          </Link>
         </td>
         <td>
          <pre>{"![](" + url + badge + "?style=for-the-badge" + format + ")"}</pre>
         </td>
        </tr>

        <tr>
         <td>
          <Link href={badge + "?style=social" + format} target="_blank">
           <Image alt="Badge" src={badge + "?style=social&display=true" + format} width={100} height={20} className="h-auto w-auto" />
          </Link>
         </td>
         <td>
          <pre>{"![](" + url + badge + "?style=social" + format + ")"}</pre>
         </td>
        </tr>
       </table>
       <p className="mt-2 font-medium">
        Looking for more customizations?{" "}
        <Link href="https://github.com/igorkowalczyk/views" target="_blank" className="underline">
         Check out the documentation
        </Link>
        .
       </p>
      </div>
     ) : (
      <div className="mt-8 flex flex-col items-center justify-center gap-2">
       <h1 className="text-center text-4xl font-bold">Example badges</h1>
       <p className=" mb-4 font-medium">
        Looking for more customizations?{" "}
        <Link href="https://github.com/igorkowalczyk/views" target="_blank" className="underline">
         Check out the documentation
        </Link>
        .
       </p>
       <table className="border-4 border-black p-2">
        <thead>
         <tr>
          <th>Style</th>
          <th>Default badge</th>
          <th>Color</th>
          <th>Custom text & color</th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td>
           <pre>flat-square</pre>
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat-square&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat-square&color=blue&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat-square&color=blueviolet&label=Custom+text&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
         </tr>

         <tr>
          <td>
           <pre>flat</pre>
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat&color=blue&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=flat&color=blueviolet&label=Custom+text&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
         </tr>

         <tr>
          <td>
           <pre>plastic</pre>
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=plastic&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=plastic&color=blue&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=plastic&color=blueviolet&label=Custom+text&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
         </tr>

         <tr>
          <td>
           <pre>for-the-badge</pre>
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=for-the-badge&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=for-the-badge&color=blue&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=for-the-badge&color=blueviolet&label=Custom+text&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
         </tr>

         <tr>
          <td>
           <pre>social</pre>
          </td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=social&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
          <td>No color</td>
          <td>
           <Image alt="Badge" src={"/api/badge/example?style=social&label=Custom+text&display=true"} width={100} height={20} className="h-auto w-auto" />
          </td>
         </tr>
        </tbody>
       </table>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}
