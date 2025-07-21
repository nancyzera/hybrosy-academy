"use client";

import Image from "next/image";
import { useState } from "react";

// SearchBox Component
function SearchBox() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "0px",width: "1000px",justifyContent: "center", padding: "20px", borderRadius: "5px",marginLeft: "90px" }}>
      <input
        type="text"
        placeholder="Search your favourite course"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          flex: "1",
          backgroundColor: "white",
          width: "30px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "8px 16px",
          backgroundColor: "#49BBBD",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}


export default function Home() {
  return (
    <div>
    
      <div
        className="navigation"
        style={{ backgroundColor: "white", display: "inline-flex" }}
      >
        <Image src="/Group 235 (1).png" alt="logo" width={80} height={80} />
        <nav>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Career</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>
              {/* <div className="picture"> */}
                {/* <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /> */}
              {/* </div> */}
                            <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
            </li>
          </ul>
        </nav>
      </div>

      
      <div className="body">
      
        <SearchBox />


        <div className="sect" style={{ flexWrap:"wrap", gap: "2px", marginTop: "20px", }}>
          <div style={{  width: "100px", height: "100px" }}>
            <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">Subject</option>
              <option value="option2">Mathematics</option>
              <option value="option3">Science</option>
              <option value="option4">History</option>
            </select>
          </div>
          <div style={{ width: "100px", height: "100px" }}>     <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">Partner</option>
              <option value="option2">RCA</option>
              <option value="option3">Korean </option>
              <option value="option4">USC</option>
            </select></div>
          <div style={{  width: "100px", height: "100px" }}>     <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">Program</option>
              <option value="option2">Software</option>
              <option value="option3">Engineering</option>
              <option value="option4">History</option>
            </select></div>
          <div style={{  width: "100px", height: "100px" }}>     <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">Language</option>
              <option value="option2">english</option>
              <option value="option3">korean</option>
              <option value="option4">Ikinyarwanda</option>
            </select></div>
          <div style={{  width: "100px", height: "100px" }}>     <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">abaliability</option>
              <option value="option2">RCA</option>
              <option value="option3">SOD</option>
              <option value="option4">IDK</option>
            </select></div>
          <div style={{  width: "100px", height: "100px" }}>     <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc",backgroundColor:"white",}}>
              <option value="option1">Learning type</option>
              <option value="option2">Mathematics</option>
              <option value="option3">Science</option>
              <option value="option4">History</option>
            </select></div>
        </div>
      </div>
      <div className="count">
      <div className="boxes">
        <div className="box">
             <Image src="/1.png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
         <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (4).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
          <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (3).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>

               <div className="boxes">
        <div className="box">
             <Image src="/Rectangle 32 (1).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>

      <div className="boxes">
        <div className="box">
             <Image src="/Group 40.png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
             <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (1).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>

       <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (2).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>

         <div className="boxes">
        <div className="box">
             <Image src="/Rectangle 32.png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
             </div>
</div>
      
<div className="call">
<div className="paragraph">
 <h3 style={{fontSize:"28px"}}>Know about learning</h3>
 <h3 style={{fontSize: "28px"}}>learning platform</h3>
 <p> free E-book,video & consolation</p>
 <p>Top instructors from around the world</p>
 <p>Top courses from your team</p>
<div>
  <button style={{width:"190px",height:" 30px",border:"0.3px solid black",borderRadius:"4px",color:"white",backgroundColor:"#49BBBD"}}>Start learning now</button>
</div>

</div>

<div className="imager">
 <Image src="/Group 71.png" alt="ifoto" width={550} height={550} />

</div>

</div>
<div>
  <h2 style={{marginLeft:"25px"}}>Recommended for you</h2>
</div>
<div className="recom">

      <div className="boxes">
        <div className="box">
             <Image src="/REctangle 33.png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
      <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (1).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
             <div className="boxes">
        <div className="box">
             <Image src="/Group 40 (2).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
             <div className="boxes">
        <div className="box">
             <Image src="/Rectangle 32 (1).png" alt="ifoto" width={250} height={250} />
          </div>
          <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 259.png" alt="ifoto" width={20} height={20} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>Design</p></div>
              <div style= {{width: "60px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/watch.png" alt="ifoto" width={15} height={15} /><p style={{color:"grey",fontSize:"7px",marginTop:"15px"}}>3 month</p></div>

          </div>
          
        <h3 style={{textAlign: "center",}}>Aws Certified Solutions Architect</h3>
        <p style={{fontSize:"10px",textAlign:"center",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
         <div className="line" style={{display:"inline-flex",flexWrap:"wrap",marginTop:"20px"}}>
              <div style={{width: "80px",height:"40px",display:"inline-flex",gap:"14px"}}>   <Image src="/Group 237.png" alt="ifoto" width={40} height={40} /><p style={{fontSize:"7px",marginTop:"15px"}}>Lina</p></div>
              <div style= {{width: "40px",height:"40px",display:"inline-flex",gap:"14px"}}><p style={{color:"#49BBBD"}}><del style={{color:"grey"}}>$100</del> $80</p>
</div>

          </div>
          
       </div>
  
</div>
<div className="footer">
<div className="conte">
<div style={{width: "100px",height:"100px"}}>
   <Image src="/Group 111.png" alt="ifoto" width={250} height={250} />
</div>
<div style={{backgroundColor:"grey",width:"2px",height: "100px"}}></div>
<div style={{width: "100px",height: "100px"}}>
  <p>Virtual class</p>
  <p>For zoom</p>
</div>
</div>
<h2 style={{textAlign:"center",color: "grey"}}>Subscribe to get our Newsletter</h2>
<div style={{marginLeft:"350px",}}>
<input type="text" placeholder="your email" style={{padding: "10px", borderRadius: "100px", border: "1px solid #ccc", width: "300px", marginTop: "20px"}} />
<button style={{padding: "10px 20px", backgroundColor: "#49BBBD", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", marginLeft: "10px"}}>Subscribe</button>
</div>



<p style={{color:"grey",textAlign:"center"}}>Careers | privacy policy | Terms & Conditions </p>
<p style={{color:"grey",textAlign:"center"}}>&copy; 2021  Class Technologies Inc</p>

</div>















    </div>
  );
}
