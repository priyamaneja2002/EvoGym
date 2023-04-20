import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "EvoGyms have the latest equipment, are spacious, clean, and provide a welcoming environment that motivates members to achieve their fitness goals. These facilities include Cardio and Strength Training Equipments, Functional Training Area, Swimming pool, Locker Rooms, Nutrition Counseling, Group Exercise Studio and much more."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "EvoGyms offers a wide range of exercise classes to cater to different fitness levels, interests, and goals of its members. These classes include traditional offerings like cardio, strength training, and yoga, as well as more specialized classes like Pilates, Zumba, kickboxing, dance, cycling, and more."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Our Trainers help individuals achieve their fitness and health goals in a safe and effective manner. Their education, training, and experience allow them to provide clients with the knowledge, guidance, and support they need to make sustainable changes to their lifestyle and achieve long-term success."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 } 
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
           onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* {Header} */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5 }}
                transition={{ duration : 0.5 }}
                variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and 
                classes to get you to your ultimate fitness goats with ease. 
                We provide true care into each and every member.
                </p>
            </motion.div>

            {/* {Benefits} */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}                
            </motion.div>

            {/* {Graphic and Description} */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* {Graphic} */}
                <img 
                    className="mx-auto"
                    src={BenefitsPageGraphic} 
                    alt="benefits-page-graphic" 
                />

                {/* {Description} */}
                <div className="">
                    {/* {Title} */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div 
                                className="mt-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once : true, amount: 0.5 }}
                                transition={{ duration : 0.5 }}
                                variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0}
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* {Description} */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once : true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration : 0.5 }}
                        variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0}
                        }}
                    >
                        <p className="my-5">
                        At our gym, we understand that fitness is about more than just 
                        working out. That's why we also offer a range of amenities designed 
                        to help you relax, unwind, and recover after your workout. From sauna 
                        and steam rooms to massage chairs and protein shakes, we've got everything 
                        you need to feel your best.
                        </p>
                        <p className="mb-5">
                        Above all, we pride ourselves on creating a community that is inclusive, 
                        supportive, and fun. Our members come from all walks of life, and we welcome 
                        everyone with open arms. Whether you're a seasoned athlete or a complete beginner, 
                        you'll find the support and encouragement you need to reach your fitness goals at our gym.
                        </p>
                        <p className="mb-5">
                        So why wait? Join the millions of happy members who are already getting fit and feeling great at our gym!
                        </p>
                    </motion.div>

                    {/* {Button} */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits