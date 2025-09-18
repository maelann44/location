import { assets } from '@/assets/assets'
import React, {useState} from 'react'
import Image from 'next/image'



const Contact = () => {
  
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6021bf6c-9965-4bc5-86c5-ad867eaa2aaf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };  
  
  
  
  
    return (
    <div id='contact' className='w-full px-[12%] py-10 scorll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto]'>

        <h4 className='text-center mb-2 text-lg'></h4>
        <h2 className='text-center text-5xl'>Contactez-nous</h2>
<div className="max-w-2xl mx-auto mt-5 mb-12 text-justify leading-relaxed text-gray-700 space-y-4">
  <p>
    Nous sommes toujours à votre écoute ! Pour toute demande d'information,
    réservation, ou besoin spécifique, n'hésitez pas à nous contacter via le
    formulaire ci-dessous. Notre équipe s'engage à vous répondre dans les plus
    brefs délais pour assurer que votre séjour chez nous soit aussi agréable et
    personnalisé que possible. Votre satisfaction est notre priorité.
  </p>
  <p className="font-semibold text-gray-900">
    Nous contacter de préférence par téléphone que par mail, c'est plus convivial.
  </p>
</div>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Nom' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'  name='name'/>
                <input type='email' placeholder='E-mail' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
            </div>
            <textarea rows='6' placeholder='Message' required  className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
            <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>
            Envoyer votre message <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>
        
        <p className='mt-4'>{result}</p>
        
        
        </form>

    </div>
  )
}

export default Contact