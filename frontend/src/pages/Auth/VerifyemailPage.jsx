import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

//redux
import { useVerifyMeMutation } from '../../features/Rtk/authApiSlice';

//Toast
import toast from 'react-hot-toast';

//Component
import Aleart from '../../components/Aleart';

function VerifyemailPage() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let token = searchParams.get('token');
  let email = searchParams.get('email');

  const [verifyMe] = useVerifyMeMutation();

  async function handleVerify() {
    const { data, error } = await verifyMe({ email: email, token: token });
    if (error) {
      toast('Account Already Verified', {
        icon: '🙌',
      });
    }
  }

  function handleClick() {
    navigate('/signin');
  }

  useEffect(() => {
    handleVerify();
  }, [verifyMe]);

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <Aleart
        title='Account Is Verified'
        color='green-400'
        message='This Account Verified By HouseFinder'
      />
      <button
        type='submit'
        className='inline-block my-3 rounded-lg bg-green-400 px-5  py-2 text-sm font-medium text-white'
        onClick={handleClick}
      >
        proceed to Sign in
      </button>
    </div>
  );
}

export default VerifyemailPage;
