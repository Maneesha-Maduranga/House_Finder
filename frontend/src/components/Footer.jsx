import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <div className='w-full grid grid-rows-3 gap-3 text-center bg-slate-100 py-4 text-sm font-thin'>
      <div className='flex items-center justify-center gap-3'>
        <h6>Home</h6>
        <h6>About</h6>

        <h6>Property</h6>
      </div>
      <div className='flex items-center justify-center gap-3  border-b-2'>
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsLinkedin />
      </div>
      <div>
        <h4>© Copyright HomeFinder All Rights Reserved.</h4>
      </div>
    </div>
  );
}

export default Footer;
