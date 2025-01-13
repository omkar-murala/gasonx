import { NextPage } from 'next';
import Image from 'next/image';

const BlankPage: NextPage = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
<div className="relative w-[450px] h-[550px] bg-[#5F8F80]/75 rounded-lg p-8 shadow-lg translate-x-[450px] z-10">
  {/* Card Content */}
  <h1 className="text-center mb-4">
    <span className="text-white text-base font-normal">Welcome back to the</span> <br />
    <span className="text-[#ffffff] text-2xl font-bold">Gasonx</span>
  </h1>

  <form className="flex flex-col gap-4 mt-11 py-8">
    {/* Username Input */}
    <div>
      <label className="text-white text-sm" htmlFor="username">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="w-full bg-transparent border-b-2 border-white text-white text-sm py-1 outline-none"
        placeholder="Enter your username"
      />
    </div>

    {/* Password Input */}
    <div>
      <label className="text-white text-sm" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full bg-transparent border-b-2 border-white text-white text-sm py-1 outline-none"
        placeholder="Enter your password"
      />
    </div>
    <div className="flex items-center justify-between gap-4">
      {/* Terms and Conditions */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" className="accent-[#F2BB24]" />
        <label htmlFor="terms" className="text-white text-xs">
          I accept the terms &amp; conditions
        </label>
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        className="bg-[#F2BB24] text-white text-sm py-2 px-2 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
      >
        SIGN UP
      </button>
    </div>
  </form>

  {/* Footer */}
  <p className="text-center text-white text-xs mt-11">
    No Account yet?{' '}
    <a href="#" className="text-white underline">
      SIGN UP
    </a>
  </p>
  
</div>



{/* Image in the Background */}
<div className="absolute mb-60 right-[1rem] z-0">
  <Image
  className='w-[428px] h-[476px]'
    src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P8wtEGkKqsNdWTcHSRyeQ1iUVhXvxg5ZjK9EM"
    width={400}
    height={400}
    alt="Picture of the author"
  />
</div>

    {/* Left cylinders Image */}
<div className="absolute bottom-0 left-0 z-0 ml-4">
  <Image
    className="w-[420px] h-[550px]"
    src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PnU6khuGRiUqe3E7DVSzT6BQNhZc58AvmMbIP"
    width={500}
    height={500}
    alt="Left Industrial Image"
  />
</div>

    {/* center Industrial Image */}
<div className="absolute bottom-0  z-0 ml-4">
  <Image
    className="w-150px h-[250px] opacity-40"
    src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P9lIb4kWLDt3P1OKBThfMYNvoUInyEV2ZCQpG"
    width={500}
    height={500}
    alt="Left Industrial Image"
  />
</div>
{/* Right Industrial Image */}
<div className="absolute bottom-0 right-0 z-0 mr-4">
  <Image
    className="w-150px h-[250px] opacity-40"
    src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P7L6oLFwiWGBhyad3lkFQMOR9xrI4Ac8S5ow1"
    width={500}
    height={500}
    alt="Right Industrial Image"
  />
</div>

</div>

  );
};

export default BlankPage;


// {/* logo */}
// <div className="flex  left-0">
//       {/* Logo Image */}
//       <Image
//         className="w-[150px] left-0 h-auto"
//         src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PwMSGrr6iI7OHvYpW5lGVZAeX0JkUc9ERdF2M"
//         width={500}
//         height={500}
//         alt="GASONX Logo"
//       />
//       {/* Text */}
//       <div className="text-2xl font-bold">
//         <span className="text-black">G</span>
//         <span className="text-green-600">ASONX</span>
//       </div>
//     </div>
