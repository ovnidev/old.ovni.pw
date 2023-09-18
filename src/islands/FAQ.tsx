export default function FAQ() {
	return (
		<>
            <div class="p-5 pt-[100px] pb-[150px] md:max-w-[800px] md:mx-auto text-[#ffffff]">

                <h2 class="text-[36px] md:text-[40px] font-bold mb-[80px] text-center">
                    Frequently Asked Questions
                </h2>

                <div class="w-full md:max-w-[600px] md:mx-auto">

                    <div class="collapse join-item !px-0">
                        <input type="radio" name="faq" checked /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">What is this?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[-10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            Here you can generate a unique and totally secure password for each web page. Security is based on the fact that you will not need to save the password for each website anywhere. Through this website, you can obtain your password directly without storing it.
                        </p>
                    </div>

                    <div class="collapse join-ite !px-0m">
                        <input type="radio" name="faq" /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">How does the website system work?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[10px] md:mt-[-10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            The system creates a hash of your master password, and another hash of the word or phrase you enter for the service/website. Then create a new hash by joining the previously generated hashes, and create a seed with the last hash to generate your final password. This way, whenever you type the same master password and the same service/website word or phrase, it will always generate the same final password, so you can return to this website to remember the password.
                        </p>
                    </div>

                    <div class="collapse join-ite !px-0m">
                        <input type="radio" name="faq" /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">How should I use the website?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[10px] md:mt-[-10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            It is very simple. Write a master password (a password that you will always remember but you have not entered it on any website), then write a word or phrase depending on the website where you are going to use it (for example: x.com). The result will be the password that you should use for your account on that website. It is a password that is impossible to remember because it is complex and secure, so if you want to remember it, return to this website and enter the same master password and the same word or phrase that you used to generate the password.
                        </p>
                    </div>

                    <div class="collapse join-item !px-0">
                        <input type="radio" name="faq" /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">This website store my passwords?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[10px] md:mt-[-10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            No, this website works locally in your browser, and you can see the source code in the <a class="text-[#fff] underline hover:text-[#ffc873]" href="https://github.com/ovniroto/ovnipw">official repository on github</a>.
                        </p>
                    </div>

                    <div class="collapse join-item !px-0">
                        <input type="radio" name="faq" /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">Why is this method so safe?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[10px] md:mt-[-10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            To start you just have to memorize the master password, which you will never have to save anywhere nor will it be stored on any website. This master password, along with the phrase or word you use for each website, will generate a unique hash, which will be used to generate the final password that you will use on each website. In this way, with a single master password you can generate multiple passwords for each website.
                        </p>
                    </div>

                    <div class="collapse join-item !px-0">
                        <input type="radio" name="faq" /> 
                        <h2 class="collapse-title text-[20px] md:text-[28px] font-bold !p-0">What happens if someone discovers my master password?</h2>
                        <p class="collapse-content text-[16px] md:text-[18px] mt-[10px] mb-[10px] !px-0 opacity-[0.95] text-[#ffffff]">
                            Even if someone discovers your master password, they won't be able to obtain the passwords for each website because they will also need the phrase or word you used to generate the password for each website. Likewise, if someone finds out the phrase you use to generate passwords, they will also need the master password.
                        </p>
                    </div>

                </div>

            </div>
		</>
	)
}