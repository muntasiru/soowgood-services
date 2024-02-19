const Footer = () => {
  return (
    <>
      <footer className=" bg-primary">
        <div className="container footer py-16 text-white">
          <div className="max-w-[220px]">
            <img src="../../../../assets/SoowGood-Logo.png" alt="" />
            <p>Consult your patients anywhere anytime.</p>

            <p className="mt-5">
              <i className="fa-solid fa-phone mr-2 text-secondary"></i>
              +8801605-144633
            </p>
            <p>
              <i className="fa-solid fa-paper-plane mr-2 text-secondary"></i>
              info&#64;soowgood.com
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-location-dot mr-2 text-secondary"></i>
              <span>
                Mahtab Center (12th Floor), Room #10, Bijoynagar, Dhaka 1000
              </span>
            </p>
          </div>
          <div>
            <span className="font-Roboto mb-4 text-[20px] text-white">
              Company
            </span>
            <a className="link link-hover opacity-80" href="/about-us">
              About us
            </a>
            <a className="link link-hover opacity-80" href="/contact-us">
              Support
            </a>
            <a className="link link-hover opacity-80">Soowgood points</a>
            <a className="link link-hover opacity-80">Village booths</a>
            <a className="link link-hover opacity-80">Press kit</a>
          </div>

          <div>
            <span className="font-Roboto mb-4 text-[20px] text-white">
              Licence
            </span>
            <a className="link link-hover opacity-80">TL : 039455/2022</a>
            <a className="link link-hover opacity-80">BIN : 005606801-0208</a>
            <a className="link link-hover opacity-80" href="/privacy">
              Privacy policy
            </a>
            <a className="link link-hover opacity-80" href="/terms-services">
              Terms & Condition
            </a>
            <a className="link link-hover opacity-80" href="/refund-policy">
              Refund Policy
            </a>
            <a
              className="link link-hover opacity-80"
              href="/acoount-delete-request"
            >
              Acount Delete Request
            </a>
          </div>
        </div>
      </footer>
      <footer className="bg-primary">
        <div className="container">
          <img src="assets/payment/sslcommerz-banner.webp" alt="ssl-banner" />
        </div>
        <div className="container mt-5 footer py-4 border-t text-white border-base-300">
          <div className="items-center grid-flow-col">
            {/* <img src="assets/SoowGood-Icon.png" width="30px" alt="">  */}
            <div>
              <h1 className="text-[18px] font-Roboto">Soowgood Ltd</h1>
              <p className="mt-4">
                Providing reliable helth solution since 2021
              </p>
              <p>Developed by Coppanet©all right reserved 2023</p>
            </div>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
