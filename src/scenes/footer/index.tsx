import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
        <footer
            className="bg-primary-100 py-16"
        >
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Unrivaled Gym. Unparalled Training Fitness Classes. World Class Studios to get the Body Shapes that you Dream of.. Get Your Dream Body Now!
                        At our gym, we understand that fitness is about more than just working out. That's why we also offer a range of amenities designed to help you relax, unwind, and recover after your workout.
                    </p>
                    <p>
                    ©️Evogym All Rights Reserved.
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Founder</p>
                    <p className="my-5">Why Choose Us</p>
                    <p className="my-5">Franchise</p>
                    <p>Membership</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">EvoGym, Dwarka Sector-21, New Delhi, India</p>
                    <p className="my-5">evogym2023@gmail.com</p>
                    <p className="my-5">(91)77777-77777</p>
                    <p>(91)88888-88888</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer